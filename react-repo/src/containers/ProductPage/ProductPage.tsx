/*
* Container class ProductPage.tsx.
*
* @author Vineetha
* @version 1.0.1
*/

import React, { Component, Fragment } from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { produce } from  'immer';

import Product from '../../components/products/product';
import * as actionCreators from '../../store/actions/index';
import { Message, Breadcrumb, Form2, Search } from '../../components/ui/index';
import Layout1 from '../../hoc/ApplyLayouts/Layout2';


interface MatchParams {
    id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
    products: any;
    categories: any;
    selectedCategory: any;
    error: any;
    noData: any;
    onInitProductPage: any;
    onSetSelectedCategory: any;
    onUpdateProductPage: any;
    onProductSearch: any;
}

class ProductPage extends Component<Props> {

    dropDownProducts: React.RefObject<HTMLSelectElement>;

    constructor( props: any ) {
        super( props );
        this.dropDownProducts = React.createRef<HTMLSelectElement>( );
    }

    DEFAULT_CATEGORY_ID = 0;
    DEFAULT_CATEGORY_NAME = 'All';
    allProducts: any = null;

    state = {
        form: {
          preference: {
            elementType: 'select',
            elementConfig: {
                type: 'select',
                options:[ ],
                label: '',
                warning: '',
                help: ''
            },
            validation: {
                required: false
            },
            valid: true,
            touched: false
          }
        }
    }

    inputChangeHandler = ( event: any ) => {
  
        const selectedCategoryId = Number(event.target.value);

        if ( selectedCategoryId !== this.props.selectedCategory ) {

          this.props.onSetSelectedCategory( selectedCategoryId );
          this.props.history.push(`/products?productsCategoryId=${selectedCategoryId}`);
        }
    }
    
    render( ) {

        // console.log( 'ProductPage rendering...' );

        let products: any = this.props.products;
        let productsJSX: any;

        if ( products ) {
            
            productsJSX = products.map(
                ( item: any, index: number) => {
                    return (
                        <Product
                            name = { item.name }
                            price = { `INR ${item.price}` }
                            details = { item.details }
                            summary = { item.summary }
                            key = { item.id }/>
                    )
                }
            );
        }

        let categories: any = this.props.categories;
        let categoriesJSX: any = '';
        let searchJSX: any = '';
        let breadCrumbJSX: any = '';
        
        if ( categories ) {  

            let options = categories.map( (option: any) => {
                return { value: option.id, displayValue: option.name }
            } );

            let updatedForm = produce( this.state.form, (formControl:any) => {
                formControl['preference'].elementConfig.options = options;
            } );

            categoriesJSX = (
                <Form2
                    formConfig = { updatedForm }
                    onChange = { this.inputChangeHandler }
                    focusRef = { this.dropDownProducts }
                />
            );  
        }

        if ( this.props.error ) {

            productsJSX = (
                <Message
                    variant = "warning"
                    content = {`${ this.props.error.code } ${ this.props.error.message }`}
                />
            );
        }

        searchJSX = (
           <Search
                onChange = { this.searchHandler }/>
        );

        breadCrumbJSX = ( 
            <Breadcrumb 
                items = { null }
                active = 'Products'/>
        );

        return (           
            <Fragment>
                <Layout1
                    breadCrumbJSX = { breadCrumbJSX }
                    dropDownJSX = { categoriesJSX }
                    searchJSX = { searchJSX }
                    collectionsJSX = { productsJSX }
                    noData = { this.props.noData }/>
            </Fragment>
        );
    }

    searchHandler = ( event: any ) => {
        
        let searchProducts: any = this.allProducts;
        let searchResult: any = [ ];
        
        if( searchProducts ) {

            let products =  searchProducts?.filter(
                ( item: any ) => item.name.toLowerCase( ).includes( event.target.value.toLowerCase( ) ) || item.price === ( event.target.value )
            );
            searchResult = searchResult.concat( products );
        }
        
        if ( searchResult.length > 0 ) {
            
            this.props.onProductSearch( searchResult );
        }
    }
    
    componentDidMount( ) {

        // console.log( 'ProductPage ComponentDidMount' );
        let selectedCategory = ( this.props.match.params.id ) ? this.props.match.params.id : this.DEFAULT_CATEGORY_ID;
        this.props.onInitProductPage( selectedCategory );
        this.allProducts = this.props.products;
    }

    componentDidUpdate( ) {

        // console.log( 'ProductPage componentDidUpdate');

        this.dropDownProducts.current?.focus( );

        if ( !this.props.products && !this.props.error ) {
            
            this.props.onUpdateProductPage( this.props.selectedCategory );
        }
    }

    getCategoryNameFromId( id: string ): string {
        
        let categories: any = this.props.categories;
        return ( categories?.find(
            ( item: any ) => id === item.id
        )?.name );
    }
}

const mapStoreToProps = ( state: any ) => {

    return {
        products: state.productPage.products,
        categories: state.productPage.categories,
        selectedCategory: state.productPage.selectedCategory,
        noData: state.productPage.noData,
        error: state.productPage.error
    }
}

const matchDispatchProps = ( dispatch: any ) => {
    
    return {
        onInitProductPage: ( selectCategory: any ) => dispatch( actionCreators.initProductPage(selectCategory) ),
        onSetSelectedCategory: ( selectCategory: any ) => dispatch( actionCreators.setSelectedProductCategory(selectCategory) ),
        onUpdateProductPage: ( selectCategory: any ) => dispatch( actionCreators.updateProductPage(selectCategory) ),
        onProductSearch: ( searchResult: any ) => dispatch( actionCreators.productSearch(searchResult) )
    }
}

export default connect( mapStoreToProps, matchDispatchProps )( ProductPage );
