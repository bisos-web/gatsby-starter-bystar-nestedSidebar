# EmbeddedContent Component Guide

A flexible, responsive React component for embedding external websites, internal services, and third-party content within your Gatsby pages.

## Features

- ✅ **Responsive Design** - Automatically scales to container width
- ✅ **Flexible Aspect Ratios** - Support for 16:9, 4:3, 1:1, or auto-sizing
- ✅ **Security** - Built-in iframe sandbox restrictions
- ✅ **Error Handling** - User-friendly error messages with fallback
- ✅ **Loading States** - Visual feedback while content loads
- ✅ **Accessibility** - Proper ARIA labels and semantic HTML
- ✅ **Mobile Friendly** - Works perfectly on all screen sizes

## Installation

The component is already created in your Gatsby starter:

```
src/components/EmbeddedContent.js
```

## Basic Usage

### Simple External Website

```javascript
import EmbeddedContent from "../components/EmbeddedContent"

export default function MyPage() {
  return (
    <Layout>
      <h1>My Page</h1>
      <EmbeddedContent
        url="https://example.com"
        title="Example Website"
      />
    </Layout>
  )
}
```

### Internal Service with Auto Height

```javascript
<EmbeddedContent
  url="http://localhost:3000/dashboard"
  title="My Dashboard"
  aspectRatio="auto"
  minHeight="800px"
/>
```

### Full-Width Embedded Content

```javascript
export default function EmbeddedPage() {
  return (
    <Layout showSidebar={false}>
      <EmbeddedContent
        url="https://your-service.com"
        title="Your Service"
        aspectRatio="auto"
        minHeight="1000px"
      />
    </Layout>
  )
}
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `url` | string | required | The URL to embed |
| `title` | string | "Embedded Content" | Accessible title for the iframe (important for screen readers) |
| `aspectRatio` | string | "16:9" | One of: "16:9", "4:3", "1:1", or "auto" |
| `minHeight` | string | "600px" | Minimum height when `aspectRatio="auto"` |
| `border` | boolean | true | Show a subtle border around the iframe |
| `sandbox` | string | "allow-same-origin allow-scripts allow-popups allow-forms" | iframe sandbox attributes for security |
| `allowFullscreen` | boolean | false | Allow the embedded content to go fullscreen |
| `loading` | string | "lazy" | "lazy" for deferred loading or "eager" for immediate loading |
| `showLoadingMessage` | boolean | true | Show "Loading content..." message while iframe loads |

## Aspect Ratios

### 16:9 (Default - Video/Web Content)
Best for standard web content, YouTube videos, and most web applications.

```javascript
<EmbeddedContent
  url="https://example.com"
  aspectRatio="16:9"
/>
```

### 4:3 (Traditional/Square-ish)
Good for presentations, some legacy content, or square-leaning content.

```javascript
<EmbeddedContent
  url="https://example.com"
  aspectRatio="4:3"
/>
```

### 1:1 (Square)
Perfect for social media embeds, widgets, or square-format content.

```javascript
<EmbeddedContent
  url="https://example.com"
  aspectRatio="1:1"
/>
```

### auto (Flexible Height)
Let the embedded content determine its own height. Requires `minHeight` to prevent content from being cut off.

```javascript
<EmbeddedContent
  url="https://example.com"
  aspectRatio="auto"
  minHeight="800px"
/>
```

## Security Configuration

### Default Sandbox Settings

The component uses these sandbox attributes by default:

```javascript
sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
```

This allows the embedded content to:
- ✅ Access cookies/storage from the same origin
- ✅ Run JavaScript
- ✅ Open popups
- ✅ Submit forms

### Stricter Security (External Content)

For untrusted external content, use more restrictive sandboxing:

```javascript
<EmbeddedContent
  url="https://untrusted-site.com"
  sandbox="allow-popups"
/>
```

### Permissive (Trusted Internal Services)

For internal services you completely trust:

```javascript
<EmbeddedContent
  url="http://internal-app.local:3000"
  sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-pointer-lock"
/>
```

## Loading Strategy

### Lazy Loading (Default)
Content is loaded only when it becomes visible in the viewport. Good for performance when you have multiple embeds.

```javascript
<EmbeddedContent
  url="https://example.com"
  loading="lazy"
/>
```

### Eager Loading
Content is loaded immediately when the page loads. Use for above-the-fold content.

```javascript
<EmbeddedContent
  url="https://example.com"
  loading="eager"
/>
```

## Error Handling

The component automatically handles loading errors with a user-friendly message. Common error causes:

1. **CORS Restrictions** - The embedded website blocks cross-origin requests
2. **Invalid URL** - The URL doesn't exist or is unreachable
3. **Network Issues** - Connection problems prevent loading
4. **Unsupported Content** - Some content types can't be embedded

When an error occurs, users see:
- Clear error message
- Explanation of common causes
- Link to open content in a new window

## Real-World Examples

### YouTube Video

```javascript
<EmbeddedContent
  url="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="My Video"
  aspectRatio="16:9"
  allowFullscreen={true}
/>
```

### Analytics Dashboard

```javascript
<EmbeddedContent
  url="http://analytics.example.com/dashboard"
  title="Analytics Dashboard"
  aspectRatio="auto"
  minHeight="1000px"
  sandbox="allow-same-origin allow-scripts"
/>
```

### Interactive Map

```javascript
<EmbeddedContent
  url="https://maps.example.com"
  title="Location Map"
  aspectRatio="16:9"
  sandbox="allow-same-origin allow-scripts allow-popups allow-pointer-lock"
  allowFullscreen={true}
/>
```

### Documentation Site

```javascript
<EmbeddedContent
  url="https://docs.example.com"
  title="Documentation"
  aspectRatio="auto"
  minHeight="800px"
/>
```

### Twitter/Social Media Widget

```javascript
<EmbeddedContent
  url="https://twitter.com/example"
  title="Twitter Feed"
  aspectRatio="auto"
  minHeight="600px"
/>
```

## Accessibility Considerations

### ARIA Labels
Always provide a meaningful `title` prop for accessibility:

```javascript
// ✅ Good
<EmbeddedContent
  url="https://example.com"
  title="Company Overview"
/>

// ❌ Avoid
<EmbeddedContent
  url="https://example.com"
  title="Iframe"
/>
```

### Keyboard Navigation
Embedded content should support keyboard navigation. Users can:
- Tab into the iframe
- Use arrow keys to navigate within the iframe (if supported)
- Press Escape to exit if content allows

### Screen Readers
The component uses semantic HTML and proper ARIA attributes so screen readers can:
- Announce the iframe with its title
- Describe the purpose of the embedded content
- Provide fallback information

### Surrounding Context
Always provide context around the embedded content:

```javascript
<section>
  <h2>Our Analytics Dashboard</h2>
  <p>
    Below you'll see our real-time analytics dashboard showing website traffic,
    user engagement, and performance metrics.
  </p>
  <EmbeddedContent
    url="https://analytics.example.com"
    title="Analytics Dashboard"
    aspectRatio="auto"
    minHeight="1000px"
  />
</section>
```

## Performance Tips

1. **Use Lazy Loading** - Set `loading="lazy"` for below-the-fold content
2. **Optimize minHeight** - Don't set it much larger than needed
3. **Consider Multiple Iframes** - If embedding many iframes, consider lazy loading or pagination
4. **Monitor Network** - Check browser dev tools to see iframe load times
5. **Cache When Possible** - If embedding your own service, enable browser caching

## Troubleshooting

### "Unable to load content" Error

**Problem:** Embed shows error message

**Solutions:**
1. Check if URL is accessible
2. Verify CORS headers if it's a third-party service
3. Check browser console for specific errors
4. Ensure sandbox settings aren't too restrictive

### Content Not Sizing Correctly

**Problem:** Embedded content appears cut off or too large

**Solutions:**
1. Try different `aspectRatio` values
2. Increase `minHeight` for auto-sizing
3. Check if content has fixed width requirements
4. Test in browser dev tools responsive mode

### Fullscreen Not Working

**Problem:** User can't go fullscreen

**Solutions:**
1. Ensure `allowFullscreen={true}` is set
2. Verify `sandbox` includes appropriate permissions
3. Check if content actually supports fullscreen

### Mobile Display Issues

**Problem:** Content doesn't display well on mobile

**Solutions:**
1. Use `aspectRatio="auto"` for flexibility
2. Increase `minHeight` for better mobile experience
3. Test on actual mobile devices
4. Check if embedded service has mobile version

## Browser Support

The component works in all modern browsers:
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

For older browser support, you may need polyfills or alternative approaches.

## Advanced Usage

### Conditional Rendering

```javascript
const [showEmbed, setShowEmbed] = React.useState(false)

return (
  <>
    <button onClick={() => setShowEmbed(!showEmbed)}>
      {showEmbed ? "Hide" : "Show"} Embedded Content
    </button>
    {showEmbed && (
      <EmbeddedContent url="https://example.com" />
    )}
  </>
)
```

### Error Boundary Pattern

```javascript
class ErrorBoundary extends React.Component {
  state = { hasError: false }
  
  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true })
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Unable to load embedded content</div>
    }
    return this.props.children
  }
}

export default function MyPage() {
  return (
    <ErrorBoundary>
      <EmbeddedContent url="https://example.com" />
    </ErrorBoundary>
  )
}
```

## Questions?

See the embedded services example page at `/explore/embedded-services` for live examples.
