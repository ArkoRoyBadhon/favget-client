import PodcastDetail from "@/components/podcast/podcastDetail";

const PodcastDetailPage = ({ params }: { params: { podcast_id: string } }) => {
    return (
        <div>
            <PodcastDetail id={params.podcast_id} />
        </div>
    );
};

export default PodcastDetailPage;