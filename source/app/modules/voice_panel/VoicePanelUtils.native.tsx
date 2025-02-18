// app/modules/voice_panel/VoicePanelUtils.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/VoicePanelUtils.native.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: isVoicePanelEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = entity == tangon;
            michal = undefined;
            if(zuuluu) { _fun00002_ip = 24; continue _fun00001 }
 14:
            zuuluu = tangon.isGuildStageVoice;
            michal = zuuluu.bind(tangon)();
 24:
            entity = entity == michal;
            if(entity) { _fun00002_ip = 34; continue _fun00001 }
 31:
            entity = !michal;
 34:
            return entity;
        }
    };
    zuuluu['isVoicePanelEnabled'] = tangon;
    tangon = function() { // Original name: useIsVoicePanelShowing
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 3;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot2;
        michal = new Array(2);
        michal[0] = report;
        entity = _closure1_slot3;
        michal[1] = entity;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure1_slot2;
                tangon = _closure1_slot3;
                michal = undefined;
                if(!(zuuluu === michal)) { _fun00004_ip = 21; continue _fun00003 }
 17:
                zuuluu = _closure1_slot2;
 21:
                if(!(tangon === michal)) { _fun00004_ip = 29; continue _fun00003 }
 25:
                tangon = _closure1_slot3;
 29:
                michal = zuuluu.getChannel;
                entity = tangon.getChannelId;
                entity = entity.bind(tangon)();
                zuuluu = michal.bind(zuuluu)(entity);
                entity = null;
                entity = entity != zuuluu;
                if(!entity) { _fun00004_ip = 71; continue _fun00003 }
 58:
                michal = zuuluu.isGuildStageVoice;
                michal = michal.bind(zuuluu)();
                entity = !michal;
 71:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useIsVoicePanelShowing'] = tangon;
    tangon = function() { // Original name: useIsVoicePanelFullscreen
        zuuluu = _closure1_slot4;
        michal = undefined;
        entity = function(argFoo) {
            michal = argFoo;
            entity = michal.isVoicePanelFullscreen;
            entity = entity.bind(michal)();
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['useIsVoicePanelFullscreen'] = tangon;
    tangon = function(argFoo) { // Original name: useIsVoicePanelOpen
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot4;
        michal = undefined;
        entity = function(argFoo) {
            zuuluu = argFoo;
            michal = zuuluu.isChannelOpen;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['useIsVoicePanelOpen'] = tangon;
    tangon = function() { // Original name: useIsAnyVoicePanelOpen
        zuuluu = _closure1_slot4;
        michal = undefined;
        entity = function(argFoo) {
            michal = argFoo;
            entity = michal.isAnyVoicePanelOpen;
            entity = entity.bind(michal)();
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['useIsAnyVoicePanelOpen'] = tangon;
    michal = function(argFoo) { // Original name: useIsVoicePanelMounted
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot4;
        michal = undefined;
        entity = function(argFoo) {
            zuuluu = argFoo;
            michal = zuuluu.isMounted;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['useIsVoicePanelMounted'] = michal;
    return entity;
})();