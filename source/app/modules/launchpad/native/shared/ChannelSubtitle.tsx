// app/modules/launchpad/native/shared/ChannelSubtitle.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: ChannelSubtitle
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            yankee = entity.muted;
            zuuluu = entity.connected;
            romeon = entity.channelId;
            offset = entity.guildId;
            golfie = entity.subtitle;
            oscard = entity.textProps;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 5;
            entity = report[entity];
            report = undefined;
            tangon = tangon.bind(report)(entity);
            entity = tangon.getChannelSubtitleData;
            foxtra = entity.bind(tangon)(golfie);
            entity = null;
            if(!(entity != foxtra)) { _fun00002_ip = 244; continue _fun00001 }
 82:
            golfie = foxtra.type;
            tangon = 'voice';
            verify = tangon === golfie;
            if(!verify) { _fun00002_ip = 101; continue _fun00001 }
 98:
            verify = zuuluu;
 101:
            tangon = _closure1_slot4;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            michal = 4;
            michal = option[michal];
            michal = golfie.bind(report)(michal);
            zuuluu = michal.Text;
            michal = {};
            sizing = michal;
            kiloes = oscard;
            oscard = copyDataProperties(sizing, kiloes);
            oscard = 6;
            oscard = option[oscard];
            option = golfie.bind(report)(oscard);
            golfie = option.renderMessagePreviewMarkup;
            oscard = {};
            foxtra = foxtra.subtitle;
            oscard['content'] = foxtra;
            foxtra = entity != yankee;
            if(!foxtra) { _fun00002_ip = 182; continue _fun00001 }
 179:
            foxtra = yankee;
 182:
            oscard['muted'] = foxtra;
            oscard['channelId'] = romeon;
            oscard['guildId'] = offset;
            offset = 'text-muted';
            if(!yankee) { _fun00002_ip = 210; continue _fun00001 }
 204:
            offset = 'interactive-muted';
 210:
            oscard['color'] = offset;
            verify = !verify;
            oscard['disableAnimatedEmoji'] = verify;
            golfie = golfie.bind(option)(oscard);
            oscard = 'children';
            michal[oscard] = golfie;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 244:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SUBTITLE_OPACITY_NORMAL;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot4 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/launchpad/native/shared/ChannelSubtitle.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: renderChannelSubtitle
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            option = entity.subtitle;
            offset = entity.muted;
            romeon = entity.channelId;
            yankee = entity.guildId;
            verify = entity.connected;
            entity = null;
            if(!(entity != option)) { _fun00004_ip = 265; continue _fun00003 }
 40:
            golfie = {};
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            michal = 3;
            michal = report[michal];
            oscard = undefined;
            michal = tangon.bind(oscard)(michal);
            michal = michal.bind(oscard)();
            michal = michal.messagePreview;
            michal = michal.text;
            michal = michal.variant;
            golfie['variant'] = michal;
            michal = 'text-muted';
            if(!offset) { _fun00004_ip = 106; continue _fun00003 }
 100:
            michal = 'interactive-muted';
 106:
            golfie['color'] = michal;
            tangon = 1;
            golfie['lineClamp'] = tangon;
            michal = 1.75;
            golfie['maxFontSizeMultiplier'] = michal;
            michal = {};
            if(offset) { _fun00004_ip = 142; continue _fun00003 }
 138:
            tangon = _closure1_slot3;
 142:
            michal['opacity'] = tangon;
            golfie['style'] = michal;
            tangon = 'string';
            michal = typeof option;
            if(!(tangon !== michal)) { _fun00004_ip = 207; continue _fun00003 }
 161:
            report = _closure1_slot4;
            tangon = _closure1_slot5;
            michal = {};
            michal['channelId'] = romeon;
            michal['guildId'] = yankee;
            michal['subtitle'] = option;
            michal['muted'] = offset;
            michal['connected'] = verify;
            michal['textProps'] = golfie;
            michal = report.bind(oscard)(tangon, michal);
            _fun00004_ip = 263; continue _fun00003;
 207:
            report = _closure1_slot4;
            tangon = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 4;
            zuuluu = verify[zuuluu];
            zuuluu = tangon.bind(oscard)(zuuluu);
            tangon = zuuluu.Text;
            zuuluu = {};
            backup = zuuluu;
            foxtra = golfie;
            golfie = copyDataProperties(backup, foxtra);
            golfie = 'children';
            zuuluu[golfie] = option;
            michal = report.bind(oscard)(tangon, zuuluu);
 263:
            return michal;
 265:
            return entity;
        }
    };
    zuuluu['renderChannelSubtitle'] = michal;
    return entity;
})();