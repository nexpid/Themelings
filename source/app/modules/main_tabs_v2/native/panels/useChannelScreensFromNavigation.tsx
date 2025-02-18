// app/modules/main_tabs_v2/native/panels/useChannelScreensFromNavigation.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    oscard = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    var _closure1_slot2 = option;
    tangon = function(argFoo) { // Original name: getActiveTabsRoute
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = null;
            if(!(michal != zuuluu)) { _fun00002_ip = 183; continue _fun00001 }
 12:
            tangon = zuuluu.state;
            oscard = michal == tangon;
            report = undefined;
            entity = undefined;
            if(oscard) { _fun00002_ip = 93; continue _fun00001 }
 28:
            oscard = tangon.routes;
            golfie = zuuluu.state;
            option = michal == golfie;
            tangon = undefined;
            if(option) { _fun00002_ip = 53; continue _fun00001 }
 48:
            tangon = golfie.index;
 53:
            if(!(michal == tangon)) { _fun00002_ip = 89; continue _fun00001 }
 57:
            golfie = zuuluu.state;
            verify = michal == golfie;
            option = undefined;
            if(verify) { _fun00002_ip = 82; continue _fun00001 }
 71:
            golfie = golfie.routes;
            option = golfie.length;
 82:
            golfie = 1;
            tangon = option - golfie;
 89:
            entity = oscard[tangon];
 93:
            if(!(michal == entity)) { _fun00002_ip = 244; continue _fun00001 }
 100:
            oscard = zuuluu.params;
            golfie = michal == oscard;
            tangon = undefined;
            if(golfie) { _fun00002_ip = 121; continue _fun00001 }
 115:
            tangon = oscard.screen;
 121:
            if(!(michal == tangon)) { _fun00002_ip = 199; continue _fun00001 }
 125:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 7;
            tangon = golfie[tangon];
            oscard = oscard.bind(report)(tangon);
            tangon = oscard.getRootNavigationRef;
            tangon = tangon.bind(oscard)();
            michal = michal == tangon;
            report = undefined;
            if(michal) { _fun00002_ip = 177; continue _fun00001 }
 167:
            michal = tangon.isReady;
            report = michal.bind(tangon)();
 177:
            michal = true;
            if(!(michal !== report)) { _fun00002_ip = 187; continue _fun00001 }
 183:
            michal = undefined;
            return michal;
 187:
            michal = tangon.getCurrentRoute;
            michal = michal.bind(tangon)();
            return michal;
 199:
            michal = {};
            tangon = 'resolved';
            michal['key'] = tangon;
            tangon = zuuluu.params;
            tangon = tangon.screen;
            michal['name'] = tangon;
            zuuluu = zuuluu.params;
            zuuluu = zuuluu.params;
            michal['params'] = zuuluu;
            return michal;
 244:
            return entity;
        }
    };
    var _closure1_slot11 = tangon;
    entity = function(argFoo) { // Original name: resolveBackgroundScreen
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            entity = entity.routes;
            option = 0;
            zuuluu = entity[option];
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            golfie = 8;
            entity = entity[golfie];
            tangon = undefined;
            michal = michal.bind(tangon)(entity);
            entity = michal.coerceTabsRoute;
            michal = entity.bind(michal)(zuuluu);
            oscard = null;
            if(!(oscard != michal)) { _fun00004_ip = 309; continue _fun00003 }
 60:
            entity = _closure1_slot11;
            zuuluu = entity.bind(tangon)(michal);
            if(!(oscard != zuuluu)) { _fun00004_ip = 303; continue _fun00003 }
 76:
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[golfie];
            michal = michal.bind(tangon)(entity);
            entity = michal.coerceGuildsRoute;
            golfie = entity.bind(michal)(zuuluu);
            if(!(oscard != golfie)) { _fun00004_ip = 297; continue _fun00003 }
 111:
            entity = golfie.params;
            michal = oscard == entity;
            zuuluu = undefined;
            if(michal) { _fun00004_ip = 131; continue _fun00003 }
 126:
            zuuluu = entity.guildId;
 131:
            entity = golfie.params;
            verify = oscard == entity;
            michal = undefined;
            if(verify) { _fun00004_ip = 151; continue _fun00003 }
 146:
            michal = entity.channelId;
 151:
            verify = oscard != michal;
            entity = undefined;
            if(!verify) { _fun00004_ip = 163; continue _fun00003 }
 160:
            entity = michal;
 163:
            if(!(oscard != entity)) { _fun00004_ip = 291; continue _fun00003 }
 170:
            michal = _closure1_slot9;
            michal = michal.bind(tangon)(entity);
            if(michal) { _fun00004_ip = 206; continue _fun00003 }
 182:
            verify = _closure1_slot5;
            michal = verify.getChannel;
            michal = michal.bind(verify)(entity);
            if(!(oscard == michal)) { _fun00004_ip = 206; continue _fun00003 }
 200:
            michal = new Array(0);
            return michal;
 206:
            michal = {};
            michal['index'] = option;
            golfie = golfie.params;
            option = oscard == golfie;
            tangon = undefined;
            if(option) { _fun00004_ip = 233; continue _fun00003 }
 227:
            tangon = golfie.search;
 233:
            if(!(oscard != tangon)) { _fun00004_ip = 240; continue _fun00003 }
 237:
            if(tangon) { _fun00004_ip = 252; continue _fun00003 }
 240:
            tangon = _closure1_slot10;
            tangon = tangon.BACKGROUND_SAVED;
            _fun00004_ip = 262; continue _fun00003;
 252:
            report = _closure1_slot10;
            tangon = report.FALLBACK_RENDERED;
 262:
            michal['type'] = tangon;
            michal['guildId'] = zuuluu;
            michal['channelId'] = entity;
            entity = false;
            michal['showCreateThread'] = entity;
            entity = new Array(1);
            entity[0] = michal;
            return entity;
 291:
            entity = new Array(0);
            return entity;
 297:
            entity = new Array(0);
            return entity;
 303:
            entity = new Array(0);
            return entity;
 309:
            entity = new Array(0);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar) { // Original name: resolveChannelScreens
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            option = argFoo;
            report = new Array(0);
            entity = option.index;
            tangon = 0;
            entity = tangon <= entity;
            offset = 8;
            golfie = undefined;
            verify = null;
            zuuluu = 0;
            if(!entity) { _fun00006_ip = 177; continue _fun00005 }
 38:
            entity = option.routes;
            romeon = entity[zuuluu];
            yankee = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[offset];
            yankee = yankee.bind(golfie)(entity);
            entity = yankee.coerceChannelRoute;
            romeon = entity.bind(yankee)(romeon);
            if(!(verify != romeon)) { _fun00006_ip = 162; continue _fun00005 }
 80:
            yankee = report.push;
            entity = {};
            foxtra = report.length;
            entity['index'] = foxtra;
            foxtra = _closure1_slot10;
            foxtra = foxtra.DEFAULT;
            entity['type'] = foxtra;
            foxtra = romeon.params;
            foxtra = foxtra.guildId;
            entity['guildId'] = foxtra;
            foxtra = romeon.params;
            foxtra = foxtra.channelId;
            entity['channelId'] = foxtra;
            romeon = romeon.params;
            romeon = romeon.showCreateThread;
            entity['showCreateThread'] = romeon;
            entity = yankee.bind(report)(entity);
 162:
            zuuluu = zuuluu + 1;
            entity = option.index;
            if(zuuluu <= entity) { _fun00006_ip = 38; continue _fun00005 }
 177:
            entity = argBar;
            entity = entity.isChatLockedOpen;
            if(!entity) { _fun00006_ip = 211; continue _fun00005 }
 189:
            entity = _closure1_slot12;
            zuuluu = entity.bind(golfie)(option);
            var _closure2_slot0 = zuuluu;
            entity = zuuluu.length;
            if(!(!(entity > tangon))) { _fun00006_ip = 234; continue _fun00005 }
 211:
            verify = report.length;
            entity = report;
            if(!(!(verify > tangon))) { _fun00006_ip = 232; continue _fun00005 }
 223:
            oscard = _closure1_slot12;
            entity = oscard.bind(golfie)(option);
 232:
            return entity;
 234:
            entity = new Array(0);
            sizing = entity;
            kiloes = zuuluu;
            backup = 0;
            backup = arraySpread(sizing, kiloes, backup);
            tangon = report.map;
            michal = function(argFoo) {
                michal = argFoo;
                entity = {};
                report = entity;
                tangon = michal;
                zuuluu = copyDataProperties(report, tangon);
                zuuluu = michal.index;
                michal = _closure2_slot0;
                michal = michal.length;
                zuuluu = zuuluu + michal;
                michal = 'index';
                entity[michal] = zuuluu;
                return entity;
            };
            kiloes = tangon.bind(report)(michal);
            sizing = entity;
            michal = arraySpread(sizing, kiloes, backup);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    yankee = 0;
    report = option[yankee];
    entity = undefined;
    report = oscard.bind(entity)(report);
    var _closure1_slot3 = report;
    offset = 1;
    verify = option[offset];
    report = argCor;
    report = report.bind(entity)(verify);
    var _closure1_slot4 = report;
    verify = 2;
    report = option[verify];
    report = oscard.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = option[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = option[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = option[report];
    report = golfie.bind(entity)(report);
    report = report.ME;
    var _closure1_slot8 = report;
    report = 6;
    report = option[report];
    report = golfie.bind(entity)(report);
    report = report.isStaticChannelRoute;
    var _closure1_slot9 = report;
    report = {};
    report['DEFAULT'] = yankee;
    oscard = 'DEFAULT';
    report[yankee] = oscard;
    report['BACKGROUND_SAVED'] = offset;
    oscard = 'BACKGROUND_SAVED';
    report[offset] = oscard;
    report['FALLBACK_RENDERED'] = verify;
    oscard = 'FALLBACK_RENDERED';
    report[verify] = oscard;
    var _closure1_slot10 = report;
    oscard = 10;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/main_tabs_v2/native/panels/useChannelScreensFromNavigation.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo) { // Original name: useChannelScreensFromNavigation
        golfie = argFoo;
        var _closure2_slot0 = golfie;
        tangon = _closure1_slot1;
        report = _closure1_slot2;
        zuuluu = 9;
        zuuluu = report[zuuluu];
        option = undefined;
        zuuluu = tangon.bind(option)(zuuluu);
        zuuluu = zuuluu.bind(option)();
        var _closure2_slot1 = zuuluu;
        report = _closure1_slot4;
        oscard = report.useState;
        tangon = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = _closure1_slot13;
                zuuluu = _closure2_slot0;
                michal = zuuluu.getState;
                zuuluu = michal.bind(zuuluu)();
                michal = _closure2_slot1;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal);
                michal = entity.length;
                golfie = 0;
                if(!(!(michal > golfie))) { _fun00008_ip = 134; continue _fun00007 }
 47:
                zuuluu = _closure1_slot7;
                michal = zuuluu.getGuildId;
                tangon = michal.bind(zuuluu)();
                zuuluu = _closure1_slot6;
                michal = zuuluu.getChannelId;
                michal = michal.bind(zuuluu)();
                oscard = null;
                if(!(oscard != michal)) { _fun00008_ip = 127; continue _fun00007 }
 81:
                zuuluu = {};
                zuuluu['index'] = golfie;
                golfie = _closure1_slot10;
                golfie = golfie.FALLBACK_RENDERED;
                zuuluu['type'] = golfie;
                if(!(oscard == tangon)) { _fun00008_ip = 109; continue _fun00007 }
 105:
                tangon = _closure1_slot8;
 109:
                zuuluu['guildId'] = tangon;
                zuuluu['channelId'] = michal;
                michal = new Array(1);
                michal[0] = zuuluu;
                _fun00008_ip = 131; continue _fun00007;
 127:
                michal = new Array(0);
 131:
                entity = michal;
 134:
                return entity;
            }
        };
        oscard = oscard.bind(report)(tangon);
        tangon = _closure1_slot3;
        entity = 2;
        oscard = tangon.bind(option)(oscard, entity);
        entity = 0;
        entity = oscard[entity];
        tangon = 1;
        tangon = oscard[tangon];
        var _closure2_slot2 = tangon;
        option = report.useCallback;
        oscard = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = argFoo;
                entity = null;
                if(!(entity != zuuluu)) { _fun00010_ip = 20; continue _fun00009 }
 9:
                michal = zuuluu.length;
                entity = 0;
                if(!(!(michal > entity))) { _fun00010_ip = 45; continue _fun00009 }
 20:
                tangon = _closure2_slot2;
                michal = undefined;
                entity = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        report = argFoo;
                        michal = report.length;
                        tangon = 0;
                        entity = report;
                        if(!(tangon !== michal)) { _fun00012_ip = 89; continue _fun00011 }
 17:
                        michal = report[tangon];
                        oscard = michal.type;
                        zuuluu = _closure1_slot10;
                        zuuluu = zuuluu.FALLBACK_RENDERED;
                        entity = report;
                        if(!(oscard !== zuuluu)) { _fun00012_ip = 89; continue _fun00011 }
 46:
                        zuuluu = {};
                        golfie = report[tangon];
                        option = zuuluu;
                        tangon = copyDataProperties(option, golfie);
                        michal = _closure1_slot10;
                        tangon = michal.FALLBACK_RENDERED;
                        michal = 'type';
                        zuuluu[michal] = tangon;
                        michal = new Array(1);
                        michal[0] = zuuluu;
                        entity = michal;
 89:
                        return entity;
                    }
                };
                entity = tangon.bind(michal)(entity);
                _fun00010_ip = 59; continue _fun00009;
 45:
                michal = _closure2_slot2;
                entity = undefined;
                entity = michal.bind(entity)(zuuluu);
 59:
                entity = undefined;
                return entity;
            }
        };
        tangon = new Array(0);
        oscard = option.bind(report)(oscard, tangon);
        var _closure2_slot3 = oscard;
        option = report.useEffect;
        tangon = new Array(3);
        tangon[0] = golfie;
        tangon[1] = zuuluu;
        tangon[2] = oscard;
        zuuluu = function() {
            report = _closure1_slot13;
            zuuluu = _closure2_slot0;
            entity = zuuluu.getState;
            tangon = entity.bind(zuuluu)();
            zuuluu = _closure2_slot1;
            entity = undefined;
            zuuluu = report.bind(entity)(tangon, zuuluu);
            michal = _closure2_slot3;
            michal = michal.bind(entity)(zuuluu);
            return entity;
        };
        zuuluu = option.bind(report)(zuuluu, tangon);
        tangon = report.useEffect;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        zuuluu[1] = oscard;
        michal = function() {
            report = function(argFoo) { // Original name: handleStateChange
                tangon = _closure1_slot13;
                michal = argFoo;
                michal = michal.data;
                zuuluu = michal.state;
                report = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 9;
                michal = michal[entity];
                entity = undefined;
                report = report.bind(entity)(michal);
                michal = report.getChatLayout;
                michal = michal.bind(report)();
                zuuluu = tangon.bind(entity)(zuuluu, michal);
                michal = _closure2_slot3;
                michal = michal.bind(entity)(zuuluu);
                return entity;
            };
            var _closure3_slot0 = report;
            tangon = _closure2_slot0;
            zuuluu = tangon.addListener;
            michal = 'state';
            michal = zuuluu.bind(tangon)(michal, report);
            entity = function() {
                tangon = _closure2_slot0;
                zuuluu = tangon.removeListener;
                michal = _closure3_slot0;
                entity = 'state';
                entity = zuuluu.bind(tangon)(entity, michal);
                entity = undefined;
                return entity;
            };
            return entity;
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['default'] = oscard;
    zuuluu['ChannelScreenType'] = report;
    zuuluu['getActiveTabsRoute'] = tangon;
    michal = function(argFoo) { // Original name: isActiveTabsGuilds
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            michal = entity.routes;
            entity = 0;
            tangon = michal[entity];
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            golfie = 8;
            entity = entity[golfie];
            oscard = undefined;
            zuuluu = zuuluu.bind(oscard)(entity);
            entity = zuuluu.coerceTabsRoute;
            tangon = entity.bind(zuuluu)(tangon);
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00014_ip = 107; continue _fun00013 }
 57:
            entity = _closure1_slot11;
            report = entity.bind(oscard)(tangon);
            entity = zuuluu != report;
            if(!entity) { _fun00014_ip = 105; continue _fun00013 }
 73:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[golfie];
            tangon = tangon.bind(oscard)(michal);
            michal = tangon.coerceGuildsRoute;
            michal = michal.bind(tangon)(report);
            entity = zuuluu != michal;
 105:
            return entity;
 107:
            entity = false;
            return entity;
        }
    };
    zuuluu['isActiveTabsGuilds'] = michal;
    return entity;
})();