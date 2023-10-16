"use client";

import css from "./hero.module.scss";
import Grid from "./grid";
import Server from "@/src/components/icons/server";
import cn from "classnames";
import Branch from "@/src/components/icons/branch";
import Terminal from "@/src/components/icons/terminal";
import Cpu from "@/src/components/icons/cpu";
import Profile from "./profile";
import Socials from "./socials";
import Position from "./position";
import Name from "./name";
import Download from "./download";
import Down from "./down";
import { useScopedI18n } from "@/src/locales/client";

export default function Hero() {
  const t = useScopedI18n("home.hero");

  return (
    <div className={css.root} id="hero">
      <div className={css.container}>
        <Grid
          download={<Download>{t("download")}</Download>}
          h1={<Name>{t("name")}</Name>}
          position={<Position>{t("position")}</Position>}
          profile={<Profile />}
          socials={<Socials />}
          down={<Down />}
        />
      </div>
      <div className={css.background}>
        <div className={cn(css.server, css.icon)}>
          <Server />
        </div>
        <div className={cn(css.branch, css.icon)}>
          <Branch />
        </div>
        <div className={cn(css.terminal, css.icon)}>
          <Terminal />
        </div>
        <div className={cn(css.cpu, css.icon)}>
          <Cpu />
        </div>
      </div>
    </div>
  );
}
