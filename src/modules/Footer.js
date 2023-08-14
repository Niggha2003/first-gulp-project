function Footer() {
    const footer = document.createElement('div');
    footer.className = 'Footer';
    
    footer.innerHTML = `
        <p class="Footer__description">
            <span>Khuyến cáo:</span>
            Sản phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh
        </p>
    `
    return footer
}