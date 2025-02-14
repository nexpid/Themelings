// app/modules/media_keyboard/native/useUploadDisabled.tsx
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
    tango = report.bind(entity)(tango);
    tango = tango.DraftType;
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
    golf = tango.MAX_UPLOAD_COUNT;
    var _closure1_slot5 = golf;
    tango = tango.Permissions;
    var _closure1_slot6 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/media_keyboard/native/useUploadDisabled.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useUploadDisabled
        mike = argFoo;
        var _closure2_slot0 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 4;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        oscar = _closure1_slot3;
        mike = new Array(2);
        mike[0] = oscar;
        report = _closure1_slot4;
        mike[1] = report;
        entity = function() {
            _fun119462: for(var _fun119462_ip = 0; ; ) switch(_fun119462_ip) {
 0:
                oscar = _closure1_slot4;
                zulu = oscar.getUploads;
                entity = _closure2_slot0;
                mike = entity.id;
                entity = _closure1_slot2;
                entity = entity.ChannelMessage;
                entity = zulu.bind(oscar)(mike, entity);
                mike = entity.length;
                entity = _closure1_slot5;
                entity = mike >= entity;
                if(entity) { _fun119462_ip = 154; continue _fun119462 }
 57:
                mike = _closure2_slot0;
                zulu = mike.id;
                golf = _closure1_slot0;
                oscar = _closure1_slot1;
                mike = 5;
                oscar = oscar[mike];
                mike = undefined;
                mike = golf.bind(mike)(oscar);
                mike = mike.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                mike = zulu === mike;
                if(mike) { _fun119462_ip = 151; continue _fun119462 }
 101:
                oscar = _closure2_slot0;
                zulu = oscar.isPrivate;
                zulu = zulu.bind(oscar)();
                if(zulu) { _fun119462_ip = 148; continue _fun119462 }
 118:
                golf = _closure1_slot3;
                oscar = golf.can;
                report = _closure1_slot6;
                report = report.ATTACH_FILES;
                tango = _closure2_slot0;
                zulu = oscar.bind(golf)(report, tango);
 148:
                mike = !zulu;
 151:
                entity = mike;
 154:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();