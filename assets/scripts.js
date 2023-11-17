$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});

function beforeUnloadListener(event) {
    event.preventDefault();
    return event.returnValue = 'Are you sure you want to exit?';
};

  // A function that invokes a callback when the page has unsaved changes.
onPageHasUnsavedChanges(() => {
    window.addEventListener('beforeunload', beforeUnloadListener);
});

  // A function that invokes a callback when the page's unsaved changes are resolved.
onAllChangesSaved(() => {
    window.removeEventListener('beforeunload', beforeUnloadListener);
});