// app/modules/interaction_components/native/components/useSearchableSelectComponent.tsx
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
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/interaction_components/native/components/useSearchableSelectComponent.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useSearchableSelectComponent
        mike = argFoo;
        entity = mike.selectActionComponent;
        var _closure2_slot0 = entity;
        kilo = mike.messageId;
        var _closure2_slot1 = kilo;
        tango = mike.messageFlags;
        var _closure2_slot2 = tango;
        tango = mike.applicationId;
        var _closure2_slot3 = tango;
        tango = mike.channelId;
        var _closure2_slot4 = tango;
        backup = mike.guildId;
        var _closure2_slot5 = backup;
        tango = mike.queryOptions;
        var _closure2_slot6 = tango;
        offset = _closure1_slot4;
        oscar = offset.useState;
        mike = '';
        mike = oscar.bind(offset)(mike);
        romeo = _closure1_slot3;
        verify = undefined;
        options = 2;
        mike = romeo.bind(verify)(mike, options);
        oscar = 0;
        yankee = mike[oscar];
        var _closure2_slot7 = yankee;
        golf = 1;
        mike = mike[golf];
        foxtrot = _closure1_slot0;
        report = _closure1_slot2;
        report = report[options];
        foxtrot = foxtrot.bind(verify)(report);
        report = foxtrot.getInitialSnowflakeSelectOptions;
        report = report.bind(foxtrot)(entity, kilo, backup);
        var _closure2_slot8 = report;
        foxtrot = offset.useState;
        report = function() {
            entity = global;
            zulu = entity.Map;
            tango = _closure2_slot8;
            mike = tango.map;
            entity = function(argFoo) {
                mike = argFoo;
                zulu = mike.value;
                entity = new Array(2);
                entity[0] = zulu;
                entity[1] = mike;
                return entity;
            };
            report = mike.bind(tango)(entity);
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            oscar = mike;
            entity = new oscar[zulu](report, tango);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        report = foxtrot.bind(offset)(report);
        options = romeo.bind(verify)(report, options);
        report = options[oscar];
        var _closure2_slot9 = report;
        options = options[golf];
        var _closure2_slot10 = options;
        verify = offset.useMemo;
        options = new Array(2);
        options[0] = yankee;
        options[1] = tango;
        tango = function() {
            zulu = _closure2_slot6;
            mike = _closure2_slot7;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        tango = verify.bind(offset)(tango, options);
        entity = entity.maxValues;
        entity = entity > golf;
        var _closure2_slot11 = entity;
        entity = function(argFoo) { // Original name: submitSelection
            mike = argFoo;
            golf = {};
            verify = _closure2_slot0;
            entity = verify.type;
            golf['type'] = entity;
            entity = mike.values;
            romeo = entity.bind(mike)();
            entity = new Array(0);
            yankee = 0;
            foxtrot = entity;
            mike = arraySpread(foxtrot, romeo, yankee);
            golf['selectedOptions'] = entity;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 3;
            zulu = tango[entity];
            entity = undefined;
            oscar = report.bind(entity)(zulu);
            report = oscar.executeMessageComponentInteraction;
            zulu = {};
            offset = verify.type;
            zulu['componentType'] = offset;
            offset = _closure2_slot1;
            zulu['messageId'] = offset;
            offset = _closure2_slot2;
            zulu['messageFlags'] = offset;
            offset = verify.customId;
            zulu['customId'] = offset;
            verify = verify.id;
            zulu['componentId'] = verify;
            verify = _closure2_slot3;
            zulu['applicationId'] = verify;
            verify = _closure2_slot4;
            zulu['channelId'] = verify;
            options = _closure2_slot5;
            zulu['guildId'] = options;
            zulu['localState'] = golf;
            zulu = report.bind(oscar)(zulu);
            zulu = _closure1_slot1;
            mike = 4;
            mike = tango[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.hideActionSheet;
            mike = mike.bind(zulu)();
            return entity;
        };
        var _closure2_slot12 = entity;
        entity = {};
        entity['options'] = tango;
        tango = report.values;
        output = tango.bind(report)();
        tango = new Array(0);
        result = tango;
        sizing = 0;
        report = arraySpread(result, output, sizing);
        entity['selectedOptions'] = tango;
        tango = function(argFoo) { // Original name: isSelected
            zulu = _closure2_slot9;
            mike = zulu.has;
            entity = argFoo;
            entity = entity.value;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['isSelected'] = tango;
        tango = function(argFoo, argBar) { // Original name: onPressOptionItem
            _fun91890: for(var _fun91890_ip = 0; ; ) switch(_fun91890_ip) {
 0:
                report = argBar;
                var _closure3_slot0 = report;
                oscar = _closure2_slot9;
                tango = oscar.has;
                zulu = report.value;
                zulu = tango.bind(oscar)(zulu);
                var _closure3_slot1 = zulu;
                tango = _closure2_slot11;
                if(tango) { _fun91890_ip = 136; continue _fun91890 }
 42:
                oscar = _closure2_slot12;
                tango = global;
                tango = tango.Map;
                if(zulu) { _fun91890_ip = 107; continue _fun91890 }
 57:
                options = report.value;
                golf = new Array(2);
                golf[0] = options;
                golf[1] = report;
                report = new Array(1);
                report[0] = golf;
                golf = tango.prototype;
                golf = Object.create(golf, {constructor: {value: tango}});
                offset = golf;
                verify = report;
                report = new offset[tango](verify, options);
                report = report instanceof Object ? report : golf;
                _fun91890_ip = 127; continue _fun91890;
 107:
                golf = tango.prototype;
                golf = Object.create(golf, {constructor: {value: tango}});
                offset = golf;
                tango = new offset[tango](verify);
                report = tango instanceof Object ? tango : golf;
 127:
                tango = undefined;
                tango = oscar.bind(tango)(report);
                _fun91890_ip = 186; continue _fun91890;
 136:
                zulu = !zulu;
                if(!zulu) { _fun91890_ip = 165; continue _fun91890 }
 142:
                tango = _closure2_slot9;
                report = tango.size;
                tango = _closure2_slot0;
                tango = tango.maxValues;
                zulu = report >= tango;
 165:
                if(zulu) { _fun91890_ip = 186; continue _fun91890 }
 168:
                zulu = _closure2_slot10;
                mike = undefined;
                entity = function(argFoo) {
                    _fun91891: for(var _fun91891_ip = 0; ; ) switch(_fun91891_ip) {
 0:
                        entity = global;
                        zulu = entity.Map;
                        entity = zulu.prototype;
                        mike = Object.create(entity, {constructor: {value: zulu}});
                        golf = argFoo;
                        options = mike;
                        entity = new options[zulu](golf, oscar);
                        entity = entity instanceof Object ? entity : mike;
                        zulu = _closure3_slot1;
                        if(zulu) { _fun91891_ip = 63; continue _fun91891 }
 41:
                        report = entity.set;
                        tango = _closure3_slot0;
                        zulu = tango.value;
                        zulu = report.bind(entity)(zulu, tango);
                        _fun91891_ip = 82; continue _fun91891;
 63:
                        zulu = entity.delete;
                        mike = _closure3_slot0;
                        mike = mike.value;
                        mike = zulu.bind(entity)(mike);
 82:
                        return entity;
                    }
                };
                entity = zulu.bind(mike)(entity);
 186:
                entity = undefined;
                return entity;
            }
        };
        entity['onPressOptionItem'] = tango;
        zulu = function() { // Original name: submitSelection
            zulu = _closure2_slot12;
            mike = _closure2_slot9;
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        entity['submitSelection'] = zulu;
        entity['setQuery'] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();