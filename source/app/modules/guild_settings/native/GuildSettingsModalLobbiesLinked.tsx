// app/modules/guild_settings/native/GuildSettingsModalLobbiesLinked.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: SyncingToGamesItem
        _fun125808: for(var _fun125808_ip = 0; ; ) switch(_fun125808_ip) {
 0:
            entity = argFoo;
            tango = entity.applicationId;
            options = entity.channels;
            var _closure2_slot0 = options;
            entity = entity.isOnlySection;
            var _closure2_slot1 = entity;
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 3;
            entity = golf[entity];
            report = undefined;
            verify = zulu.bind(report)(entity);
            entity = verify.useNavigation;
            entity = entity.bind(verify)();
            var _closure2_slot2 = entity;
            entity = 4;
            entity = golf[entity];
            zulu = zulu.bind(report)(entity);
            entity = zulu.useGetOrFetchApplication;
            verify = entity.bind(zulu)(tango);
            tango = options.length;
            golf = null;
            zulu = 0;
            entity = null;
            if(!(zulu !== tango)) { _fun125808_ip = 184; continue _fun125808 }
 107:
            tango = _closure1_slot4;
            zulu = _closure1_slot0;
            offset = _closure1_slot2;
            mike = 5;
            mike = offset[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.FormSection;
            mike = {};
            offset = golf == verify;
            golf = undefined;
            if(offset) { _fun125808_ip = 153; continue _fun125808 }
 148:
            golf = verify.name;
 153:
            mike['title'] = golf;
            golf = options.map;
            oscar = function(argFoo) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                report = _closure1_slot4;
                options = _closure1_slot0;
                offset = _closure1_slot2;
                golf = 5;
                mike = offset[golf];
                tango = undefined;
                mike = options.bind(tango)(mike);
                zulu = mike.FormRow;
                mike = {};
                yankee = entity.name;
                mike['label'] = yankee;
                yankee = 6;
                yankee = offset[yankee];
                romeo = options.bind(tango)(yankee);
                yankee = romeo.getChannelIconComponent;
                yankee = yankee.bind(romeo)(entity);
                mike['leading'] = yankee;
                verify = _closure1_slot4;
                golf = offset[golf];
                golf = options.bind(tango)(golf);
                golf = golf.FormRow;
                options = golf.Arrow;
                golf = {};
                golf = verify.bind(tango)(options, golf);
                mike['trailing'] = golf;
                oscar = function() { // Original name: onPress
                    _fun125810: for(var _fun125810_ip = 0; ; ) switch(_fun125810_ip) {
 0:
                        tango = _closure2_slot2;
                        zulu = tango.push;
                        entity = _closure1_slot3;
                        mike = entity.EDIT_LINKED_LOBBY;
                        entity = {};
                        report = _closure3_slot0;
                        entity['channel'] = report;
                        options = _closure2_slot1;
                        golf = 1;
                        report = golf;
                        if(!options) { _fun125810_ip = 70; continue _fun125810 }
 51:
                        oscar = _closure2_slot0;
                        oscar = oscar.length;
                        report = golf;
                        if(!(report === oscar)) { _fun125810_ip = 70; continue _fun125810 }
 67:
                        report = 2;
 70:
                        entity['numScreensToPop'] = report;
                        entity = zulu.bind(tango)(mike, entity);
                        entity = undefined;
                        return entity;
                    }
                };
                mike['onPress'] = oscar;
                entity = entity.id;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            oscar = golf.bind(options)(oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 184:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildSettingsSections;
    var _closure1_slot3 = tango;
    tango = 2;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot4 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot5 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_settings/native/GuildSettingsModalLobbiesLinked.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: GuildSettingsModalLobbiesLinked
        entity = argFoo;
        offset = entity.contentContainerStyle;
        oscar = entity.navScrim;
        zulu = entity.guildId;
        golf = _closure1_slot0;
        romeo = _closure1_slot2;
        entity = 7;
        entity = romeo[entity];
        tango = undefined;
        mike = golf.bind(tango)(entity);
        entity = mike.useChannelsAllowedToUnlink;
        options = entity.bind(mike)(zulu);
        mike = _closure1_slot1;
        entity = 8;
        entity = romeo[entity];
        zulu = mike.bind(tango)(entity);
        mike = zulu.groupBy;
        entity = function(argFoo) {
            _fun125812: for(var _fun125812_ip = 0; ; ) switch(_fun125812_ip) {
 0:
                entity = argFoo;
                mike = entity.linkedLobby;
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun125812_ip = 26; continue _fun125812 }
 20:
                entity = mike.application_id;
 26:
                return entity;
            }
        };
        zulu = mike.bind(zulu)(options, entity);
        var _closure2_slot0 = zulu;
        entity = global;
        mike = entity.Object;
        entity = mike.keys;
        yankee = entity.bind(mike)(zulu);
        var _closure2_slot1 = yankee;
        zulu = _closure1_slot5;
        entity = 9;
        entity = romeo[entity];
        entity = golf.bind(tango)(entity);
        mike = entity.RedesignCompat;
        entity = {};
        options = _closure1_slot4;
        report = 5;
        report = romeo[report];
        report = golf.bind(tango)(report);
        golf = report.Form;
        report = {};
        report['contentContainerStyle'] = offset;
        offset = yankee.map;
        verify = function(argFoo) {
            report = argFoo;
            tango = _closure1_slot4;
            zulu = _closure1_slot6;
            mike = {};
            mike['applicationId'] = report;
            oscar = _closure2_slot0;
            oscar = oscar[report];
            mike['channels'] = oscar;
            entity = _closure2_slot1;
            oscar = entity.length;
            entity = 1;
            entity = entity === oscar;
            mike['isOnlySection'] = entity;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike, report);
            return entity;
        };
        verify = offset.bind(yankee)(verify);
        report['children'] = verify;
        golf = options.bind(tango)(golf, report);
        report = new Array(2);
        report[0] = golf;
        report[1] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();