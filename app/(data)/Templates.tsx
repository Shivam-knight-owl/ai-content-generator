export default [
    {
        name: 'Blog Title',
        desc: 'An AI tool that generates blog title depends on your blog information.',
        category: 'Blog',
        icon: '/icons/blogtitle.png',
        aiPrompt: 'Give me 5 blog topic idea in bullet wise only based on give niche & outline with a catchy starting intro and give me result in Rich text editor format and in intro dont mention formatted as Rich Text Editor output:',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI-powered tool designed to craft engaging and high-quality blog content tailored to your topic and outline, ensuring it resonates with your audience.',
        category: 'blog',
        icon: '/icons/blogcontent.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Generate Blog Content based on topic and outline with a catchy starting intro in rich text editor format and in intro dont mention formatted as Rich Text Editor output:',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter blog Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI-driven tool that generates creative and trending blog topic ideas tailored to your niche, helping you stay ahead in content creation.',
        category: 'Blog',
        icon: '/icons/blogtopic.png',
        slug: 'blog-topic-idea',
        aiPrompt: 'Generate top 5 Blog Topic Ideas in bullet point only, (Brief 2-3 lines Description) based on niche with a catchy starting intro in rich text editor format and in intro dont mention formatted as Rich Text Editor output:',
        form: [
            {
                label: 'Enter your Niche',
                field: 'input',
                name: 'niche',
                required: true
            },
        ]
    },
    {
        name: 'Youtube SEO Title',
        desc: 'An AI-powered tool that generates SEO-optimized and attention-grabbing YouTube video titles to maximize your video’s reach and engagement.',
        category: 'Youtube Tools',
        icon: '/icons/youtubetitle.png',
        slug: 'youtube-seo-title',
        aiPrompt: 'Give me Best SEO optimized high ranked 5 title ideas bullet wise only based on keywords and outline with a catchy starting intro and give me result in Rich Text Editor format and in intro dont mention formatted as Rich Text Editor output:',
        form: [
            {
                label: 'Enter your youtube video topic keywords',
                field: 'input',
                name: 'keywords',
                required: true
            },
            {
                label: 'Enter youtube description Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Description',
        desc: 'An AI tool that crafts compelling and concise YouTube video descriptions, incorporating relevant keywords and emojis to enhance visibility and engagement.',
        category: 'Youtube Tool',
        icon: '/icons/youtubedesc.png',
        slug: 'youtube-description',
        aiPrompt: 'Generate 3 Youtube descriptions with emoji under 4-5 lines based on topic and outline with a catchy starting intro in rich text editor format and in intro dont mention formatted as Rich Text Editor output:',
        form: [
            {
                label: 'Enter your youtube video\'s topic/title',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter youtube Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: 'An AI tool that generates relevant and optimized YouTube tags to improve your video’s discoverability and search ranking.',
        category: 'Youtube Tool',
        icon: '/icons/youtubetags.png',
        slug: 'youtube-tag',
        aiPrompt: 'Generate 10 Youtube tags in bullet point based on title and outline with a catchy starting intro in rich text editor format and in intro dont mention formatted as Rich Text Editor output:',
        form: [
            {
                label: 'Enter your youtube video\'s title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter youtube video Outline here (Optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.',
        icon: '/icons/article.png',
        category: 'Rewriting Tool',
        slug: 'rewrite-article',
        aiPrompt: 'Rewrite given article without any Plagiarism with a catchy starting intro in rich text editor format and in intro dont mention formatted as Rich Text Editor output:',
        form: [
            {
                label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
                field: 'textarea',
                name: 'article',
                required: true
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
        icon: '/icons/text.png',
        category: 'Writing Assistant',
        slug: 'text-improver',
        aiPrompt: 'Given textToImprove, Rewrite text without any grammatical mistake and write it professionally with rich vocabulary in rich text editor format and in intro dont mention formatted as Rich Text Editor output:',
        form: [
            {
                label: 'Enter text that you want to re-write or improve',
                field: 'textarea',
                name: 'textToImprove'
            }
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: '/icons/emoji.png',
        category: 'blog',
        slug: 'add-emoji-to-text',
        aiPrompt: 'Add Emojis to outline text depends on outline and rewrite it in rich text editor format.',
        form: [
            {
                label: 'Enter your text to add emojis',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: '/icons/insta.png',
        category: 'blog',
        slug: 'instagram-post-generator',
        aiPrompt: 'Generate 3 Instagram post depends on a given keywords  with a heading showing the keywords, followed by the posts with a catchy starting intro in rich text editor format and in intro dont mention formatted as Rich Text Editor output:',
        form: [
            {
                label: 'Enter Keywords for your post',
                field: 'input',
                name: 'keywords',
                required: true
            },
        ]
    },
    {
        name: 'Instagram Hash Tag Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: '/icons/instahash.png',
        category: 'blog',
        slug: 'instagram-hash-tag-generator',
        aiPrompt: 'Generate 15 Instagram hash tag depends on a given keywords and give output with a catchy starting intro in rich text editor format and in intro dont mention formatted as Rich Text Editor output:',
        form: [
            {
                label: 'Enter Keywords for your instagram hastag',
                field: 'input',
                name: 'keywords',
                required: true
            },
        ]
    },
    {
        name: 'Instagram Post/Reel Idea',
        desc: 'An AI tool that generate New and trending instagram idea depends on your niche.',
        icon: '/icons/instaidea.png',
        category: 'instagram',
        slug: 'instagram-post-idea-generator',
        aiPrompt: 'Generate 5-10 Instagram idea depends on niche with latest trends and latest audio trends names with a catchy starting intro and give output in rich text editor format and in intro dont mention formatted as Rich Text Editor output:',
        form: [
            {
                label: 'Enter Keywords / Niche for your instagram idea',
                field: 'input',
                name: 'keywords',
                required: true
            },
        ]
    },
    {
        name: 'English Grammer Check',
        desc: 'AI Model to Correct your english grammer by providing the text.',
        icon: '/icons/grammar.png',
        category: 'english',
        slug: 'english-grammer-checker',
        aiPrompt: 'Rewrite the inputText by correcting grammatical mistakes, and return the output in plain text with bullet points and required formatting with a catchy starting intro, and also provide a brief explanation of the corrections made.',
        form: [
            {
                label: 'Enter text to correct the grammer',
                field: 'input',
                name: 'inputText',
                required: true
            },
        ]
    },
    {
        name: 'Write Code',
        desc: 'AI Model to generate programming code in any language.',
        icon: '/icons/code.png',
        category: 'Coding',
        slug: 'write-code',
        aiPrompt: 'Depends on user codeDescription write a code and give code output in rich text editor format in code block but explanation(include brief algorithm and small dry run of a example) and description in points, it should not be in code block, it should be in rich text editor format',
        form: [
            {
                label: 'Enter description of code you want along with Programming Lang',
                field: 'textarea',
                name: 'codeDescripton',
                required: true
            },
        ]
    },
    {
        name: 'Explain Code',
        desc: 'AI Model to explain programming code in any language.',
        icon: '/icons/explaincode.png',
        category: 'Coding',
        slug: 'explain-code',
        aiPrompt: 'Depends on user codeDescription explain code line by line in points, line by line explanation should not be in code block, it should be in rich text editor format',
        form: [
            {
                label: 'Enter code which you want to understand',
                field: 'textarea',
                name: 'codeDescripton',
                required: true
            },
        ]
    },
    {
        name: 'Code Bug Detector',
        desc: 'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.',
        icon: '/icons/codebug.png',
        category: 'code-bug-detector',
        slug: 'code-bug-detector',
        aiPrompt: 'Depends on user codeInput find bugs in code and give bug-free solution in rich text editor format in code block but explain bugs in provided code,changes,correct solution in points, it should not be in code block, it should be in rich text editor format',
        form: [
            {
                label: 'Enter code which you want to test bug',
                field: 'textarea',
                name: 'codeInput',
                required: true
            },
        ]
    },
    {
        name: 'Tagline Generator',
        desc: 'Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.',
        icon: '/icons/tagline.png',
        category: 'Marketting',
        slug: 'tagline-generator',
        aiPrompt: 'Depends on user productName and outline generate catchy and unique 10 taglines for the business product and give output with a catchy starting intro in rich text editor format and in intro dont mention formatted as Rich Text Editor output:',
        form: [
            {
                label: 'Product/Brand Name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'What you are selling / Marketing',
                field: 'textarea',
                name: 'outline',
                required: true
            },
        ]
    },
    {
        name: 'Product Description',
        desc: 'This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.',
        icon: '/icons/product.png',
        category: 'Marketting',
        slug: 'product-description',
        aiPrompt: 'Depends on user productName and description generate small description for product for e-commerce business with a catchy starting intro and give output in rich text editor format and in intro dont mention formatted as Rich Text Editor output: ',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'Product Details',
                field: 'textarea',
                name: 'outline',
                required: true
            },
        ]
    },
];