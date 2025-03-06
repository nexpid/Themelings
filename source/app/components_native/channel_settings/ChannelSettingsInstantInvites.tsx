// app/components_native/channel_settings/ChannelSettingsInstantInvites.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    romeon = 1;
    golfie = oscard[romeon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelSettingsSections;
    var _closure1_slot7 = tangon;
    tangon = 5;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot8 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    offset = 7;
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_16;
    verify['paddingHorizontal'] = foxtra;
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BG_BASE_SECONDARY;
    verify['backgroundColor'] = foxtra;
    verify['flex'] = romeon;
    tangon['content'] = verify;
    verify = {};
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.spacing;
    offset = offset.PX_16;
    verify['height'] = offset;
    tangon['gap'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 19;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'components_native/channel_settings/ChannelSettingsInstantInvites.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: ConnectedChannelSettingsInstantInvites
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot10;
            oscard = undefined;
            golfie = michal.bind(oscard)();
            var _closure2_slot0 = golfie;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 8;
            michal = tangon[michal];
            michal = zuuluu.bind(oscard)(michal);
            michal = michal.bind(oscard)();
            offset = michal.bottom;
            report = _closure1_slot4;
            michal = report.useState;
            option = michal.bind(report)(oscard);
            zuuluu = _closure1_slot3;
            michal = 2;
            zuuluu = zuuluu.bind(oscard)(option, michal);
            backup = 0;
            kiloes = zuuluu[backup];
            michal = 1;
            michal = zuuluu[michal];
            var _closure2_slot1 = michal;
            option = report.useCallback;
            zuuluu = new Array(1);
            zuuluu[0] = golfie;
            michal = function(argFoo) {
                zuuluu = _closure2_slot1;
                entity = _closure2_slot0;
                entity = entity.gap;
                michal = entity.height;
                entity = argFoo;
                michal = entity + michal;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            romeon = option.bind(report)(michal, zuuluu);
            zuuluu = _closure1_slot0;
            michal = 9;
            michal = tangon[michal];
            option = zuuluu.bind(oscard)(michal);
            tangon = option.useStateFromStoresObject;
            michal = _closure1_slot6;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                michal = _closure1_slot6;
                entity = michal.getInvites;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = tangon.bind(option)(zuuluu, michal);
            zuuluu = michal.invites;
            var _closure2_slot2 = zuuluu;
            michal = michal.loading;
            option = report.useMemo;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                entity = global;
                zuuluu = entity.Object;
                michal = zuuluu.values;
                entity = _closure2_slot2;
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.sort;
                entity = function(argFoo, argBar) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        entity = argFoo;
                        michal = entity.inviter;
                        tangon = null;
                        report = tangon == michal;
                        zuuluu = undefined;
                        if(report) { _fun00004_ip = 25; continue _fun00003 }
 20:
                        zuuluu = michal.username;
 25:
                        oscard = tangon != zuuluu;
                        michal = '';
                        report = michal;
                        if(!oscard) { _fun00004_ip = 42; continue _fun00003 }
 39:
                        report = zuuluu;
 42:
                        zuuluu = report.toLowerCase;
                        zuuluu = zuuluu.bind(report)();
                        report = argBar;
                        report = report.inviter;
                        oscard = tangon == report;
                        entity = undefined;
                        if(oscard) { _fun00004_ip = 75; continue _fun00003 }
 70:
                        entity = report.username;
 75:
                        tangon = tangon != entity;
                        if(!tangon) { _fun00004_ip = 85; continue _fun00003 }
 82:
                        michal = entity;
 85:
                        entity = michal.toLowerCase;
                        michal = entity.bind(michal)();
                        entity = zuuluu.localeCompare;
                        entity = entity.bind(zuuluu)(michal);
                        return entity;
                    }
                };
                michal = michal.bind(zuuluu)(entity);
                entity = {};
                entity['sortedInvites'] = michal;
                zuuluu = michal.length;
                michal = new Array(1);
                michal[0] = zuuluu;
                entity['sections'] = michal;
                return entity;
            };
            zuuluu = option.bind(report)(zuuluu, tangon);
            foxtra = zuuluu.sortedInvites;
            var _closure2_slot3 = foxtra;
            sizing = zuuluu.sections;
            option = report.useEffect;
            tangon = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 10;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.setSection;
                michal = _closure1_slot7;
                michal = michal.INSTANT_INVITES;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            zuuluu = new Array(0);
            zuuluu = option.bind(report)(tangon, zuuluu);
            tangon = report.useCallback;
            zuuluu = new Array(1);
            zuuluu[0] = foxtra;
            entity = function(argFoo, argBar) {
                tangon = _closure1_slot8;
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 11;
                entity = zuuluu[entity];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = {};
                oscard = _closure2_slot3;
                report = argBar;
                report = oscard[report];
                entity['invite'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            yankee = tangon.bind(report)(entity, zuuluu);
            if(michal) { _fun00002_ip = 463; continue _fun00001 }
 277:
            entity = foxtra.length;
            if(!(backup === entity)) { _fun00002_ip = 463; continue _fun00001 }
 289:
            tangon = _closure1_slot8;
            option = _closure1_slot1;
            echoed = _closure1_slot2;
            entity = 12;
            entity = echoed[entity];
            zuuluu = option.bind(oscard)(entity);
            entity = {};
            report = 13;
            report = echoed[report];
            report = option.bind(oscard)(report);
            entity['lightSource'] = report;
            report = 14;
            report = echoed[report];
            report = option.bind(oscard)(report);
            entity['darkSource'] = report;
            result = _closure1_slot0;
            report = 15;
            option = echoed[report];
            option = result.bind(oscard)(option);
            update = option.intl;
            output = update.string;
            option = echoed[report];
            option = result.bind(oscard)(option);
            option = option.t;
            option = option.+nLJkZ;
            option = output.bind(update)(option);
            entity['title'] = option;
            option = echoed[report];
            option = result.bind(oscard)(option);
            output = option.intl;
            option = output.string;
            report = echoed[report];
            report = result.bind(oscard)(report);
            report = report.t;
            report = report.F53CAQ;
            report = option.bind(output)(report);
            entity['body'] = report;
            entity = tangon.bind(oscard)(zuuluu, entity);
            _fun00002_ip = 721; continue _fun00001;
 463:
            if(michal) { _fun00002_ip = 579; continue _fun00001 }
 466:
            michal = null;
            if(!(michal != kiloes)) { _fun00002_ip = 579; continue _fun00001 }
 472:
            tangon = _closure1_slot8;
            zuuluu = _closure1_slot5;
            michal = {};
            report = golfie.content;
            michal['style'] = report;
            option = _closure1_slot1;
            output = _closure1_slot2;
            report = 18;
            report = output[report];
            option = option.bind(oscard)(report);
            report = {};
            report['sections'] = sizing;
            sizing = 'windowSize';
            report['estimatedListSize'] = sizing;
            report['itemSize'] = kiloes;
            report['renderItem'] = yankee;
            yankee = golfie.gap;
            yankee = yankee.height;
            report['insetStart'] = yankee;
            report['insetEnd'] = offset;
            report = tangon.bind(oscard)(option, report);
            michal['children'] = report;
            michal = tangon.bind(oscard)(zuuluu, michal);
            _fun00002_ip = 718; continue _fun00001;
 579:
            report = _closure1_slot9;
            tangon = _closure1_slot5;
            zuuluu = {};
            golfie = golfie.content;
            zuuluu['style'] = golfie;
            offset = _closure1_slot8;
            option = _closure1_slot0;
            yankee = _closure1_slot2;
            golfie = 16;
            golfie = yankee[golfie];
            golfie = option.bind(oscard)(golfie);
            option = golfie.SceneLoadingIndicator;
            golfie = {};
            option = offset.bind(oscard)(option, golfie);
            golfie = new Array(2);
            golfie[0] = option;
            option = foxtra.length;
            offset = option > backup;
            option = null;
            if(!offset) { _fun00002_ip = 704; continue _fun00001 }
 658:
            yankee = _closure1_slot8;
            offset = _closure1_slot1;
            kiloes = _closure1_slot2;
            verify = 17;
            verify = kiloes[verify];
            offset = offset.bind(oscard)(verify);
            verify = {};
            foxtra = foxtra[backup];
            verify['invite'] = foxtra;
            verify['onMeasured'] = romeon;
            option = yankee.bind(oscard)(offset, verify);
 704:
            golfie[1] = option;
            zuuluu['children'] = golfie;
            michal = report.bind(oscard)(tangon, zuuluu);
 718:
            entity = michal;
 721:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();