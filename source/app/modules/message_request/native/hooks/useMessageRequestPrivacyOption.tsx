// app/modules/message_request/native/hooks/useMessageRequestPrivacyOption.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot4 = tango;
    tango = function(argFoo) { // Original name: MessageRequestRestrictedGuildPrivacyOption
        entity = argFoo;
        zulu = entity.guild;
        verify = zulu.id;
        var _closure2_slot0 = verify;
        yankee = _closure1_slot0;
        romeo = _closure1_slot2;
        report = 2;
        oscar = romeo[report];
        tango = undefined;
        oscar = yankee.bind(tango)(oscar);
        golf = oscar.MessageRequestRestrictedGuildIds;
        oscar = golf.useSetting;
        golf = oscar.bind(golf)();
        oscar = golf.includes;
        golf = oscar.bind(golf)(verify);
        report = romeo[report];
        report = yankee.bind(tango)(report);
        oscar = report.RestrictedGuildIds;
        report = oscar.useSetting;
        oscar = report.bind(oscar)();
        report = oscar.includes;
        zulu = zulu.id;
        report = report.bind(oscar)(zulu);
        options = _closure1_slot3;
        oscar = options.useCallback;
        zulu = new Array(1);
        zulu[0] = verify;
        mike = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 3;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.getSanitizedMessageRequestRestrictedGuilds;
                oscar = zulu.bind(tango)();
                zulu = argFoo;
                if(zulu) { _fun00002_ip = 60; continue _fun00001 }
 41:
                tango = oscar.add;
                zulu = _closure2_slot0;
                zulu = tango.bind(oscar)(zulu);
                _fun00002_ip = 77; continue _fun00001;
 60:
                tango = oscar.delete;
                zulu = _closure2_slot0;
                zulu = tango.bind(oscar)(zulu);
 77:
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 2;
                mike = tango[mike];
                mike = zulu.bind(entity)(mike);
                tango = mike.MessageRequestRestrictedGuildIds;
                zulu = tango.updateSetting;
                mike = global;
                report = mike.Array;
                mike = report.from;
                mike = mike.bind(report)(oscar);
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        oscar = oscar.bind(options)(mike, zulu);
        zulu = _closure1_slot4;
        entity = 4;
        entity = romeo[entity];
        entity = yankee.bind(tango)(entity);
        mike = entity.ActionSheetSwitchRow;
        entity = {};
        options = 5;
        verify = romeo[options];
        verify = yankee.bind(tango)(verify);
        foxtrot = verify.intl;
        offset = foxtrot.string;
        verify = romeo[options];
        verify = yankee.bind(tango)(verify);
        verify = verify.t;
        verify = verify.7UgSGB;
        verify = offset.bind(foxtrot)(verify);
        entity['label'] = verify;
        verify = romeo[options];
        verify = yankee.bind(tango)(verify);
        offset = verify.intl;
        verify = offset.string;
        options = romeo[options];
        options = yankee.bind(tango)(options);
        options = options.t;
        options = options.INRaYW;
        options = verify.bind(offset)(options);
        entity['subLabel'] = options;
        golf = !golf;
        entity['value'] = golf;
        entity['onValueChange'] = oscar;
        entity['disabled'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot5 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/message_request/native/hooks/useMessageRequestPrivacyOption.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useMessageRequestPrivacyOption
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            oscar = entity.guild;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 6;
            entity = tango[entity];
            report = undefined;
            entity = zulu.bind(report)(entity);
            zulu = entity.bind(report)();
            entity = null;
            if(zulu) { _fun00004_ip = 62; continue _fun00003 }
 42:
            tango = _closure1_slot4;
            zulu = _closure1_slot5;
            mike = {};
            mike['guild'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 62:
            return entity;
        }
    };
    zulu['useMessageRequestPrivacyOption'] = mike;
    return entity;
})();