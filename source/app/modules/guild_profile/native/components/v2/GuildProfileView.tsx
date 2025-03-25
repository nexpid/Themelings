// app/modules/guild_profile/native/components/v2/GuildProfileView.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    option = argBar;
    foxtra = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = foxtra;
    var _closure1_slot2 = verify;
    report = function(argFoo, argBar) { // Original name: getBackgroundForProfile
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argBar;
            entity = new Array(2);
            entity[0] = oscard;
            michal = _closure1_slot9;
            tangon = michal.DARK;
            michal = argFoo;
            if(!(michal !== tangon)) { _fun00002_ip = 77; continue _fun00001 }
 31:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 7;
            tangon = tangon[michal];
            michal = undefined;
            report = report.bind(michal)(tangon);
            tangon = report.darkenColor;
            michal = 0.8;
            michal = tangon.bind(report)(oscard, michal);
            _fun00002_ip = 121; continue _fun00001;
 77:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 6;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            report = report.bind(zuuluu)(tangon);
            tangon = report.brightenColor;
            zuuluu = 0.8;
            michal = tangon.bind(report)(oscard, zuuluu);
 121:
            entity[1] = michal;
            return entity;
        }
    };
    var _closure1_slot14 = report;
    entity = function(argFoo) { // Original name: GuildProfileBackground
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            golfie = entity.guildProfile;
            var _closure2_slot0 = golfie;
            zuuluu = _closure1_slot0;
            foxtra = _closure1_slot2;
            tangon = 12;
            report = foxtra[tangon];
            tangon = undefined;
            option = zuuluu.bind(tangon)(report);
            oscard = option.useStateFromStores;
            verify = _closure1_slot7;
            report = new Array(1);
            report[0] = verify;
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    report = _closure1_slot7;
                    tangon = report.getGuild;
                    entity = _closure2_slot0;
                    entity = entity.id;
                    entity = tangon.bind(report)(entity);
                    tangon = null;
                    if(!(tangon == entity)) { _fun00006_ip = 63; continue _fun00005 }
 35:
                    tangon = _closure1_slot6;
                    oscard = _closure2_slot0;
                    zuuluu = tangon.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                    golfie = zuuluu;
                    michal = new golfie[tangon](oscard, report);
                    entity = michal instanceof Object ? michal : zuuluu;
 63:
                    return entity;
                }
            };
            offset = oscard.bind(option)(report, michal);
            yankee = _closure1_slot1;
            michal = 13;
            michal = foxtra[michal];
            michal = yankee.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            option = michal.width;
            michal = _closure1_slot12;
            oscard = michal.bind(tangon)();
            michal = 14;
            michal = foxtra[michal];
            michal = yankee.bind(tangon)(michal);
            romeon = michal.bind(tangon)();
            michal = 15;
            michal = foxtra[michal];
            report = zuuluu.bind(tangon)(michal);
            zuuluu = report.useToken;
            michal = 11;
            michal = foxtra[michal];
            michal = yankee.bind(tangon)(michal);
            michal = michal.colors;
            michal = michal.BG_BASE_TERTIARY;
            verify = zuuluu.bind(report)(michal);
            michal = 8;
            zuuluu = foxtra[michal];
            backup = yankee.bind(tangon)(zuuluu);
            report = backup.getGuildIconURL;
            zuuluu = {};
            kiloes = golfie.id;
            zuuluu['id'] = kiloes;
            kiloes = golfie.icon;
            zuuluu['icon'] = kiloes;
            kiloes = 64;
            zuuluu['size'] = kiloes;
            report = report.bind(backup)(zuuluu);
            zuuluu = 9;
            zuuluu = foxtra[zuuluu];
            zuuluu = yankee.bind(tangon)(zuuluu);
            yankee = zuuluu.bind(tangon)(report, verify);
            zuuluu = golfie.brandColorPrimary;
            report = null;
            if(!(report != zuuluu)) { _fun00004_ip = 251; continue _fun00003 }
 245:
            yankee = golfie.brandColorPrimary;
 251:
            if(!(report != offset)) { _fun00004_ip = 289; continue _fun00003 }
 255:
            verify = offset.hasFeature;
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.DISCOVERABLE;
            zuuluu = verify.bind(offset)(zuuluu);
            if(!zuuluu) { _fun00004_ip = 289; continue _fun00003 }
 279:
            zuuluu = golfie.customBanner;
            if(!(report == zuuluu)) { _fun00004_ip = 375; continue _fun00003 }
 289:
            verify = _closure1_slot10;
            report = _closure1_slot1;
            offset = _closure1_slot2;
            zuuluu = 17;
            zuuluu = offset[zuuluu];
            report = report.bind(tangon)(zuuluu);
            zuuluu = {};
            offset = oscard.colorBanner;
            zuuluu['style'] = offset;
            offset = _closure1_slot13;
            offset = offset.START;
            zuuluu['start'] = offset;
            offset = _closure1_slot13;
            offset = offset.END;
            zuuluu['end'] = offset;
            offset = _closure1_slot14;
            offset = offset.bind(tangon)(romeon, yankee);
            zuuluu['colors'] = offset;
            zuuluu = verify.bind(tangon)(report, zuuluu);
            return zuuluu;
 375:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            michal = offset[michal];
            report = verify.bind(tangon)(michal);
            zuuluu = report.getGuildDiscoverySplashSource;
            michal = {};
            yankee = golfie.id;
            michal['id'] = yankee;
            golfie = golfie.customBanner;
            michal['splash'] = golfie;
            golfie = 16;
            golfie = offset[golfie];
            golfie = verify.bind(tangon)(golfie);
            golfie = golfie.bind(tangon)();
            golfie = golfie * option;
            michal['size'] = golfie;
            report = zuuluu.bind(report)(michal);
            zuuluu = _closure1_slot10;
            michal = _closure1_slot5;
            entity = {};
            oscard = oscard.imageBanner;
            entity['style'] = oscard;
            entity['source'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    michal = global;
    offset = michal.Object;
    golfie = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    golfie = verify[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = verify[tangon];
    tangon = option.bind(entity)(tangon);
    golfie = tangon.View;
    var _closure1_slot4 = golfie;
    tangon = tangon.Image;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = verify[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = verify[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = verify[tangon];
    tangon = option.bind(entity)(tangon);
    golfie = tangon.GuildFeatures;
    var _closure1_slot8 = golfie;
    tangon = tangon.ThemeTypes;
    var _closure1_slot9 = tangon;
    tangon = 5;
    golfie = verify[tangon];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot10 = golfie;
    tangon = verify[tangon];
    tangon = option.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot11 = tangon;
    tangon = 10;
    tangon = verify[tangon];
    offset = option.bind(entity)(tangon);
    golfie = offset.createStyles;
    tangon = {};
    yankee = {};
    romeon = 11;
    backup = verify[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BG_BASE_PRIMARY;
    yankee['backgroundColor'] = backup;
    tangon['container'] = yankee;
    yankee = {'height': 140, 'width': '100%'};
    tangon['colorBanner'] = yankee;
    yankee = {'height': 140, 'width': '100%', 'objectFit': 'cover'};
    tangon['imageBanner'] = yankee;
    yankee = {'marginTop': 12, 'paddingHorizontal': 16, 'gap': 16};
    tangon['body'] = yankee;
    yankee = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'gap': 8};
    tangon['error'] = yankee;
    yankee = {};
    backup = 160;
    yankee['marginTop'] = backup;
    tangon['buttonContainer'] = yankee;
    yankee = {'paddingHorizontal': 16, 'marginTop': 4294967264, 'display': 'flex', 'flexDirection': 'column', 'gap': 0};
    tangon['header'] = yankee;
    yankee = {'width': 86, 'height': 86, 'borderRadius': 28.666666666666668, 'backgroundColor': null, 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden'};
    romeon = verify[romeon];
    romeon = foxtra.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BG_BASE_PRIMARY;
    yankee['backgroundColor'] = romeon;
    tangon['avatarBackground'] = yankee;
    tangon = golfie.bind(offset)(tangon);
    var _closure1_slot12 = tangon;
    offset = michal.Object;
    golfie = offset.freeze;
    michal = {};
    yankee = {'x': 0, 'y': 1};
    michal['START'] = yankee;
    yankee = {'x': 1.5, 'y': 0};
    michal['END'] = yankee;
    michal = golfie.bind(offset)(michal);
    var _closure1_slot13 = michal;
    golfie = 22;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/guild_profile/native/components/v2/GuildProfileView.tsx';
    golfie = option.bind(verify)(golfie);
    oscard = function(argFoo) { // Original name: GuildProfileView
        michal = argFoo;
        yankee = michal.guildProfile;
        var _closure2_slot0 = yankee;
        michal = _closure1_slot12;
        tangon = undefined;
        golfie = michal.bind(tangon)();
        report = _closure1_slot3;
        zuuluu = report.useMemo;
        michal = new Array(1);
        michal[0] = yankee;
        entity = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = _closure2_slot0;
                entity = null;
                if(!(entity != michal)) { _fun00008_ip = 108; continue _fun00007 }
 13:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 8;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.getGuildIconSource;
                michal = {};
                report = _closure2_slot0;
                oscard = report.id;
                michal['id'] = oscard;
                report = report.icon;
                michal['icon'] = report;
                report = 96;
                michal['size'] = report;
                report = true;
                michal['canAnimate'] = report;
                zuuluu = zuuluu.bind(tangon)(michal);
                report = 'number';
                tangon = typeof zuuluu;
                michal = null;
                if(!(report !== tangon)) { _fun00008_ip = 106; continue _fun00007 }
 100:
                michal = zuuluu.uri;
 106:
                return michal;
 108:
                return entity;
            }
        };
        backup = zuuluu.bind(report)(entity, michal);
        zuuluu = _closure1_slot11;
        michal = _closure1_slot4;
        entity = {};
        report = golfie.container;
        entity['style'] = report;
        verify = _closure1_slot10;
        oscard = _closure1_slot15;
        report = {};
        report['guildProfile'] = yankee;
        oscard = verify.bind(tangon)(oscard, report);
        report = new Array(3);
        report[0] = oscard;
        foxtra = _closure1_slot10;
        verify = _closure1_slot1;
        romeon = _closure1_slot2;
        oscard = 18;
        oscard = romeon[oscard];
        offset = verify.bind(tangon)(oscard);
        oscard = {};
        oscard['profile'] = yankee;
        oscard['guildIconSource'] = backup;
        oscard = foxtra.bind(tangon)(offset, oscard);
        report[1] = oscard;
        oscard = {};
        golfie = golfie.body;
        oscard['style'] = golfie;
        foxtra = _closure1_slot10;
        offset = _closure1_slot0;
        golfie = 19;
        golfie = romeon[golfie];
        golfie = offset.bind(tangon)(golfie);
        offset = golfie.Text;
        golfie = {'variant': 'text-md/medium', 'color': 'text-secondary'};
        backup = yankee.description;
        golfie['children'] = backup;
        offset = foxtra.bind(tangon)(offset, golfie);
        golfie = new Array(3);
        golfie[0] = offset;
        backup = _closure1_slot10;
        offset = 20;
        offset = romeon[offset];
        foxtra = verify.bind(tangon)(offset);
        offset = {};
        offset['profile'] = yankee;
        offset = backup.bind(tangon)(foxtra, offset);
        golfie[1] = offset;
        offset = _closure1_slot10;
        option = 21;
        option = romeon[option];
        verify = verify.bind(tangon)(option);
        option = {};
        option['profile'] = yankee;
        option = offset.bind(tangon)(verify, option);
        golfie[2] = option;
        oscard['children'] = golfie;
        oscard = zuuluu.bind(tangon)(michal, oscard);
        report[2] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = oscard;
    zuuluu['getBackgroundForProfile'] = report;
    zuuluu['useStyles'] = tangon;
    zuuluu['DiagonalGradient'] = michal;
    return entity;
})();