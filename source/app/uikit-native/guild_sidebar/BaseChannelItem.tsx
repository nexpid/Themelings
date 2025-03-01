// app/uikit-native/guild_sidebar/BaseChannelItem.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    verify = argBar;
    backup = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = backup;
    var _closure1_slot2 = offset;
    oscard = function(argFoo) { // Original name: BaseChannelSubtitle
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.mode;
            golfie = entity.subtitle;
            entity = _closure1_slot12;
            report = undefined;
            oscard = entity.bind(report)(zuuluu);
            entity = null;
            zuuluu = entity == golfie;
            if(zuuluu) { _fun00002_ip = 101; continue _fun00001 }
 37:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 6;
            michal = option[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.Text;
            michal = {'experimental_useNativeText': true, 'lineClamp': 1};
            offset = michal;
            verify = oscard;
            oscard = copyDataProperties(offset, verify);
            oscard = 'children';
            michal[oscard] = golfie;
            entity = tangon.bind(report)(zuuluu, michal);
 101:
            return entity;
        }
    };
    var _closure1_slot10 = oscard;
    report = function(argFoo) { // Original name: useChannelNameTextProps
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.UNREAD_IMPORTANT;
            if(!(michal !== zuuluu)) { _fun00004_ip = 132; continue _fun00003 }
 20:
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.RELEVANT;
            if(!(michal !== zuuluu)) { _fun00004_ip = 132; continue _fun00003 }
 34:
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.UNREAD_LESS_IMPORTANT;
            if(!(michal !== zuuluu)) { _fun00004_ip = 120; continue _fun00003 }
 48:
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.MUTED;
            if(!(michal !== zuuluu)) { _fun00004_ip = 104; continue _fun00003 }
 62:
            entity = _closure1_slot9;
            entity = entity.SELECTED;
            if(!(michal !== entity)) { _fun00004_ip = 88; continue _fun00003 }
 76:
            entity = {'variant': 'text-md/medium', 'color': 'redesign-channel-name-muted-text'};
            _fun00004_ip = 102; continue _fun00003;
 88:
            entity = {'variant': 'text-md/medium', 'color': 'redesign-channel-name-text'};
 102:
            _fun00004_ip = 118; continue _fun00003;
 104:
            entity = {'variant': 'text-md/medium', 'color': 'interactive-muted'};
 118:
            _fun00004_ip = 130; continue _fun00003;
 120:
            entity = {'variant': 'text-md/medium', 'color': 'redesign-channel-name-muted-text'};
 130:
            _fun00004_ip = 146; continue _fun00003;
 132:
            entity = {'variant': 'text-md/semibold', 'color': 'redesign-channel-name-text'};
 146:
            return entity;
        }
    };
    var _closure1_slot11 = report;
    tangon = function(argFoo) { // Original name: getChannelSubtitleTextProps
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.UNREAD_IMPORTANT;
            if(!(michal !== zuuluu)) { _fun00006_ip = 94; continue _fun00005 }
 20:
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.RELEVANT;
            if(!(michal !== zuuluu)) { _fun00006_ip = 94; continue _fun00005 }
 34:
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.SELECTED;
            if(!(michal !== zuuluu)) { _fun00006_ip = 94; continue _fun00005 }
 48:
            entity = _closure1_slot9;
            entity = entity.MUTED;
            if(!(michal !== entity)) { _fun00006_ip = 78; continue _fun00005 }
 62:
            entity = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            _fun00006_ip = 92; continue _fun00005;
 78:
            entity = {'variant': 'text-xs/medium', 'color': 'interactive-muted'};
 92:
            _fun00006_ip = 108; continue _fun00005;
 94:
            entity = {'variant': 'text-xs/medium', 'color': 'redesign-channel-name-text'};
 108:
            return entity;
        }
    };
    var _closure1_slot12 = tangon;
    entity = global;
    yankee = entity.Object;
    option = yankee.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(yankee)(zuuluu, entity, golfie);
    entity = 0;
    option = offset[entity];
    golfie = argCor;
    entity = undefined;
    golfie = golfie.bind(entity)(option);
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = offset[golfie];
    golfie = verify.bind(entity)(golfie);
    golfie = golfie.View;
    var _closure1_slot4 = golfie;
    golfie = 2;
    golfie = offset[golfie];
    golfie = verify.bind(entity)(golfie);
    golfie = golfie.UnreadSetting;
    var _closure1_slot5 = golfie;
    golfie = 3;
    option = offset[golfie];
    option = verify.bind(entity)(option);
    option = option.jsx;
    var _closure1_slot6 = option;
    golfie = offset[golfie];
    golfie = verify.bind(entity)(golfie);
    golfie = golfie.jsxs;
    var _closure1_slot7 = golfie;
    golfie = 4;
    golfie = offset[golfie];
    yankee = verify.bind(entity)(golfie);
    option = yankee.createStyles;
    golfie = {};
    romeon = {};
    foxtra = 6;
    romeon['paddingHorizontal'] = foxtra;
    golfie['rowPaddingNoIcon'] = romeon;
    romeon = {};
    foxtra = 5;
    kiloes = offset[foxtra];
    kiloes = backup.bind(entity)(kiloes);
    kiloes = kiloes.radii;
    kiloes = kiloes.md;
    romeon['borderRadius'] = kiloes;
    kiloes = offset[foxtra];
    kiloes = backup.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.BG_MOD_FAINT;
    romeon['backgroundColor'] = kiloes;
    golfie['rowSelected'] = romeon;
    romeon = {};
    kiloes = offset[foxtra];
    kiloes = backup.bind(entity)(kiloes);
    kiloes = kiloes.radii;
    kiloes = kiloes.md;
    romeon['borderRadius'] = kiloes;
    golfie['rowSelectedThemed'] = romeon;
    romeon = {'position': 'absolute', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0, 'borderWidth': 1};
    kiloes = offset[foxtra];
    kiloes = backup.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.BORDER_FAINT;
    romeon['borderColor'] = kiloes;
    kiloes = offset[foxtra];
    kiloes = backup.bind(entity)(kiloes);
    kiloes = kiloes.radii;
    kiloes = kiloes.md;
    romeon['borderRadius'] = kiloes;
    golfie['selectedBorder'] = romeon;
    romeon = {};
    kiloes = offset[foxtra];
    kiloes = backup.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_8;
    kiloes = -kiloes;
    romeon['left'] = kiloes;
    golfie['unreadIndicator'] = romeon;
    kiloes = 8;
    romeon = {'width': 16, 'height': 16, 'marginRight': 8};
    golfie['channelIcon'] = romeon;
    romeon = {};
    romeon['marginRight'] = kiloes;
    golfie['redesignedChannelIcon'] = romeon;
    romeon = {};
    kiloes = offset[foxtra];
    kiloes = backup.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.CHANNEL_ICON;
    romeon['tintColor'] = kiloes;
    golfie['channelIconNormal'] = romeon;
    romeon = {};
    kiloes = offset[foxtra];
    kiloes = backup.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.INTERACTIVE_ACTIVE;
    romeon['tintColor'] = kiloes;
    golfie['channelIconUnread'] = romeon;
    romeon = {};
    foxtra = offset[foxtra];
    foxtra = backup.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.INTERACTIVE_MUTED;
    romeon['tintColor'] = foxtra;
    golfie['channelIconMuted'] = romeon;
    romeon = {'paddingHorizontal': 8, 'paddingVertical': 8, 'flexDirection': 'row', 'alignItems': 'center', 'position': 'relative'};
    golfie['channel'] = romeon;
    romeon = {'flex': 1, 'flexDirection': 'column', 'alignItems': 'stretch', 'justifyContent': 'center'};
    golfie['channelNameContainer'] = romeon;
    romeon = {'flexGrow': 1, 'textAlign': 'left'};
    golfie['channelName'] = romeon;
    golfie = option.bind(yankee)(golfie);
    var _closure1_slot8 = golfie;
    golfie = {};
    option = 'Selected';
    golfie['SELECTED'] = option;
    option = 'Locked';
    golfie['LOCKED'] = option;
    option = 'Muted';
    golfie['MUTED'] = option;
    option = 'Relevant';
    golfie['RELEVANT'] = option;
    option = 'UnreadLessImportant';
    golfie['UNREAD_LESS_IMPORTANT'] = option;
    option = 'UnreadImportant';
    golfie['UNREAD_IMPORTANT'] = option;
    option = 'Default';
    golfie['DEFAULT'] = option;
    var _closure1_slot9 = golfie;
    option = 11;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'uikit-native/guild_sidebar/BaseChannelItem.tsx';
    option = verify.bind(offset)(option);
    option = function(argFoo) { // Original name: BaseChannelItem
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            golfie = argFoo;
            foxtra = golfie.icon;
            yankee = golfie.name;
            echoed = golfie.mode;
            var _closure2_slot0 = echoed;
            romeon = golfie.hideIcon;
            var _closure2_slot1 = romeon;
            michal = golfie.disableHighlightOnPress;
            tangon = undefined;
            if(!(michal === tangon)) { _fun00008_ip = 48; continue _fun00007 }
 46:
            michal = false;
 48:
            offset = golfie.channelInfo;
            report = golfie.children;
            result = golfie.unread;
            if(!(result === tangon)) { _fun00008_ip = 71; continue _fun00007 }
 69:
            result = false;
 71:
            oscard = {'icon': 0, 'name': 0, 'mode': 0, 'hideIcon': 0, 'disableHighlightOnPress': 0, 'channelInfo': 0, 'children': 0, 'unread': 0};
            vacuum = null;
            sequen = oscard;
            entity = silentSetPrototypeOf(sequen, vacuum);
            sequen = {};
            vacuum = golfie;
            ctrled = oscard;
            oscard = copyDataProperties(sequen, vacuum, ctrled);
            var _closure2_slot2 = tangon;
            golfie = _closure1_slot8;
            update = golfie.bind(tangon)();
            _closure2_slot2 = update;
            verify = _closure1_slot3;
            option = verify.useMemo;
            golfie = new Array(3);
            golfie[0] = romeon;
            golfie[1] = echoed;
            golfie[2] = update;
            zuuluu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot2;
                    michal = entity.channel;
                    entity = new Array(3);
                    entity[0] = michal;
                    michal = _closure2_slot1;
                    if(!michal) { _fun00010_ip = 37; continue _fun00009 }
 27:
                    tangon = _closure2_slot2;
                    michal = tangon.rowPaddingNoIcon;
 37:
                    entity[1] = michal;
                    tangon = _closure2_slot0;
                    michal = _closure1_slot9;
                    michal = michal.SELECTED;
                    michal = tangon === michal;
                    if(!michal) { _fun00010_ip = 75; continue _fun00009 }
 65:
                    zuuluu = _closure2_slot2;
                    michal = zuuluu.rowSelected;
 75:
                    entity[2] = michal;
                    return entity;
                }
            };
            verify = option.bind(verify)(zuuluu, golfie);
            option = _closure1_slot7;
            golfie = _closure1_slot4;
            zuuluu = {};
            zuuluu['style'] = verify;
            verify = _closure1_slot9;
            verify = verify.SELECTED;
            backup = echoed === verify;
            if(!backup) { _fun00008_ip = 220; continue _fun00007 }
 194:
            sizing = _closure1_slot6;
            kiloes = _closure1_slot4;
            verify = {};
            output = update.selectedBorder;
            verify['style'] = output;
            backup = sizing.bind(tangon)(kiloes, verify);
 220:
            verify = new Array(5);
            verify[0] = backup;
            backup = !romeon;
            if(!backup) { _fun00008_ip = 322; continue _fun00007 }
 234:
            output = _closure1_slot6;
            sizing = _closure1_slot1;
            source = _closure1_slot2;
            kiloes = 8;
            kiloes = source[kiloes];
            sizing = sizing.bind(tangon)(kiloes);
            kiloes = {};
            update = update.unreadIndicator;
            kiloes['style'] = update;
            kiloes['unread'] = result;
            result = _closure1_slot9;
            result = result.UNREAD_LESS_IMPORTANT;
            if(!(echoed !== result)) { _fun00008_ip = 301; continue _fun00007 }
 289:
            result = _closure1_slot5;
            result = result.ALL_MESSAGES;
            _fun00008_ip = 311; continue _fun00007;
 301:
            echoed = _closure1_slot5;
            result = echoed.ONLY_MENTIONS;
 311:
            kiloes['resolvedUnreadSetting'] = result;
            backup = output.bind(tangon)(sizing, kiloes);
 322:
            verify[1] = backup;
            romeon = !romeon;
            if(!romeon) { _fun00008_ip = 335; continue _fun00007 }
 332:
            romeon = foxtra;
 335:
            verify[2] = romeon;
            verify[3] = yankee;
            verify[4] = offset;
            zuuluu['children'] = verify;
            golfie = option.bind(tangon)(golfie, zuuluu);
            zuuluu = _closure1_slot7;
            if(michal) { _fun00008_ip = 392; continue _fun00007 }
 364:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 9;
            michal = verify[michal];
            michal = option.bind(tangon)(michal);
            michal = michal.AnimatedPressableHighlight;
            _fun00008_ip = 412; continue _fun00007;
 392:
            option = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 10;
            entity = verify[entity];
            michal = option.bind(tangon)(entity);
 412:
            entity = {};
            sequen = entity;
            vacuum = oscard;
            oscard = copyDataProperties(sequen, vacuum);
            oscard = new Array(2);
            oscard[0] = golfie;
            oscard[1] = report;
            report = 'children';
            entity[report] = oscard;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = option;
    zuuluu['ChannelModes'] = golfie;
    zuuluu['BaseChannelSubtitle'] = oscard;
    oscard = function(argFoo) { // Original name: BaseChannelIcon
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            output = entity.disableColor;
            zuuluu = entity.mode;
            romeon = entity.source;
            report = entity.IconComponent;
            yankee = entity.style;
            golfie = entity.isChannelLive;
            entity = _closure1_slot8;
            tangon = undefined;
            oscard = entity.bind(tangon)();
            entity = _closure1_slot9;
            entity = entity.MUTED;
            offset = zuuluu === entity;
            entity = _closure1_slot9;
            entity = entity.UNREAD_IMPORTANT;
            option = zuuluu === entity;
            entity = _closure1_slot9;
            entity = entity.SELECTED;
            verify = zuuluu === entity;
            entity = oscard.channelIcon;
            foxtra = new Array(1);
            foxtra[0] = entity;
            entity = true;
            if(!(entity !== output)) { _fun00012_ip = 152; continue _fun00011 }
 111:
            zuuluu = foxtra.push;
            if(offset) { _fun00012_ip = 141; continue _fun00011 }
 119:
            if(option) { _fun00012_ip = 133; continue _fun00011 }
 122:
            if(verify) { _fun00012_ip = 133; continue _fun00011 }
 125:
            entity = oscard.channelIconNormal;
            _fun00012_ip = 139; continue _fun00011;
 133:
            entity = oscard.channelIconUnread;
 139:
            _fun00012_ip = 147; continue _fun00011;
 141:
            entity = oscard.channelIconMuted;
 147:
            entity = zuuluu.bind(foxtra)(entity);
 152:
            entity = null;
            if(!(entity != yankee)) { _fun00012_ip = 168; continue _fun00011 }
 158:
            zuuluu = foxtra.push;
            zuuluu = zuuluu.bind(foxtra)(yankee);
 168:
            if(!(entity == report)) { _fun00012_ip = 244; continue _fun00011 }
 172:
            yankee = _closure1_slot6;
            kiloes = _closure1_slot1;
            sizing = _closure1_slot2;
            backup = 7;
            entity = sizing[backup];
            zuuluu = kiloes.bind(tangon)(entity);
            entity = {};
            entity['disableColor'] = output;
            backup = sizing[backup];
            backup = kiloes.bind(tangon)(backup);
            backup = backup.Sizes;
            backup = backup.CUSTOM;
            entity['size'] = backup;
            entity['style'] = foxtra;
            entity['source'] = romeon;
            entity = yankee.bind(tangon)(zuuluu, entity);
            _fun00012_ip = 320; continue _fun00011;
 244:
            zuuluu = _closure1_slot6;
            michal = {};
            yankee = 'sm';
            michal['size'] = yankee;
            oscard = oscard.redesignedChannelIcon;
            michal['style'] = oscard;
            oscard = 'status-positive';
            if(golfie) { _fun00012_ip = 310; continue _fun00011 }
 277:
            golfie = 'interactive-muted';
            if(offset) { _fun00012_ip = 307; continue _fun00011 }
 286:
            if(option) { _fun00012_ip = 298; continue _fun00011 }
 289:
            option = 'channel-icon';
            if(!verify) { _fun00012_ip = 304; continue _fun00011 }
 298:
            option = 'interactive-active';
 304:
            golfie = option;
 307:
            oscard = golfie;
 310:
            michal['color'] = oscard;
            entity = zuuluu.bind(tangon)(report, michal);
 320:
            return entity;
        }
    };
    zuuluu['BaseChannelIcon'] = oscard;
    zuuluu['useChannelNameTextProps'] = report;
    zuuluu['getChannelSubtitleTextProps'] = tangon;
    michal = function(argFoo) { // Original name: BaseChannelName
        entity = argFoo;
        offset = entity.mode;
        romeon = entity.name;
        verify = entity.subtitle;
        yankee = entity.textStyle;
        entity = _closure1_slot8;
        tangon = undefined;
        foxtra = entity.bind(tangon)();
        zuuluu = _closure1_slot7;
        michal = _closure1_slot4;
        entity = {};
        report = foxtra.channelNameContainer;
        entity['style'] = report;
        option = _closure1_slot6;
        golfie = _closure1_slot0;
        backup = _closure1_slot2;
        report = 6;
        report = backup[report];
        report = golfie.bind(tangon)(report);
        golfie = report.Text;
        report = {};
        backup = true;
        report['experimental_useNativeText'] = backup;
        backup = _closure1_slot11;
        sizing = backup.bind(tangon)(offset);
        output = report;
        backup = copyDataProperties(output, sizing);
        kiloes = 1;
        backup = 'lineClamp';
        report[backup] = kiloes;
        backup = foxtra.channelName;
        foxtra = new Array(2);
        foxtra[0] = backup;
        foxtra[1] = yankee;
        yankee = 'style';
        report[yankee] = foxtra;
        yankee = 'children';
        report[yankee] = romeon;
        golfie = option.bind(tangon)(golfie, report);
        report = new Array(2);
        report[0] = golfie;
        option = _closure1_slot6;
        golfie = _closure1_slot10;
        oscard = {};
        oscard['mode'] = offset;
        oscard['subtitle'] = verify;
        oscard = option.bind(tangon)(golfie, oscard);
        report[1] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['BaseChannelName'] = michal;
    return entity;
})();