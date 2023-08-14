import { graphql, useStaticQuery } from 'gatsby';
import { IntroBlock } from '../components/IntroBlocks/IntroBlockItem';

const useIntroBlocks = () => {
    const data = useStaticQuery(
    graphql`
        query  {
            allContentfulIconIntroBlock {
                nodes {
                    description {
                        description
                    }
                    title
                    id
                    icon{
                        publicUrl
                    }
                }
            }
        }
    `);
    if (data.allContentfulIconIntroBlock.nodes.length) {
        return data.allContentfulIconIntroBlock.nodes.map((block : any) => ({
            title: block.title,
            description: block.description.description,
            icon: block.icon.publicUrl,
        }))
    }
    return [];
};

export default useIntroBlocks;