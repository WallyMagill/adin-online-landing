# Performance Testing Quick Start Guide

## Quick Test Commands

### 1. Build and Start (Production Mode)

```bash
# Clean build
rm -rf .next

# Build the application
npm run build

# Start production server
npm run start
```

Then open: http://localhost:3000

---

## Run Lighthouse Audit

### Desktop Testing:

1. Open http://localhost:3000 in Chrome
2. Open DevTools (F12 or Cmd+Option+I)
3. Navigate to **Lighthouse** tab
4. Configuration:
   - ✅ Mode: Navigation
   - ✅ Device: Desktop
   - ✅ Categories: Performance, Accessibility, Best Practices, SEO
5. Click **"Analyze page load"**

### Mobile Testing:

Same steps as above, but select **Device: Mobile**

### Target Scores:

- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 90+

---

## Bundle Analysis

### Run Bundle Analyzer:

```bash
npm run analyze
```

This will:

1. Build the application with analysis enabled
2. Automatically open bundle visualization in your browser
3. Show you:
   - Bundle sizes for each route
   - Largest dependencies
   - Code splitting effectiveness

### What to Look For:

- ✅ Small initial bundles (< 200KB gzipped)
- ✅ Lazy-loaded routes are separate chunks
- ✅ Shared dependencies in common chunk
- ⚠️ Large dependencies that could be optimized

---

## Test Each Route

Test all pages to ensure optimizations work everywhere:

```bash
# Main routes to test:
http://localhost:3000/          # Home/About
http://localhost:3000/founder   # Founders
http://localhost:3000/investor  # Investors
http://localhost:3000/member    # Members
```

### For Each Route, Check:

1. ✅ Page loads quickly
2. ✅ Images load progressively
3. ✅ No layout shift (CLS = 0)
4. ✅ Smooth animations
5. ✅ Proper meta tags (view page source)

---

## Chrome DevTools Performance

### Record Performance:

1. Open DevTools (F12)
2. Go to **Performance** tab
3. Click record button (⚫)
4. Reload page (Cmd+R)
5. Stop recording after page loads

### What to Check:

- **First Contentful Paint (FCP):** < 1.8s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Total Blocking Time (TBT):** < 300ms
- **Cumulative Layout Shift (CLS):** < 0.1

---

## Mobile Testing

### Using Chrome DevTools:

1. Open DevTools
2. Click **Toggle Device Toolbar** (Cmd+Shift+M)
3. Select device: "iPhone 12 Pro" or "Pixel 5"
4. Test performance with throttling:
   - CPU: 4x slowdown
   - Network: Fast 3G

### Real Device Testing:

1. Find your local IP: `ipconfig getifaddr en0` (Mac) or `hostname -I` (Linux)
2. On your phone, navigate to: `http://YOUR_IP:3000`
3. Test real-world performance

---

## Performance Checklist

### Before Deployment:

- [ ] All routes tested with Lighthouse
- [ ] Performance score 90+ on Desktop
- [ ] Performance score 85+ on Mobile
- [ ] Accessibility score 95+
- [ ] SEO score 90+
- [ ] No console errors
- [ ] Images load properly
- [ ] Lazy loading working (check Network tab)
- [ ] Bundle analysis reviewed
- [ ] All meta tags present (view source)

---

## Common Issues

### Issue: Low Performance Score

**Possible causes:**

- Large images not optimized
- Too many components loading initially
- Slow API calls

**Solutions:**

- Add more lazy loading
- Optimize image sizes
- Use `priority` only for critical images

### Issue: High CLS (Layout Shift)

**Possible causes:**

- Images without width/height
- Font loading issues
- Dynamic content

**Solutions:**

- Ensure all images have dimensions
- Use font-display: swap
- Reserve space for dynamic content

### Issue: Poor Mobile Score

**Possible causes:**

- Large JavaScript bundles
- Unoptimized images
- Render-blocking resources

**Solutions:**

- More aggressive code splitting
- Smaller image variants for mobile
- Defer non-critical scripts

---

## Monitoring After Deployment

### Vercel Analytics:

1. Deploy to Vercel
2. Visit: https://vercel.com/dashboard/analytics
3. Monitor:
   - Real User Metrics (RUM)
   - Core Web Vitals
   - Geographic performance
   - Device breakdown

### What to Watch:

- **LCP trends** - Should stay < 2.5s
- **FID trends** - Should stay < 100ms
- **CLS trends** - Should stay < 0.1
- **Traffic patterns** - Identify slow pages

---

## Advanced Testing

### WebPageTest:

1. Go to: https://www.webpagetest.org/
2. Enter your URL (after deployment)
3. Select test location and device
4. Review:
   - Filmstrip view
   - Waterfall chart
   - Opportunities

### Chrome User Experience Report:

After deployment, check real-world data:

- https://crux.run/
- Enter your domain
- View actual user metrics

---

## Pro Tips

1. **Test on slow connections:**

   - DevTools > Network > Throttling > Slow 3G
   - This reveals optimization issues

2. **Use Lighthouse CI for continuous testing:**

   - Automate performance testing
   - Set performance budgets
   - Fail builds if scores drop

3. **Monitor bundle size over time:**

   - Run `npm run analyze` regularly
   - Watch for growing dependencies
   - Keep initial bundle < 200KB

4. **Test with real content:**
   - Performance can vary with content
   - Test with production-like data
   - Check edge cases (many images, long lists)

---

## Need Help?

If scores are lower than expected:

1. Check `PERFORMANCE_OPTIMIZATION_REPORT.md` for details
2. Review Chrome DevTools warnings
3. Run bundle analyzer to find large dependencies
4. Check Network tab for slow resources

---

## Success Criteria

You're ready to deploy when:

- ✅ Desktop Performance: 90+
- ✅ Mobile Performance: 85+
- ✅ Accessibility: 95+
- ✅ SEO: 90+
- ✅ No console errors
- ✅ All routes tested
- ✅ Bundle size reasonable
- ✅ Images optimized
- ✅ No layout shift

**Good luck!**
