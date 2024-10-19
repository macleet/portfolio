import Header from "../components/Header";
import MainContent from "../components/MainContent/MainContent";

export default function Page() {
    return (
        <div className="from-15% via-40% to-65% bg-gradient-to-br from-sky-200 via-blue-200 to-indigo-200 flex flex-col justify-between items-center gap-6 p-4">
            <Header />
            <MainContent />
        </div>
    );
}
