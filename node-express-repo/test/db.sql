PGDMP     )    (    	        	    x            node_express_3    12.4    12.4 |    ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    33356    node_express_3    DATABASE     ?   CREATE DATABASE node_express_3 WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE node_express_3;
                postgres    false            ?            1259    33397    blogs    TABLE     l  CREATE TABLE public.blogs (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    content character varying(255) NOT NULL,
    date timestamp with time zone,
    author character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "blogsCategoryId" integer NOT NULL
);
    DROP TABLE public.blogs;
       public         heap    postgres    false            ?            1259    33389    blogs_categories    TABLE     ?   CREATE TABLE public.blogs_categories (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 $   DROP TABLE public.blogs_categories;
       public         heap    postgres    false            ?            1259    33387    blogs_categories_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.blogs_categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.blogs_categories_id_seq;
       public          postgres    false    207            ?           0    0    blogs_categories_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.blogs_categories_id_seq OWNED BY public.blogs_categories.id;
          public          postgres    false    206            ?            1259    33502    blogs_comments    TABLE       CREATE TABLE public.blogs_comments (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    comment character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "blogId" integer
);
 "   DROP TABLE public.blogs_comments;
       public         heap    postgres    false            ?            1259    33500    blogs_comments_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.blogs_comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.blogs_comments_id_seq;
       public          postgres    false    223            ?           0    0    blogs_comments_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.blogs_comments_id_seq OWNED BY public.blogs_comments.id;
          public          postgres    false    222            ?            1259    33395    blogs_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.blogs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.blogs_id_seq;
       public          postgres    false    209            ?           0    0    blogs_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.blogs_id_seq OWNED BY public.blogs.id;
          public          postgres    false    208            ?            1259    33426    covid    TABLE     ?  CREATE TABLE public.covid (
    id integer NOT NULL,
    "newConfirmed" integer NOT NULL,
    "totalConfirmed" integer NOT NULL,
    "newDeaths" integer NOT NULL,
    "totalDeaths" integer NOT NULL,
    "newRecovered" integer NOT NULL,
    "totalRecovered" integer NOT NULL,
    date timestamp with time zone NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "covidCountryId" integer NOT NULL
);
    DROP TABLE public.covid;
       public         heap    postgres    false            ?            1259    33418    covid_countries    TABLE     ?   CREATE TABLE public.covid_countries (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 #   DROP TABLE public.covid_countries;
       public         heap    postgres    false            ?            1259    33416    covid_countries_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.covid_countries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.covid_countries_id_seq;
       public          postgres    false    211            ?           0    0    covid_countries_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.covid_countries_id_seq OWNED BY public.covid_countries.id;
          public          postgres    false    210            ?            1259    33424    covid_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.covid_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.covid_id_seq;
       public          postgres    false    213            ?           0    0    covid_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.covid_id_seq OWNED BY public.covid.id;
          public          postgres    false    212            ?            1259    33523 
   covid_news    TABLE     ?   CREATE TABLE public.covid_news (
    id integer NOT NULL,
    content character varying(255) NOT NULL,
    date timestamp with time zone NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.covid_news;
       public         heap    postgres    false            ?            1259    33521    covid_news_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.covid_news_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.covid_news_id_seq;
       public          postgres    false    225            ?           0    0    covid_news_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.covid_news_id_seq OWNED BY public.covid_news.id;
          public          postgres    false    224            ?            1259    33481    products    TABLE     P  CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    details text NOT NULL,
    summary text NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "productsCategoryId" integer NOT NULL,
    price double precision NOT NULL
);
    DROP TABLE public.products;
       public         heap    postgres    false            ?            1259    33473    products_categories    TABLE     ?   CREATE TABLE public.products_categories (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 '   DROP TABLE public.products_categories;
       public         heap    postgres    false            ?            1259    33471    products_categories_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.products_categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.products_categories_id_seq;
       public          postgres    false    219            ?           0    0    products_categories_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.products_categories_id_seq OWNED BY public.products_categories.id;
          public          postgres    false    218            ?            1259    33479    products_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public          postgres    false    221            ?           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public          postgres    false    220            ?            1259    33378    projects    TABLE     ?  CREATE TABLE public.projects (
    id integer NOT NULL,
    "projectName" character varying(255) NOT NULL,
    cost double precision NOT NULL,
    schedule integer NOT NULL,
    description text NOT NULL,
    "startDate" timestamp with time zone NOT NULL,
    "endDate" timestamp with time zone NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.projects;
       public         heap    postgres    false            ?            1259    33531    projects_data    TABLE     ?  CREATE TABLE public.projects_data (
    id integer NOT NULL,
    "actualCost" double precision NOT NULL,
    "plannedCost" double precision NOT NULL,
    "actualSchedule" integer NOT NULL,
    "plannedSchedule" integer NOT NULL,
    date timestamp with time zone NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "projectId" integer
);
 !   DROP TABLE public.projects_data;
       public         heap    postgres    false            ?            1259    33529    projects_data_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.projects_data_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.projects_data_id_seq;
       public          postgres    false    227            ?           0    0    projects_data_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.projects_data_id_seq OWNED BY public.projects_data.id;
          public          postgres    false    226            ?            1259    33376    projects_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.projects_id_seq;
       public          postgres    false    205            ?           0    0    projects_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;
          public          postgres    false    204            ?            1259    33452    services    TABLE       CREATE TABLE public.services (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description text NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "servicesCategoryId" integer NOT NULL
);
    DROP TABLE public.services;
       public         heap    postgres    false            ?            1259    33444    services_categories    TABLE     ?   CREATE TABLE public.services_categories (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 '   DROP TABLE public.services_categories;
       public         heap    postgres    false            ?            1259    33442    services_categories_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.services_categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.services_categories_id_seq;
       public          postgres    false    215            ?           0    0    services_categories_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.services_categories_id_seq OWNED BY public.services_categories.id;
          public          postgres    false    214            ?            1259    33549    services_details    TABLE     ?   CREATE TABLE public.services_details (
    id integer NOT NULL,
    details text NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "serviceId" integer
);
 $   DROP TABLE public.services_details;
       public         heap    postgres    false            ?            1259    33547    services_details_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.services_details_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.services_details_id_seq;
       public          postgres    false    229            ?           0    0    services_details_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.services_details_id_seq OWNED BY public.services_details.id;
          public          postgres    false    228            ?            1259    33450    services_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.services_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.services_id_seq;
       public          postgres    false    217            ?           0    0    services_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.services_id_seq OWNED BY public.services.id;
          public          postgres    false    216            ?            1259    33359    users    TABLE     U  CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "firstName" character varying(255),
    "lastName" character varying(255),
    phone text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            ?            1259    33357    users_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    203            ?           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    202            ?
           2604    33400    blogs id    DEFAULT     d   ALTER TABLE ONLY public.blogs ALTER COLUMN id SET DEFAULT nextval('public.blogs_id_seq'::regclass);
 7   ALTER TABLE public.blogs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    208    209    209            ?
           2604    33392    blogs_categories id    DEFAULT     z   ALTER TABLE ONLY public.blogs_categories ALTER COLUMN id SET DEFAULT nextval('public.blogs_categories_id_seq'::regclass);
 B   ALTER TABLE public.blogs_categories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    207    206    207            ?
           2604    33505    blogs_comments id    DEFAULT     v   ALTER TABLE ONLY public.blogs_comments ALTER COLUMN id SET DEFAULT nextval('public.blogs_comments_id_seq'::regclass);
 @   ALTER TABLE public.blogs_comments ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222    223            ?
           2604    33429    covid id    DEFAULT     d   ALTER TABLE ONLY public.covid ALTER COLUMN id SET DEFAULT nextval('public.covid_id_seq'::regclass);
 7   ALTER TABLE public.covid ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    213    213            ?
           2604    33421    covid_countries id    DEFAULT     x   ALTER TABLE ONLY public.covid_countries ALTER COLUMN id SET DEFAULT nextval('public.covid_countries_id_seq'::regclass);
 A   ALTER TABLE public.covid_countries ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    211    211            ?
           2604    33526    covid_news id    DEFAULT     n   ALTER TABLE ONLY public.covid_news ALTER COLUMN id SET DEFAULT nextval('public.covid_news_id_seq'::regclass);
 <   ALTER TABLE public.covid_news ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    224    225            ?
           2604    33484    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    221    221            ?
           2604    33476    products_categories id    DEFAULT     ?   ALTER TABLE ONLY public.products_categories ALTER COLUMN id SET DEFAULT nextval('public.products_categories_id_seq'::regclass);
 E   ALTER TABLE public.products_categories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218    219            ?
           2604    33381    projects id    DEFAULT     j   ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);
 :   ALTER TABLE public.projects ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    204    205    205            ?
           2604    33534    projects_data id    DEFAULT     t   ALTER TABLE ONLY public.projects_data ALTER COLUMN id SET DEFAULT nextval('public.projects_data_id_seq'::regclass);
 ?   ALTER TABLE public.projects_data ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    227    227            ?
           2604    33455    services id    DEFAULT     j   ALTER TABLE ONLY public.services ALTER COLUMN id SET DEFAULT nextval('public.services_id_seq'::regclass);
 :   ALTER TABLE public.services ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217            ?
           2604    33447    services_categories id    DEFAULT     ?   ALTER TABLE ONLY public.services_categories ALTER COLUMN id SET DEFAULT nextval('public.services_categories_id_seq'::regclass);
 E   ALTER TABLE public.services_categories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215            ?
           2604    33552    services_details id    DEFAULT     z   ALTER TABLE ONLY public.services_details ALTER COLUMN id SET DEFAULT nextval('public.services_details_id_seq'::regclass);
 B   ALTER TABLE public.services_details ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    229    228    229            ?
           2604    33362    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202    203            ?          0    33397    blogs 
   TABLE DATA           n   COPY public.blogs (id, title, content, date, author, "createdAt", "updatedAt", "blogsCategoryId") FROM stdin;
    public          postgres    false    209   ??       ?          0    33389    blogs_categories 
   TABLE DATA           N   COPY public.blogs_categories (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    207   H?       ?          0    33502    blogs_comments 
   TABLE DATA           `   COPY public.blogs_comments (id, email, comment, "createdAt", "updatedAt", "blogId") FROM stdin;
    public          postgres    false    223   ??       ?          0    33426    covid 
   TABLE DATA           ?   COPY public.covid (id, "newConfirmed", "totalConfirmed", "newDeaths", "totalDeaths", "newRecovered", "totalRecovered", date, "createdAt", "updatedAt", "covidCountryId") FROM stdin;
    public          postgres    false    213   ޘ       ?          0    33418    covid_countries 
   TABLE DATA           M   COPY public.covid_countries (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    211   D?       ?          0    33523 
   covid_news 
   TABLE DATA           Q   COPY public.covid_news (id, content, date, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    225   ??       ?          0    33481    products 
   TABLE DATA           u   COPY public.products (id, name, details, summary, "createdAt", "updatedAt", "productsCategoryId", price) FROM stdin;
    public          postgres    false    221   ?       ?          0    33473    products_categories 
   TABLE DATA           Q   COPY public.products_categories (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    219   ??       ?          0    33378    projects 
   TABLE DATA           ?   COPY public.projects (id, "projectName", cost, schedule, description, "startDate", "endDate", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    205   $?       ?          0    33531    projects_data 
   TABLE DATA           ?   COPY public.projects_data (id, "actualCost", "plannedCost", "actualSchedule", "plannedSchedule", date, "createdAt", "updatedAt", "projectId") FROM stdin;
    public          postgres    false    227   ̝       ?          0    33452    services 
   TABLE DATA           i   COPY public.services (id, name, description, "createdAt", "updatedAt", "servicesCategoryId") FROM stdin;
    public          postgres    false    217   Z?       ?          0    33444    services_categories 
   TABLE DATA           Q   COPY public.services_categories (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   ??       ?          0    33549    services_details 
   TABLE DATA           ^   COPY public.services_details (id, details, "createdAt", "updatedAt", "serviceId") FROM stdin;
    public          postgres    false    229   ??       ?          0    33359    users 
   TABLE DATA           n   COPY public.users (id, email, password, "firstName", "lastName", phone, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    203   ??       ?           0    0    blogs_categories_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.blogs_categories_id_seq', 1, false);
          public          postgres    false    206            ?           0    0    blogs_comments_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.blogs_comments_id_seq', 1, false);
          public          postgres    false    222            ?           0    0    blogs_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.blogs_id_seq', 4, true);
          public          postgres    false    208            ?           0    0    covid_countries_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.covid_countries_id_seq', 1, false);
          public          postgres    false    210            ?           0    0    covid_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.covid_id_seq', 21, true);
          public          postgres    false    212            ?           0    0    covid_news_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.covid_news_id_seq', 1, false);
          public          postgres    false    224            ?           0    0    products_categories_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.products_categories_id_seq', 1, false);
          public          postgres    false    218            ?           0    0    products_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.products_id_seq', 1, true);
          public          postgres    false    220            ?           0    0    projects_data_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.projects_data_id_seq', 1, true);
          public          postgres    false    226            ?           0    0    projects_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.projects_id_seq', 1, false);
          public          postgres    false    204            ?           0    0    services_categories_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.services_categories_id_seq', 1, false);
          public          postgres    false    214            ?           0    0    services_details_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.services_details_id_seq', 1, false);
          public          postgres    false    228            ?           0    0    services_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.services_id_seq', 4, true);
          public          postgres    false    216            ?           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 1, true);
          public          postgres    false    202                       2606    33394 &   blogs_categories blogs_categories_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.blogs_categories
    ADD CONSTRAINT blogs_categories_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.blogs_categories DROP CONSTRAINT blogs_categories_pkey;
       public            postgres    false    207                       2606    33510 "   blogs_comments blogs_comments_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.blogs_comments
    ADD CONSTRAINT blogs_comments_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.blogs_comments DROP CONSTRAINT blogs_comments_pkey;
       public            postgres    false    223                       2606    33405    blogs blogs_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT blogs_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.blogs DROP CONSTRAINT blogs_pkey;
       public            postgres    false    209            	           2606    33423 $   covid_countries covid_countries_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.covid_countries
    ADD CONSTRAINT covid_countries_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.covid_countries DROP CONSTRAINT covid_countries_pkey;
       public            postgres    false    211                       2606    33528    covid_news covid_news_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.covid_news
    ADD CONSTRAINT covid_news_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.covid_news DROP CONSTRAINT covid_news_pkey;
       public            postgres    false    225                       2606    33431    covid covid_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.covid
    ADD CONSTRAINT covid_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.covid DROP CONSTRAINT covid_pkey;
       public            postgres    false    213                       2606    33478 ,   products_categories products_categories_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.products_categories
    ADD CONSTRAINT products_categories_pkey PRIMARY KEY (id);
 V   ALTER TABLE ONLY public.products_categories DROP CONSTRAINT products_categories_pkey;
       public            postgres    false    219                       2606    33489    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    221                       2606    33536     projects_data projects_data_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.projects_data
    ADD CONSTRAINT projects_data_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.projects_data DROP CONSTRAINT projects_data_pkey;
       public            postgres    false    227                       2606    33386    projects projects_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.projects DROP CONSTRAINT projects_pkey;
       public            postgres    false    205                       2606    33449 ,   services_categories services_categories_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.services_categories
    ADD CONSTRAINT services_categories_pkey PRIMARY KEY (id);
 V   ALTER TABLE ONLY public.services_categories DROP CONSTRAINT services_categories_pkey;
       public            postgres    false    215                       2606    33557 &   services_details services_details_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.services_details
    ADD CONSTRAINT services_details_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.services_details DROP CONSTRAINT services_details_pkey;
       public            postgres    false    229                       2606    33460    services services_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.services
    ADD CONSTRAINT services_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.services DROP CONSTRAINT services_pkey;
       public            postgres    false    217            ?
           2606    34222    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    203            ?
           2606    34224    users users_email_key1 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key1 UNIQUE (email);
 @   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key1;
       public            postgres    false    203            ?
           2606    34242    users users_email_key10 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key10 UNIQUE (email);
 A   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key10;
       public            postgres    false    203            ?
           2606    34244    users users_email_key11 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key11 UNIQUE (email);
 A   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key11;
       public            postgres    false    203            ?
           2606    34246    users users_email_key12 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key12 UNIQUE (email);
 A   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key12;
       public            postgres    false    203            ?
           2606    34248    users users_email_key13 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key13 UNIQUE (email);
 A   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key13;
       public            postgres    false    203            ?
           2606    34250    users users_email_key14 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key14 UNIQUE (email);
 A   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key14;
       public            postgres    false    203            ?
           2606    34226    users users_email_key2 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key2 UNIQUE (email);
 @   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key2;
       public            postgres    false    203            ?
           2606    34228    users users_email_key3 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key3 UNIQUE (email);
 @   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key3;
       public            postgres    false    203            ?
           2606    34230    users users_email_key4 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key4 UNIQUE (email);
 @   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key4;
       public            postgres    false    203            ?
           2606    34232    users users_email_key5 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key5 UNIQUE (email);
 @   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key5;
       public            postgres    false    203            ?
           2606    34234    users users_email_key6 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key6 UNIQUE (email);
 @   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key6;
       public            postgres    false    203            ?
           2606    34236    users users_email_key7 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key7 UNIQUE (email);
 @   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key7;
       public            postgres    false    203            ?
           2606    34238    users users_email_key8 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key8 UNIQUE (email);
 @   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key8;
       public            postgres    false    203            ?
           2606    34240    users users_email_key9 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key9 UNIQUE (email);
 @   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key9;
       public            postgres    false    203                       2606    33367    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    203                       2606    34251     blogs blogs_blogsCategoryId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT "blogs_blogsCategoryId_fkey" FOREIGN KEY ("blogsCategoryId") REFERENCES public.blogs_categories(id) ON UPDATE CASCADE;
 L   ALTER TABLE ONLY public.blogs DROP CONSTRAINT "blogs_blogsCategoryId_fkey";
       public          postgres    false    209    207    2821                        2606    34271 )   blogs_comments blogs_comments_blogId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.blogs_comments
    ADD CONSTRAINT "blogs_comments_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES public.blogs(id) ON UPDATE CASCADE ON DELETE SET NULL;
 U   ALTER TABLE ONLY public.blogs_comments DROP CONSTRAINT "blogs_comments_blogId_fkey";
       public          postgres    false    209    223    2823                       2606    34256    covid covid_covidCountryId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.covid
    ADD CONSTRAINT "covid_covidCountryId_fkey" FOREIGN KEY ("covidCountryId") REFERENCES public.covid_countries(id) ON UPDATE CASCADE;
 K   ALTER TABLE ONLY public.covid DROP CONSTRAINT "covid_covidCountryId_fkey";
       public          postgres    false    213    211    2825                       2606    34266 )   products products_productsCategoryId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.products
    ADD CONSTRAINT "products_productsCategoryId_fkey" FOREIGN KEY ("productsCategoryId") REFERENCES public.products_categories(id) ON UPDATE CASCADE;
 U   ALTER TABLE ONLY public.products DROP CONSTRAINT "products_productsCategoryId_fkey";
       public          postgres    false    2833    221    219            !           2606    34276 *   projects_data projects_data_projectId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.projects_data
    ADD CONSTRAINT "projects_data_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public.projects(id) ON UPDATE CASCADE ON DELETE SET NULL;
 V   ALTER TABLE ONLY public.projects_data DROP CONSTRAINT "projects_data_projectId_fkey";
       public          postgres    false    227    205    2819            "           2606    34281 0   services_details services_details_serviceId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.services_details
    ADD CONSTRAINT "services_details_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES public.services(id) ON UPDATE CASCADE ON DELETE SET NULL;
 \   ALTER TABLE ONLY public.services_details DROP CONSTRAINT "services_details_serviceId_fkey";
       public          postgres    false    217    2831    229                       2606    34261 )   services services_servicesCategoryId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.services
    ADD CONSTRAINT "services_servicesCategoryId_fkey" FOREIGN KEY ("servicesCategoryId") REFERENCES public.services_categories(id) ON UPDATE CASCADE;
 U   ALTER TABLE ONLY public.services DROP CONSTRAINT "services_servicesCategoryId_fkey";
       public          postgres    false    217    2829    215            ?   ?   x?u??
?0???S?.+iڎٛ??????Ɋ+?Y??;?p???|I?D?M`K?Odq????B:??2 }?@?}??}C*?ܠ??gC?
??A???H???C?/?n??/??\	ݐPIv??b??6i?????????M];?V?5??j;??G?"??%? ?9?.!I?R? ?dk?      ?   i   x?}̽
?0?9?)?????*?ء?ޱ?b?????
???a7n~?????ъy?I??????ĽKYn?`?:h?9+??????ٿ*?&E??0 V???7?/?-?      ?      x?????? ? ?      ?   V  x???[n?0?oi?????(J^??s???8r
4@l?:??P95?$?ZKL?M????$$???#?Ս???oo??B?߄8K?I5P?_?y;?l%????*?!녹=$M#$?-ٓ?SmA)m?e?z⌏???\?N???tO?????ؕ??p6??YRz@?qC??~??J?MZ??7!?xkV??:??B3h㠍????"z??C???L???R\??CT}??Ҋ?b?7!?x~էg?ܜ?'z??e_ic/2?](?T5??6?/????F?ܪ???*j???C(???t?"?죡Rl??7`??⏆Z?2srpmn??eVf/ʇ??ӍkA*?B????z??S?????qW?`}VE???c(s??}??{#?"Z?H?Z????vM?B?kLb47I1'e?Á?#?h??????s(st|LLQ??h3???戱)k??q
i??t? %H??yN????M?'?	?t?}?C N???t"???՘?>??y
??x?0u? ?$?$??6???br^?r????ۋ??s.??}?u+?<?wW?܇4?%"k???۳O?l_7
?qdE???9?`r??2q,Nr<H?M???1E??ߘSH???s?W???      ?   e   x?}?=
?0@?99???$iZmw=?K? ?????S???c?k?3	&#?	'??jՇ]O??(??3?w??y??S??T?#???t???ġy?+?/??*
      ?   N   x?3???K?LT(?W((?O)MNUH?/?LQ(KLN??K?4202?54?52Q02?20?2??330443?60?D?+F??? j-      ?   ?   x?3?tI??
ɜ?I??%
`!##]C]##c+#K+=c3m|R??@?e??Q D
>?%?Ps|T???M?̍-1G??n?霘??!?2?JR?????	?gded?gnf??&d)cN#?M1z\\\ ?tC?      ?   ^   x?3?t??-(-I-?4202?54?52Q02?2??24ճ?0?0??60?/?e???XP?_???????L???????4Y.c΀??<L??fJ? `?,K      ?   ?   x?????0??W?G??{؎?t5F????H?@?????C??G?^rd!k?1t?2V??,???Y#&?Db??,??*?????l???_쇡$??c+??lGA?souXT??c;?G?/>;?%?Cd?׋Ru2J?'
?n!      ?   ~  x???Kn? E??U?<
?/???????~??Y?A??>??c???(?HY?S?S???p?E<???[??)YT?*???;֓?\??;u?sw??]!??dm???Uٜ?"?????s=*??9?s)??'UJϚ??}=)?w?????g????0$???/??dC|h-??ki?d.dVa????P???*v 3s2?V???O	??#??6c&???ǈ^??@(??[Ф?i??V,^?d???4iw?>Fd???>`TL??)??)[i{۶	z?O?@kk??!V??@??5)_N?0
?^??R??(?)r?Q9?Jߟ??&?\??.Q
?]w?2z?W?;J?0+.?N??pn?q>?6pRy??*TqV(?^.1?b F??=?߲m??9??`      ?   ?   x?}?1?0??9?+?KC?.F?Mtй?K????%^???K?DǏ??>ś\t???zN?b?%۠m?i??>X2??º?@? ???q?2?6?a]?"ƭA?՟7~????U@2??J????]????????T??l?Lէ?? ???bx      ?   w   x?}̻?0F?9~??U??NZڬt???%B?@BP???g?R1G??N??????y9?????J?"??#B? ?4H?????/?y?W?M;#d??:zW?n*V?Vo????,??>??>????^Ѥ0y      ?   V   x?3?LL?/-QHI-I??)V0?4202?54?52S0??2"3=3K3Csm??\Fh???06?26?366166?4C?+F??? F?#j      ?   ?   x?3?L?+uH?M???K???T1JT14P1?.Я,12??0?v7s?(??K?7??t??L???u4?5t6s3r????65?t?+?.JM?442153???4202?54?52U04?24?20?361?60?#????? ?&-     