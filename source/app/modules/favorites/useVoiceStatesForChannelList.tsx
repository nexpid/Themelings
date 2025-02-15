// app/modules/favorites/useVoiceStatesForChannelList.tsx
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
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.FAVORITES;
    var _closure1_slot5 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/favorites/useVoiceStatesForChannelList.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useVoiceStatesForChannelList
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 4;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStoresObject;
        golf = _closure1_slot3;
        zulu = new Array(3);
        zulu[0] = golf;
        golf = _closure1_slot2;
        zulu[1] = golf;
        mike = _closure1_slot4;
        zulu[2] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tango = _closure2_slot0;
                zulu = _closure1_slot5;
                if(!(tango === zulu)) { _fun00002_ip = 100; continue _fun00001 }
 18:
                tango = _closure1_slot4;
                zulu = tango.getFavoriteChannels;
                tango = zulu.bind(tango)();
                zulu = {};
                options = tango;
                tango = null;
                for(report in options)
 47:
                {
 56:
                    yankee = report;
                    romeo = _closure1_slot2;
                    offset = romeo.getChannel;
                    foxtrot = offset.bind(romeo)(yankee);
                    if(tango == foxtrot) { _fun00002_ip = 47; continue _fun00001 }
 77:
                    romeo = _closure1_slot3;
                    offset = romeo.getVoiceStatesForChannel;
                    offset = offset.bind(romeo)(foxtrot);
                    zulu[yankee] = offset;
                    _fun00002_ip = 47; continue _fun00001;
                }
 98:
                return zulu;
 100:
                zulu = _closure1_slot3;
                mike = zulu.getVoiceStates;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();