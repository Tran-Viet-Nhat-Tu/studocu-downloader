document.getElementById('downloadBtn').addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            window.scrollTo(0, 0);
            setTimeout(() => {
                const pages = document.querySelectorAll('div[data-page-index]');
                if (pages.length === 0) {
                    alert('⚠️ Hãy cuộn xuống cuối trang để Studocu load hết tài liệu trước!');
                    return;
                }
                if (confirm(`Tìm thấy ${pages.length} trang. Bấm OK để tiến hành tạo PDF sạch sẽ!`)) {
                    window.print();
                }
            }, 500);
        }
    });
});
