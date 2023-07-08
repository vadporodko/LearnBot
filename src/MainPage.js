import { ScrollView } from 'react-native';
import Header from './Header';
import Modules from './Modules';
import Materials from './Materials';
import Footer from './Footer';

export default function MainPage() {
    return (
        <ScrollView>
            <Header />
            <Modules />
            <Materials />
            <Footer />
        </ScrollView>
    );
}


