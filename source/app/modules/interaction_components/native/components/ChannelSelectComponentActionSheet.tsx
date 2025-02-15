// app/modules/interaction_components/native/components/ChannelSelectComponentActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot6 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/interaction_components/native/components/ChannelSelectComponentActionSheet.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: _default
        entity = argFoo;
        backup = entity.messageId;
        romeo = entity.messageFlags;
        offset = entity.applicationId;
        report = entity.channelId;
        var _closure2_slot0 = report;
        verify = entity.guildId;
        var _closure2_slot1 = verify;
        yankee = entity.selectionActionComponent;
        mike = yankee.channelTypes;
        var _closure2_slot2 = mike;
        golf = _closure1_slot3;
        tango = golf.useCallback;
        zulu = new Array(2);
        zulu[0] = report;
        zulu[1] = mike;
        mike = function(argFoo) {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 4;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.queryChannels;
            zulu = _closure2_slot0;
            mike = _closure2_slot2;
            entity = argFoo;
            entity = tango.bind(report)(entity, zulu, mike);
            return entity;
        };
        options = tango.bind(golf)(mike, zulu);
        mike = _closure1_slot1;
        foxtrot = _closure1_slot2;
        zulu = 5;
        zulu = foxtrot[zulu];
        tango = undefined;
        golf = mike.bind(tango)(zulu);
        zulu = {};
        zulu['selectActionComponent'] = yankee;
        zulu['messageId'] = backup;
        zulu['messageFlags'] = romeo;
        zulu['applicationId'] = offset;
        zulu['channelId'] = report;
        zulu['guildId'] = verify;
        zulu['queryOptions'] = options;
        zulu = golf.bind(tango)(zulu);
        offset = zulu.options;
        verify = zulu.selectedOptions;
        options = zulu.isSelected;
        romeo = zulu.onPressOptionItem;
        golf = zulu.submitSelection;
        var _closure2_slot3 = golf;
        golf = zulu.setQuery;
        zulu = _closure1_slot6;
        entity = 6;
        entity = foxtrot[entity];
        mike = mike.bind(tango)(entity);
        entity = {};
        entity['onPressOptionItem'] = romeo;
        romeo = function(argFoo) { // Original name: renderIcon
            _fun91896: for(var _fun91896_ip = 0; ; ) switch(_fun91896_ip) {
 0:
                tango = _closure1_slot4;
                mike = tango.getChannel;
                entity = argFoo;
                entity = entity.value;
                golf = mike.bind(tango)(entity);
                entity = null;
                if(!(entity != golf)) { _fun91896_ip = 131; continue _fun91896 }
 31:
                report = _closure1_slot5;
                tango = report.getGuild;
                mike = _closure2_slot1;
                report = tango.bind(report)(mike);
                tango = _closure1_slot0;
                oscar = _closure1_slot2;
                mike = 7;
                mike = oscar[mike];
                oscar = undefined;
                tango = tango.bind(oscar)(mike);
                mike = tango.getChannelIconData;
                golf = mike.bind(tango)(golf, report);
                mike = entity != golf;
                if(!mike) { _fun91896_ip = 129; continue _fun91896 }
 93:
                report = _closure1_slot6;
                tango = _closure1_slot1;
                options = _closure1_slot2;
                zulu = 8;
                zulu = options[zulu];
                tango = tango.bind(oscar)(zulu);
                zulu = {};
                zulu['source'] = golf;
                mike = report.bind(oscar)(tango, zulu);
 129:
                return mike;
 131:
                return entity;
            }
        };
        entity['renderIcon'] = romeo;
        entity['selectionActionComponent'] = yankee;
        entity['options'] = offset;
        offset = verify.length;
        entity['selectedCount'] = offset;
        entity['selectedOptions'] = verify;
        entity['isSelected'] = options;
        options = function() { // Original name: submitSelection
            mike = _closure2_slot3;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        };
        entity['submitSelection'] = options;
        entity['onQueryChange'] = golf;
        oscar = function(argFoo) { // Original name: itemAccessibilityLabel
            _fun91898: for(var _fun91898_ip = 0; ; ) switch(_fun91898_ip) {
 0:
                tango = _closure1_slot4;
                zulu = tango.getChannel;
                mike = argFoo;
                mike = mike.value;
                tango = zulu.bind(tango)(mike);
                mike = null;
                if(!(mike == tango)) { _fun91898_ip = 35; continue _fun91898 }
 31:
                mike = undefined;
                return mike;
 35:
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 9;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = {};
                entity['channel'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        entity['itemAccessibilityLabel'] = oscar;
        entity['channelId'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();