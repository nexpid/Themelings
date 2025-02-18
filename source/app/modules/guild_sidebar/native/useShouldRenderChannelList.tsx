// app/modules/guild_sidebar/native/useShouldRenderChannelList.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ComponentActions;
    var _closure1_slot6 = tangon;
    tangon = false;
    var _closure1_slot7 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_sidebar/native/useShouldRenderChannelList.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useShouldRenderChannelList
        report = _closure1_slot3;
        tangon = report.useState;
        zuuluu = _closure1_slot7;
        oscard = tangon.bind(report)(zuuluu);
        tangon = _closure1_slot2;
        zuuluu = undefined;
        entity = 2;
        tangon = tangon.bind(zuuluu)(oscard, entity);
        entity = 0;
        entity = tangon[entity];
        var _closure2_slot0 = entity;
        zuuluu = 1;
        zuuluu = tangon[zuuluu];
        var _closure2_slot1 = zuuluu;
        tangon = report.useEffect;
        zuuluu = new Array(1);
        zuuluu[0] = entity;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                verify = function() { // Original name: allowRender
                    zuuluu = true;
                    _closure1_slot7 = zuuluu;
                    michal = _closure2_slot1;
                    entity = undefined;
                    michal = michal.bind(entity)(zuuluu);
                    return entity;
                };
                var _closure3_slot0 = verify;
                golfie = function() { // Original name: handleGatewayChange
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        michal = _closure1_slot5;
                        entity = michal.isConnected;
                        entity = entity.bind(michal)();
                        if(!entity) { _fun00004_ip = 33; continue _fun00003 }
 20:
                        michal = _closure3_slot0;
                        entity = undefined;
                        entity = michal.bind(entity)();
 33:
                        entity = undefined;
                        return entity;
                    }
                };
                var _closure3_slot1 = golfie;
                oscard = function() { // Original name: handleCacheChange
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        michal = _closure1_slot4;
                        entity = michal.getLazyCacheStatus;
                        michal = entity.bind(michal)();
                        entity = 'cache-loaded';
                        if(!(entity === michal)) { _fun00006_ip = 40; continue _fun00005 }
 27:
                        michal = _closure3_slot0;
                        entity = undefined;
                        entity = michal.bind(entity)();
 40:
                        entity = undefined;
                        return entity;
                    }
                };
                var _closure3_slot2 = oscard;
                report = function() { // Original name: handleNavigationChange
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        zuuluu = _closure1_slot0;
                        oscard = _closure1_slot1;
                        entity = 5;
                        michal = oscard[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        tangon = report.coerceGuildsRoute;
                        michal = 6;
                        michal = oscard[michal];
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.getRootNavigationRef;
                        golfie = michal.bind(zuuluu)();
                        zuuluu = null;
                        oscard = zuuluu == golfie;
                        michal = undefined;
                        if(oscard) { _fun00008_ip = 74; continue _fun00007 }
 64:
                        oscard = golfie.getCurrentRoute;
                        michal = oscard.bind(golfie)();
 74:
                        michal = tangon.bind(report)(michal);
                        if(!(zuuluu != michal)) { _fun00008_ip = 94; continue _fun00007 }
 83:
                        michal = _closure3_slot0;
                        michal = michal.bind(entity)();
 94:
                        return entity;
                    }
                };
                var _closure3_slot3 = report;
                michal = _closure2_slot0;
                if(michal) { _fun00002_ip = 195; continue _fun00001 }
 59:
                tangon = _closure1_slot5;
                zuuluu = tangon.addReactChangeListener;
                zuuluu = zuuluu.bind(tangon)(golfie);
                tangon = _closure1_slot4;
                zuuluu = tangon.addReactChangeListener;
                zuuluu = zuuluu.bind(tangon)(oscard);
                tangon = _closure1_slot0;
                oscard = _closure1_slot1;
                zuuluu = 7;
                golfie = oscard[zuuluu];
                zuuluu = undefined;
                golfie = tangon.bind(zuuluu)(golfie);
                option = golfie.ComponentDispatch;
                golfie = option.subscribe;
                michal = _closure1_slot6;
                michal = michal.BOTTOM_CHANNEL_SCREEN_DRAG_START;
                michal = golfie.bind(option)(michal, verify);
                michal = 6;
                michal = oscard[michal];
                zuuluu = tangon.bind(zuuluu)(michal);
                michal = zuuluu.getRootNavigationRef;
                tangon = michal.bind(zuuluu)();
                michal = null;
                if(!(michal != tangon)) { _fun00002_ip = 186; continue _fun00001 }
 170:
                zuuluu = tangon.addListener;
                michal = 'state';
                michal = zuuluu.bind(tangon)(michal, report);
 186:
                entity = function() {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        report = _closure1_slot5;
                        tangon = report.removeReactChangeListener;
                        entity = _closure3_slot1;
                        entity = tangon.bind(report)(entity);
                        report = _closure1_slot4;
                        tangon = report.addReactChangeListener;
                        entity = _closure3_slot2;
                        entity = tangon.bind(report)(entity);
                        tangon = _closure1_slot0;
                        report = _closure1_slot1;
                        entity = 7;
                        oscard = report[entity];
                        entity = undefined;
                        oscard = tangon.bind(entity)(oscard);
                        option = oscard.ComponentDispatch;
                        golfie = option.unsubscribe;
                        zuuluu = _closure1_slot6;
                        oscard = zuuluu.BOTTOM_CHANNEL_SCREEN_DRAG_START;
                        zuuluu = _closure3_slot0;
                        zuuluu = golfie.bind(option)(oscard, zuuluu);
                        zuuluu = 6;
                        zuuluu = report[zuuluu];
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = tangon.getRootNavigationRef;
                        report = zuuluu.bind(tangon)();
                        zuuluu = null;
                        if(!(zuuluu != report)) { _fun00010_ip = 146; continue _fun00009 }
 126:
                        tangon = report.removeListener;
                        zuuluu = _closure3_slot3;
                        michal = 'state';
                        michal = tangon.bind(report)(michal, zuuluu);
 146:
                        return entity;
                    }
                };
                return entity;
 195:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['useShouldRenderChannelList'] = michal;
    return entity;
})();