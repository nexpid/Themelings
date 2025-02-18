// app/modules/main_tabs_v2/native/tabs/gravity/content_inventory/Badges.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: ContentTimestamp
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscard = entity.entry;
            entity = _closure1_slot10;
            report = undefined;
            yankee = entity.bind(report)();
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            offset = 9;
            entity = golfie[offset];
            zuuluu = tangon.bind(report)(entity);
            entity = zuuluu.isEntryActive;
            entity = entity.bind(zuuluu)(oscard);
            zuuluu = 11;
            zuuluu = golfie[zuuluu];
            option = tangon.bind(report)(zuuluu);
            golfie = option.useStateFromStores;
            zuuluu = _closure1_slot6;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                entity = _closure1_slot6;
                entity = entity.locale;
                return entity;
            };
            verify = golfie.bind(option)(tangon, zuuluu);
            tangon = _closure1_slot7;
            if(entity) { _fun00002_ip = 179; continue _fun00001 }
 102:
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 10;
            entity = golfie[entity];
            entity = option.bind(report)(entity);
            zuuluu = entity.Text;
            entity = {};
            romeon = 'text-sm/medium';
            entity['variant'] = romeon;
            yankee = yankee.text;
            entity['style'] = yankee;
            golfie = golfie[offset];
            option = option.bind(report)(golfie);
            golfie = option.formatEndedTimestamp;
            golfie = golfie.bind(option)(oscard, verify);
            entity['children'] = golfie;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00002_ip = 196; continue _fun00001;
 179:
            zuuluu = _closure1_slot11;
            michal = {};
            michal['entry'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 196:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: BaseBadge
        entity = argFoo;
        option = entity.Icon;
        yankee = entity.iconColor;
        verify = entity.text;
        entity = _closure1_slot10;
        tangon = undefined;
        offset = entity.bind(tangon)();
        zuuluu = _closure1_slot8;
        michal = _closure1_slot5;
        entity = {};
        report = offset.badgeContainer;
        entity['style'] = report;
        golfie = _closure1_slot7;
        report = {};
        romeon = offset.icon;
        report['style'] = romeon;
        report['color'] = yankee;
        golfie = golfie.bind(tangon)(option, report);
        report = new Array(2);
        report[0] = golfie;
        option = _closure1_slot7;
        golfie = _closure1_slot0;
        yankee = _closure1_slot2;
        oscard = 10;
        oscard = yankee[oscard];
        oscard = golfie.bind(tangon)(oscard);
        golfie = oscard.Text;
        oscard = {};
        yankee = 'text-sm/medium';
        oscard['variant'] = yankee;
        offset = offset.text;
        oscard['style'] = offset;
        oscard['children'] = verify;
        oscard = option.bind(tangon)(golfie, oscard);
        report[1] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    report = golfie[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    report = golfie[tangon];
    report = oscard.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot7 = report;
    report = golfie[tangon];
    report = oscard.bind(entity)(report);
    report = report.jsxs;
    var _closure1_slot8 = report;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.Fragment;
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    option = oscard.bind(entity)(tangon);
    report = option.createStyles;
    tangon = {};
    verify = {'width': 16, 'height': 16};
    tangon['icon'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'gap': 4, 'backgroundColor': 'rgba(255, 255, 255, 0.08)', 'paddingVertical': null, 'paddingLeft': null, 'paddingRight': 10};
    offset = 6;
    romeon = golfie[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_4;
    verify['paddingVertical'] = romeon;
    romeon = golfie[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_8;
    verify['paddingLeft'] = romeon;
    romeon = golfie[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.radii;
    romeon = romeon.sm;
    verify['borderRadius'] = romeon;
    tangon['badgeContainer'] = verify;
    verify = {};
    offset = golfie[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
    verify['color'] = offset;
    tangon['text'] = verify;
    tangon = report.bind(option)(tangon);
    var _closure1_slot10 = tangon;
    tangon = function(argFoo) { // Original name: ActiveTimestamp
        entity = argFoo;
        verify = entity.entry;
        var _closure2_slot0 = verify;
        oscard = entity.style;
        entity = function() { // Original name: useTimestampTickedNow
            report = _closure1_slot4;
            tangon = report.useState;
            zuuluu = global;
            oscard = zuuluu.Date;
            zuuluu = oscard.now;
            zuuluu = zuuluu.bind(oscard)();
            oscard = tangon.bind(report)(zuuluu);
            tangon = _closure1_slot3;
            zuuluu = undefined;
            entity = 2;
            tangon = tangon.bind(zuuluu)(oscard, entity);
            entity = 0;
            entity = tangon[entity];
            zuuluu = 1;
            zuuluu = tangon[zuuluu];
            var _closure3_slot0 = zuuluu;
            tangon = report.useEffect;
            zuuluu = function() {
                tangon = _closure1_slot0;
                golfie = _closure1_slot2;
                zuuluu = 7;
                zuuluu = golfie[zuuluu];
                oscard = undefined;
                zuuluu = tangon.bind(oscard)(zuuluu);
                zuuluu = zuuluu.Interval;
                tangon = zuuluu.prototype;
                tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                offset = tangon;
                zuuluu = new offset[zuuluu](verify);
                report = zuuluu instanceof Object ? zuuluu : tangon;
                var _closure4_slot0 = report;
                tangon = report.start;
                zuuluu = _closure1_slot1;
                michal = 8;
                michal = golfie[michal];
                michal = zuuluu.bind(oscard)(michal);
                michal = michal.Millis;
                zuuluu = michal.SECOND;
                michal = function() {
                    zuuluu = _closure3_slot0;
                    entity = global;
                    michal = entity.Date;
                    entity = michal.now;
                    michal = entity.bind(michal)();
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                michal = tangon.bind(report)(zuuluu, michal);
                entity = function() {
                    michal = _closure4_slot0;
                    entity = michal.stop;
                    entity = entity.bind(michal)();
                    return entity;
                };
                return entity;
            };
            michal = new Array(0);
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        tangon = undefined;
        option = entity.bind(tangon)();
        var _closure2_slot1 = option;
        golfie = _closure1_slot4;
        report = golfie.useMemo;
        zuuluu = new Array(2);
        zuuluu[0] = verify;
        zuuluu[1] = option;
        michal = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 9;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.formatActiveTimestamp;
            michal = _closure2_slot0;
            entity = _closure2_slot1;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        report = report.bind(golfie)(michal, zuuluu);
        zuuluu = _closure1_slot7;
        michal = _closure1_slot0;
        golfie = _closure1_slot2;
        entity = 10;
        entity = golfie[entity];
        entity = michal.bind(tangon)(entity);
        michal = entity.Text;
        entity = {'style': null, 'variant': 'text-sm/medium', 'tabularNumbers': true, 'color': 'text-positive'};
        entity['style'] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot11 = tangon;
    report = 21;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/tabs/gravity/content_inventory/Badges.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['ActiveTimestamp'] = tangon;
    tangon = function(argFoo) { // Original name: GameTimestampBadge
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            verify = entity.entry;
            entity = _closure1_slot10;
            tangon = undefined;
            yankee = entity.bind(tangon)();
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 9;
            entity = zuuluu[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.isEntryActive;
            michal = entity.bind(michal)(verify);
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            entity = 6;
            entity = report[entity];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.colors;
            if(michal) { _fun00004_ip = 89; continue _fun00003 }
 81:
            offset = entity.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
            _fun00004_ip = 95; continue _fun00003;
 89:
            offset = entity.STATUS_POSITIVE;
 95:
            zuuluu = _closure1_slot8;
            michal = _closure1_slot5;
            entity = {};
            report = yankee.badgeContainer;
            entity['style'] = report;
            option = _closure1_slot7;
            golfie = _closure1_slot0;
            romeon = _closure1_slot2;
            report = 12;
            report = romeon[report];
            report = golfie.bind(tangon)(report);
            golfie = report.GameControllerIcon;
            report = {};
            yankee = yankee.icon;
            report['style'] = yankee;
            report['color'] = offset;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot7;
            golfie = _closure1_slot12;
            oscard = {};
            oscard['entry'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['GameTimestampBadge'] = tangon;
    tangon = function(argFoo) { // Original name: MarathonBadge
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.entry;
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            tangon = 9;
            entity = entity[tangon];
            report = undefined;
            michal = michal.bind(report)(entity);
            entity = michal.isEntryMarathon;
            entity = entity.bind(michal)(zuuluu);
            if(entity) { _fun00006_ip = 52; continue _fun00005 }
 48:
            entity = null;
            return entity;
 52:
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[tangon];
            michal = michal.bind(report)(entity);
            entity = michal.isEntryActive;
            michal = entity.bind(michal)(zuuluu);
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 6;
            entity = golfie[entity];
            entity = oscard.bind(report)(entity);
            entity = entity.colors;
            if(michal) { _fun00006_ip = 116; continue _fun00005 }
 108:
            golfie = entity.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
            _fun00006_ip = 122; continue _fun00005;
 116:
            golfie = entity.STATUS_POSITIVE;
 122:
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[tangon];
            michal = michal.bind(report)(entity);
            entity = michal.getMarathonDescription;
            entity = entity.bind(michal)(zuuluu);
            oscard = entity.text;
            entity = null;
            michal = entity == oscard;
            if(michal) { _fun00006_ip = 220; continue _fun00005 }
 164:
            tangon = _closure1_slot7;
            zuuluu = _closure1_slot13;
            michal = {};
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            option = 13;
            option = offset[option];
            option = verify.bind(report)(option);
            option = option.TimerIcon;
            michal['Icon'] = option;
            michal['iconColor'] = golfie;
            michal['text'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 220:
            return entity;
        }
    };
    zuuluu['MarathonBadge'] = tangon;
    tangon = function(argFoo) { // Original name: NewGameBadge
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.entry;
            michal = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 9;
            entity = tangon[entity];
            report = undefined;
            michal = michal.bind(report)(entity);
            entity = michal.isEntryNew;
            michal = entity.bind(michal)(zuuluu);
            entity = null;
            if(!michal) { _fun00008_ip = 183; continue _fun00007 }
 53:
            tangon = _closure1_slot7;
            zuuluu = _closure1_slot13;
            michal = {};
            yankee = _closure1_slot0;
            option = _closure1_slot2;
            golfie = 14;
            golfie = option[golfie];
            golfie = yankee.bind(report)(golfie);
            golfie = golfie.NewUserIcon;
            michal['Icon'] = golfie;
            golfie = 15;
            verify = option[golfie];
            verify = yankee.bind(report)(verify);
            offset = verify.intl;
            verify = offset.string;
            golfie = option[golfie];
            golfie = yankee.bind(report)(golfie);
            golfie = golfie.t;
            golfie = golfie.keY6mZ;
            golfie = verify.bind(offset)(golfie);
            michal['text'] = golfie;
            golfie = _closure1_slot1;
            oscard = 6;
            oscard = option[oscard];
            oscard = golfie.bind(report)(oscard);
            oscard = oscard.colors;
            oscard = oscard.STATUS_POSITIVE;
            michal['iconColor'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 183:
            return entity;
        }
    };
    zuuluu['NewGameBadge'] = tangon;
    tangon = function(argFoo) { // Original name: StreakBadge
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.entry;
            michal = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 9;
            entity = tangon[entity];
            report = undefined;
            michal = michal.bind(report)(entity);
            entity = michal.getStreakCount;
            romeon = entity.bind(michal)(zuuluu);
            zuuluu = null;
            michal = zuuluu == romeon;
            entity = null;
            if(michal) { _fun00010_ip = 212; continue _fun00009 }
 59:
            michal = 2;
            michal = romeon < michal;
            entity = null;
            if(michal) { _fun00010_ip = 212; continue _fun00009 }
 74:
            tangon = _closure1_slot7;
            zuuluu = _closure1_slot13;
            michal = {};
            verify = _closure1_slot0;
            option = _closure1_slot2;
            golfie = 16;
            golfie = option[golfie];
            golfie = verify.bind(report)(golfie);
            golfie = golfie.FlashIcon;
            michal['Icon'] = golfie;
            golfie = 15;
            offset = option[golfie];
            offset = verify.bind(report)(offset);
            yankee = offset.intl;
            offset = yankee.formatToPlainString;
            golfie = option[golfie];
            golfie = verify.bind(report)(golfie);
            golfie = golfie.t;
            verify = golfie.Klie/P;
            golfie = {};
            golfie['days'] = romeon;
            golfie = offset.bind(yankee)(verify, golfie);
            michal['text'] = golfie;
            golfie = _closure1_slot1;
            oscard = 6;
            oscard = option[oscard];
            oscard = golfie.bind(report)(oscard);
            oscard = oscard.colors;
            oscard = oscard.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
            michal['iconColor'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 212:
            return entity;
        }
    };
    zuuluu['StreakBadge'] = tangon;
    tangon = function(argFoo) { // Original name: TrendingBadge
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.entry;
            michal = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 9;
            entity = tangon[entity];
            report = undefined;
            michal = michal.bind(report)(entity);
            entity = michal.getTrendingType;
            zuuluu = entity.bind(michal)(zuuluu);
            tangon = null;
            michal = tangon == zuuluu;
            entity = null;
            if(michal) { _fun00012_ip = 230; continue _fun00011 }
 59:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            michal = 17;
            michal = option[michal];
            michal = golfie.bind(report)(michal);
            michal = michal.TrendingType;
            michal = michal.TRENDING_TYPE_UNSPECIFIED;
            entity = null;
            if(!(zuuluu !== michal)) { _fun00012_ip = 230; continue _fun00011 }
 100:
            tangon = _closure1_slot7;
            zuuluu = _closure1_slot13;
            michal = {};
            yankee = _closure1_slot0;
            option = _closure1_slot2;
            golfie = 18;
            golfie = option[golfie];
            golfie = yankee.bind(report)(golfie);
            golfie = golfie.FireIcon;
            michal['Icon'] = golfie;
            golfie = 15;
            verify = option[golfie];
            verify = yankee.bind(report)(verify);
            offset = verify.intl;
            verify = offset.string;
            golfie = option[golfie];
            golfie = yankee.bind(report)(golfie);
            golfie = golfie.t;
            golfie = golfie.TsWCdX;
            golfie = verify.bind(offset)(golfie);
            michal['text'] = golfie;
            golfie = _closure1_slot1;
            oscard = 6;
            oscard = option[oscard];
            oscard = golfie.bind(report)(oscard);
            oscard = oscard.colors;
            oscard = oscard.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
            michal['iconColor'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 230:
            return entity;
        }
    };
    zuuluu['TrendingBadge'] = tangon;
    tangon = function(argFoo) { // Original name: ResurrectedBadge
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.entry;
            michal = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 9;
            entity = tangon[entity];
            report = undefined;
            michal = michal.bind(report)(entity);
            entity = michal.getResurrectedEntryLastPlayTime;
            michal = entity.bind(michal)(zuuluu);
            entity = null;
            michal = entity == michal;
            if(michal) { _fun00014_ip = 189; continue _fun00013 }
 57:
            tangon = _closure1_slot7;
            zuuluu = _closure1_slot13;
            michal = {};
            yankee = _closure1_slot0;
            option = _closure1_slot2;
            golfie = 19;
            golfie = option[golfie];
            golfie = yankee.bind(report)(golfie);
            golfie = golfie.RetryIcon;
            michal['Icon'] = golfie;
            golfie = 15;
            verify = option[golfie];
            verify = yankee.bind(report)(verify);
            offset = verify.intl;
            verify = offset.string;
            golfie = option[golfie];
            golfie = yankee.bind(report)(golfie);
            golfie = golfie.t;
            golfie = golfie.adnLsL;
            golfie = verify.bind(offset)(golfie);
            michal['text'] = golfie;
            golfie = _closure1_slot1;
            oscard = 6;
            oscard = option[oscard];
            oscard = golfie.bind(report)(oscard);
            oscard = oscard.colors;
            oscard = oscard.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
            michal['iconColor'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 189:
            return entity;
        }
    };
    zuuluu['ResurrectedBadge'] = tangon;
    tangon = function(argFoo) { // Original name: TopGameBadge
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.entry;
            michal = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 9;
            entity = tangon[entity];
            report = undefined;
            michal = michal.bind(report)(entity);
            entity = michal.getEntryDuration;
            echoed = entity.bind(michal)(zuuluu);
            entity = null;
            if(!(entity != echoed)) { _fun00016_ip = 328; continue _fun00015 }
 54:
            foxtra = _closure1_slot0;
            option = _closure1_slot2;
            romeon = 15;
            michal = option[romeon];
            michal = foxtra.bind(report)(michal);
            michal = michal.t;
            kiloes = michal.SDRHgo;
            tangon = _closure1_slot7;
            zuuluu = _closure1_slot13;
            michal = {};
            oscard = 20;
            oscard = option[oscard];
            oscard = foxtra.bind(report)(oscard);
            oscard = oscard.TrophyIcon;
            michal['Icon'] = oscard;
            offset = _closure1_slot8;
            verify = _closure1_slot9;
            oscard = {};
            yankee = option[romeon];
            yankee = foxtra.bind(report)(yankee);
            sizing = yankee.intl;
            backup = sizing.string;
            yankee = option[romeon];
            yankee = foxtra.bind(report)(yankee);
            yankee = yankee.t;
            yankee = yankee./50eHh;
            backup = backup.bind(sizing)(yankee);
            yankee = new Array(3);
            yankee[0] = backup;
            backup = ': ';
            yankee[1] = backup;
            romeon = option[romeon];
            romeon = foxtra.bind(report)(romeon);
            backup = romeon.intl;
            foxtra = backup.format;
            romeon = {};
            sizing = global;
            result = sizing.Math;
            output = result.round;
            golfie = _closure1_slot1;
            sizing = 8;
            sizing = option[sizing];
            sizing = golfie.bind(report)(sizing);
            sizing = sizing.Seconds;
            sizing = sizing.HOUR;
            sizing = echoed / sizing;
            sizing = output.bind(result)(sizing);
            romeon['hours'] = sizing;
            romeon = foxtra.bind(backup)(kiloes, romeon);
            yankee[2] = romeon;
            oscard['children'] = yankee;
            oscard = offset.bind(report)(verify, oscard);
            michal['text'] = oscard;
            oscard = 6;
            oscard = option[oscard];
            oscard = golfie.bind(report)(oscard);
            oscard = oscard.colors;
            oscard = oscard.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
            michal['iconColor'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 328:
            return entity;
        }
    };
    zuuluu['TopGameBadge'] = tangon;
    michal = function(argFoo) { // Original name: CustomStatusTimestampBadge
        entity = argFoo;
        verify = entity.entry;
        entity = _closure1_slot10;
        tangon = undefined;
        offset = entity.bind(tangon)();
        zuuluu = _closure1_slot8;
        michal = _closure1_slot5;
        entity = {};
        report = offset.badgeContainer;
        entity['style'] = report;
        option = _closure1_slot7;
        golfie = _closure1_slot0;
        romeon = _closure1_slot2;
        report = 13;
        report = romeon[report];
        report = golfie.bind(tangon)(report);
        golfie = report.TimerIcon;
        report = {};
        offset = offset.icon;
        report['style'] = offset;
        yankee = _closure1_slot1;
        offset = 6;
        offset = romeon[offset];
        offset = yankee.bind(tangon)(offset);
        offset = offset.colors;
        offset = offset.INTERACTIVE_NORMAL;
        report['color'] = offset;
        golfie = option.bind(tangon)(golfie, report);
        report = new Array(2);
        report[0] = golfie;
        option = _closure1_slot7;
        golfie = _closure1_slot12;
        oscard = {};
        oscard['entry'] = verify;
        oscard = option.bind(tangon)(golfie, oscard);
        report[1] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['CustomStatusTimestampBadge'] = michal;
    return entity;
})();