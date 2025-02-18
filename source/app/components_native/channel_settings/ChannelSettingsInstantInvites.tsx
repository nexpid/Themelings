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
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.StyleSheet;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelSettingsSections;
    var _closure1_slot6 = tangon;
    tangon = 5;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot7 = golfie;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.Fragment;
    var _closure1_slot8 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot9 = tangon;
    golfie = option.create;
    tangon = {};
    verify = {};
    offset = 6;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_16;
    verify['paddingHorizontal'] = romeon;
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
    tangon = 18;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'components_native/channel_settings/ChannelSettingsInstantInvites.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: ConnectedChannelSettingsInstantInvites
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 7;
            michal = tangon[michal];
            oscard = undefined;
            michal = zuuluu.bind(oscard)(michal);
            michal = michal.bind(oscard)();
            report = michal.bottom;
            golfie = _closure1_slot4;
            michal = golfie.useState;
            option = michal.bind(golfie)(oscard);
            zuuluu = _closure1_slot3;
            michal = 2;
            zuuluu = zuuluu.bind(oscard)(option, michal);
            kiloes = 0;
            verify = zuuluu[kiloes];
            michal = 1;
            michal = zuuluu[michal];
            var _closure2_slot0 = michal;
            option = golfie.useCallback;
            zuuluu = function(argFoo) {
                zuuluu = _closure2_slot0;
                entity = _closure1_slot10;
                entity = entity.gap;
                michal = entity.height;
                entity = argFoo;
                michal = entity + michal;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = new Array(0);
            foxtra = option.bind(golfie)(zuuluu, michal);
            zuuluu = _closure1_slot0;
            michal = 8;
            michal = tangon[michal];
            option = zuuluu.bind(oscard)(michal);
            tangon = option.useStateFromStoresObject;
            michal = _closure1_slot5;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                michal = _closure1_slot5;
                entity = michal.getInvites;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = tangon.bind(option)(zuuluu, michal);
            zuuluu = michal.invites;
            var _closure2_slot1 = zuuluu;
            michal = michal.loading;
            option = golfie.useMemo;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                entity = global;
                zuuluu = entity.Object;
                michal = zuuluu.values;
                entity = _closure2_slot1;
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
            zuuluu = option.bind(golfie)(zuuluu, tangon);
            backup = zuuluu.sortedInvites;
            var _closure2_slot2 = backup;
            offset = zuuluu.sections;
            option = golfie.useEffect;
            tangon = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 9;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.setSection;
                michal = _closure1_slot6;
                michal = michal.INSTANT_INVITES;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            zuuluu = new Array(0);
            zuuluu = option.bind(golfie)(tangon, zuuluu);
            tangon = golfie.useCallback;
            zuuluu = new Array(1);
            zuuluu[0] = backup;
            entity = function(argFoo, argBar) {
                tangon = _closure1_slot7;
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 10;
                entity = zuuluu[entity];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = {};
                oscard = _closure2_slot2;
                report = argBar;
                report = oscard[report];
                entity['invite'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            option = tangon.bind(golfie)(entity, zuuluu);
            if(michal) { _fun00002_ip = 447; continue _fun00001 }
 261:
            entity = backup.length;
            if(!(kiloes === entity)) { _fun00002_ip = 447; continue _fun00001 }
 273:
            tangon = _closure1_slot7;
            yankee = _closure1_slot1;
            result = _closure1_slot2;
            entity = 11;
            entity = result[entity];
            zuuluu = yankee.bind(oscard)(entity);
            entity = {};
            golfie = 12;
            golfie = result[golfie];
            golfie = yankee.bind(oscard)(golfie);
            entity['lightSource'] = golfie;
            golfie = 13;
            golfie = result[golfie];
            golfie = yankee.bind(oscard)(golfie);
            entity['darkSource'] = golfie;
            output = _closure1_slot0;
            golfie = 14;
            yankee = result[golfie];
            yankee = output.bind(oscard)(yankee);
            echoed = yankee.intl;
            sizing = echoed.string;
            yankee = result[golfie];
            yankee = output.bind(oscard)(yankee);
            yankee = yankee.t;
            yankee = yankee.+nLJkZ;
            yankee = sizing.bind(echoed)(yankee);
            entity['title'] = yankee;
            yankee = result[golfie];
            yankee = output.bind(oscard)(yankee);
            sizing = yankee.intl;
            yankee = sizing.string;
            golfie = result[golfie];
            golfie = output.bind(oscard)(golfie);
            golfie = golfie.t;
            golfie = golfie.F53CAQ;
            golfie = yankee.bind(sizing)(golfie);
            entity['body'] = golfie;
            entity = tangon.bind(oscard)(zuuluu, entity);
            _fun00002_ip = 698; continue _fun00001;
 447:
            if(michal) { _fun00002_ip = 551; continue _fun00001 }
 450:
            michal = null;
            if(!(michal != verify)) { _fun00002_ip = 551; continue _fun00001 }
 456:
            tangon = _closure1_slot7;
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 17;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(oscard)(michal);
            michal = {};
            golfie = _closure1_slot10;
            yankee = golfie.content;
            michal['style'] = yankee;
            michal['sections'] = offset;
            offset = 'windowSize';
            michal['estimatedListSize'] = offset;
            michal['itemSize'] = verify;
            michal['renderItem'] = option;
            golfie = golfie.gap;
            golfie = golfie.height;
            michal['insetStart'] = golfie;
            michal['insetEnd'] = report;
            michal = tangon.bind(oscard)(zuuluu, michal);
            _fun00002_ip = 695; continue _fun00001;
 551:
            report = _closure1_slot9;
            tangon = _closure1_slot8;
            zuuluu = {};
            verify = _closure1_slot7;
            option = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 15;
            golfie = offset[golfie];
            golfie = option.bind(oscard)(golfie);
            option = golfie.SceneLoadingIndicator;
            golfie = {};
            option = verify.bind(oscard)(option, golfie);
            golfie = new Array(2);
            golfie[0] = option;
            option = backup.length;
            verify = option > kiloes;
            option = null;
            if(!verify) { _fun00002_ip = 681; continue _fun00001 }
 621:
            yankee = _closure1_slot7;
            offset = _closure1_slot1;
            sizing = _closure1_slot2;
            verify = 16;
            verify = sizing[verify];
            offset = offset.bind(oscard)(verify);
            verify = {};
            backup = backup[kiloes];
            verify['invite'] = backup;
            verify['onMeasured'] = foxtra;
            romeon = _closure1_slot10;
            romeon = romeon.content;
            verify['containerStyle'] = romeon;
            option = yankee.bind(oscard)(offset, verify);
 681:
            golfie[1] = option;
            zuuluu['children'] = golfie;
            michal = report.bind(oscard)(tangon, zuuluu);
 695:
            entity = michal;
 698:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();