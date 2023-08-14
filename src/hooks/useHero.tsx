import { graphql, useStaticQuery } from 'gatsby';

const useHero = () => {
    const data = useStaticQuery(
    graphql`
        query {
            allContentfulHeroComponent {
            nodes {
                backgroundImage {
                    publicUrl
                }
                title
                description {
                    description
                }
                button
            }
        }
    }`);
    if (data.allContentfulHeroComponent.nodes.length) {
        return { 
            title: data.allContentfulHeroComponent.nodes[0].title as string,
            description: data.allContentfulHeroComponent.nodes[0].description.description as string,
            button: data.allContentfulHeroComponent.nodes[0].button as string,
            imageUrl: data.allContentfulHeroComponent.nodes[0].backgroundImage.publicUrl as string
        }
    }
    const result = { 
        title: '',
        description: '',
        button: '',
        imageUrl: ''
     }
    return result;
};

export default useHero;