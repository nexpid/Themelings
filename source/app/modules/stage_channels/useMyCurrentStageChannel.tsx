// app/modules/stage_channels/useMyCurrentStageChannel.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
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
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/stage_channels/useMyCurrentStageChannel.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useMyCurrentStageChannel
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 2;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        report = _closure1_slot3;
        mike = new Array(2);
        mike[0] = report;
        entity = _closure1_slot2;
        mike[1] = entity;
        entity = function() {
            _fun103697: for(var _fun103697_ip = 0; ; ) switch(_fun103697_ip) {
 0:
                zulu = _closure1_slot3;
                mike = zulu.getVoiceChannelId;
                tango = mike.bind(zulu)();
                mike = null;
                if(!(mike != tango)) { _fun103697_ip = 54; continue _fun103697 }
 23:
                zulu = _closure1_slot2;
                entity = zulu.getChannel;
                entity = entity.bind(zulu)(tango);
                if(!(mike != entity)) { _fun103697_ip = 54; continue _fun103697 }
 41:
                zulu = entity.isGuildStageVoice;
                zulu = zulu.bind(entity)();
                if(zulu) { _fun103697_ip = 56; continue _fun103697 }
 54:
                return mike;
 56:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();