// app/modules/voice_panel/VoicePanelUtils.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/VoicePanelUtils.native.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: isVoicePanelEnabled
        _fun73197: for(var _fun73197_ip = 0; ; ) switch(_fun73197_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = entity == tango;
            mike = undefined;
            if(zulu) { _fun73197_ip = 24; continue _fun73197 }
 14:
            zulu = tango.isGuildStageVoice;
            mike = zulu.bind(tango)();
 24:
            entity = entity == mike;
            if(entity) { _fun73197_ip = 34; continue _fun73197 }
 31:
            entity = !mike;
 34:
            return entity;
        }
    };
    zulu['isVoicePanelEnabled'] = tango;
    tango = function() { // Original name: useIsVoicePanelShowing
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 3;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        report = _closure1_slot2;
        mike = new Array(2);
        mike[0] = report;
        entity = _closure1_slot3;
        mike[1] = entity;
        entity = function() {
            _fun73199: for(var _fun73199_ip = 0; ; ) switch(_fun73199_ip) {
 0:
                zulu = _closure1_slot2;
                tango = _closure1_slot3;
                mike = undefined;
                if(!(zulu === mike)) { _fun73199_ip = 21; continue _fun73199 }
 17:
                zulu = _closure1_slot2;
 21:
                if(!(tango === mike)) { _fun73199_ip = 29; continue _fun73199 }
 25:
                tango = _closure1_slot3;
 29:
                mike = zulu.getChannel;
                entity = tango.getChannelId;
                entity = entity.bind(tango)();
                zulu = mike.bind(zulu)(entity);
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun73199_ip = 71; continue _fun73199 }
 58:
                mike = zulu.isGuildStageVoice;
                mike = mike.bind(zulu)();
                entity = !mike;
 71:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useIsVoicePanelShowing'] = tango;
    tango = function() { // Original name: useIsVoicePanelFullscreen
        zulu = _closure1_slot4;
        mike = undefined;
        entity = function(argFoo) {
            mike = argFoo;
            entity = mike.isVoicePanelFullscreen;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['useIsVoicePanelFullscreen'] = tango;
    tango = function(argFoo) { // Original name: useIsVoicePanelOpen
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot4;
        mike = undefined;
        entity = function(argFoo) {
            zulu = argFoo;
            mike = zulu.isChannelOpen;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['useIsVoicePanelOpen'] = tango;
    tango = function() { // Original name: useIsAnyVoicePanelOpen
        zulu = _closure1_slot4;
        mike = undefined;
        entity = function(argFoo) {
            mike = argFoo;
            entity = mike.isAnyVoicePanelOpen;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['useIsAnyVoicePanelOpen'] = tango;
    mike = function(argFoo) { // Original name: useIsVoicePanelMounted
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot4;
        mike = undefined;
        entity = function(argFoo) {
            zulu = argFoo;
            mike = zulu.isMounted;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['useIsVoicePanelMounted'] = mike;
    return entity;
})();