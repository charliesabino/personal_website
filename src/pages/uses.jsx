import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Charlie Sabino</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
      // intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="14” MacBook Pro, M1 Max, 16RAM (2021)">
              I was using an Intel-based MacBook Pro prior to this and the
              difference is night and day. I&apos;ve never heard the fans turn
              on a single time, even under the incredibly heavy loads I put it
              through.
            </Tool>
            <Tool title="Apple iPad Pro">
              Excellent for handwritten note-taking and mind-mapping.
            </Tool>
            <Tool title="Herman Miller Aeron Chair">
              If I&apos;m going to slouch in the worst ergonomic position
              imaginable all day, I might as well do it in an expensive chair.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="NeoVim" href="https://neovim.io/">
              A vastly superior fork of Vim. Highly exensible using Lua. Some of
              my favorite plugins include Neo-Tree, Telescope, ToggleTerm, cmp,
              and Which-Key.
            </Tool>
            <Tool title="Kitty" href="https://sw.kovidgoyal.net/kitty/">
              My terminal of choice. GPU rendered, easily configurable, and has
              built in terminal multiplexing.
            </Tool>
          </ToolsSection>
          {/* <ToolsSection title="Design"> */}
          {/*   <Tool title="Figma"> */}
          {/*     We started using Figma as just a design tool but now it’s become */}
          {/*     our virtual whiteboard for the entire company. Never would have */}
          {/*     expected the collaboration features to be the real hook. */}
          {/*   </Tool> */}
          {/* </ToolsSection> */}
          <ToolsSection title="Productivity">
            <Tool title="Raycast" href="https://www.raycast.com/">
              The best spotlight extension tool for MacOS. Features a vast and
              free collection of extensions.
            </Tool>
            <Tool title="Yabai" href="https://github.com/koekeishiya/yabai">
              My favorite window manager on Mac. Relies on{' '}
              <a
                href="https://github.com/koekeishiya/skhd"
                className="border-b border-b-slate-200"
              >
                skhd
              </a>
              , and can be configured with Vim bindings.
            </Tool>
            <Tool title="Better Touch Tool" href="https://folivora.ai/">
              Easy global hotkey configuration. I use it to automatically
              launch/switch to the window with specific apps.
            </Tool>
            <Tool title="Obsidian" href="https://obsidian.md/">
              My note taking app of choice. Uses locally-hosted plain markdown
              files and allows for seemless linkage of ideas. Highly
              extensible—my favorite plugin is Excalidraw. Built in Vim-like
              navigation.
            </Tool>
            <Tool title="Concepts" href="https://concepts.app/en/">
              My hand-written note taking app of choice. Seamlessly mind-map on
              an infinite canvas.
            </Tool>
            <Tool title="Superhuman" href="https://superhuman.com/">
              My email client of choice. Uses Vim keybinds, which, if you
              haven&apos;t noticed yet, I&apos;m a pretty big fan of.
            </Tool>
          </ToolsSection>
          {/* <ToolsSection title="Websites/Articles"> */}
          {/*   <Tool */}
          {/*     href="https://www.bigocheatsheet.com/" */}
          {/*     title="Big-O Cheat Sheet" */}
          {/*   > */}
          {/*     Concise resource containing the space and time complexities of */}
          {/*     popular algorithms. */}
          {/*   </Tool> */}
          {/* </ToolsSection> */}
        </div>
      </SimpleLayout>
    </>
  )
}
