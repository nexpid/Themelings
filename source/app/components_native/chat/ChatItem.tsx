// app/components_native/chat/ChatItem.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        verify = argBar;
        report = argBaz;
        zulu = argFred;
        offset = argPlugh;
        var _closure1_slot0 = verify;
        var _closure1_slot1 = report;
        var _closure1_slot2 = offset;
        entity = function(argFoo) { // Original name: DCDChatItem
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = argFoo;
                tango = zulu.message;
                entity = null;
                mike = Object.create(entity);
                entity = 0;
                mike['message'] = entity;
                yankee = {};
                offset = zulu;
                verify = mike;
                mike = copyDataProperties(yankee, offset, verify);
                report = tango.type;
                entity = _closure1_slot9;
                entity = entity.GUILD_INVITE_REMINDER;
                if(!(report !== entity)) { _fun00004_ip = 268; continue _fun00003 }
 56:
                report = tango.type;
                entity = _closure1_slot9;
                entity = entity.AUTO_MODERATION_ACTION;
                if(!(report !== entity)) { _fun00004_ip = 238; continue _fun00003 }
 78:
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 13;
                entity = oscar[entity];
                golf = undefined;
                entity = report.bind(golf)(entity);
                entity = entity.MessageTypesSets;
                oscar = entity.AUTOMOD_INCIDENT_ACTIONS;
                report = oscar.has;
                entity = tango.type;
                entity = report.bind(oscar)(entity);
                if(entity) { _fun00004_ip = 210; continue _fun00003 }
 130:
                report = _closure1_slot1;
                oscar = _closure1_slot2;
                entity = 14;
                entity = oscar[entity];
                entity = report.bind(golf)(entity);
                entity = entity.bind(golf)(tango);
                oscar = _closure1_slot12;
                if(entity) { _fun00004_ip = 186; continue _fun00003 }
 162:
                tango = _closure1_slot15;
                entity = {};
                yankee = entity;
                offset = mike;
                report = copyDataProperties(yankee, offset);
                entity = oscar.bind(golf)(tango, entity);
                _fun00004_ip = 208; continue _fun00003;
 186:
                report = _closure1_slot16;
                tango = {};
                yankee = tango;
                offset = mike;
                options = copyDataProperties(yankee, offset);
                entity = oscar.bind(golf)(report, tango);
 208:
                _fun00004_ip = 236; continue _fun00003;
 210:
                oscar = _closure1_slot12;
                report = _closure1_slot15;
                tango = {};
                yankee = tango;
                offset = mike;
                options = copyDataProperties(yankee, offset);
                entity = oscar.bind(golf)(report, tango);
 236:
                _fun00004_ip = 266; continue _fun00003;
 238:
                golf = _closure1_slot12;
                oscar = _closure1_slot18;
                report = {};
                yankee = report;
                offset = mike;
                tango = copyDataProperties(yankee, offset);
                tango = undefined;
                entity = golf.bind(tango)(oscar, report);
 266:
                _fun00004_ip = 296; continue _fun00003;
 268:
                report = _closure1_slot12;
                tango = _closure1_slot17;
                zulu = {};
                yankee = zulu;
                offset = mike;
                mike = copyDataProperties(yankee, offset);
                mike = undefined;
                entity = report.bind(mike)(tango, zulu);
 296:
                return entity;
            }
        };
        var _closure1_slot21 = entity;
        entity = global;
        oscar = entity.Object;
        tango = oscar.defineProperty;
        mike = {};
        entity = true;
        mike['value'] = entity;
        entity = '__esModule';
        entity = tango.bind(oscar)(zulu, entity, mike);
        tango = 0;
        mike = offset[tango];
        entity = undefined;
        mike = report.bind(entity)(mike);
        var _closure1_slot3 = mike;
        mike = 1;
        oscar = offset[mike];
        mike = argCorge;
        mike = mike.bind(entity)(oscar);
        var _closure1_slot4 = mike;
        mike = 2;
        mike = offset[mike];
        mike = verify.bind(entity)(mike);
        romeo = mike.requireNativeComponent;
        options = mike.View;
        var _closure1_slot5 = options;
        mike = mike.Image;
        var _closure1_slot6 = mike;
        mike = 3;
        mike = offset[mike];
        mike = report.bind(entity)(mike);
        var _closure1_slot7 = mike;
        mike = 4;
        mike = offset[mike];
        mike = report.bind(entity)(mike);
        var _closure1_slot8 = mike;
        mike = 5;
        mike = offset[mike];
        mike = verify.bind(entity)(mike);
        mike = mike.MessageTypes;
        var _closure1_slot9 = mike;
        mike = 6;
        mike = offset[mike];
        mike = verify.bind(entity)(mike);
        report = mike.RowType;
        var _closure1_slot10 = report;
        mike = mike.Changeset;
        var _closure1_slot11 = mike;
        mike = 7;
        report = offset[mike];
        report = verify.bind(entity)(report);
        report = report.jsx;
        var _closure1_slot12 = report;
        mike = offset[mike];
        mike = verify.bind(entity)(mike);
        mike = mike.jsxs;
        var _closure1_slot13 = mike;
        yankee = 8;
        mike = offset[yankee];
        report = verify.bind(entity)(mike);
        mike = report.isAndroid;
        report = mike.bind(report)();
        mike = 16;
        if(!report) { _fun00002_ip = 296; continue _fun00001 }
 294:
        mike = 0;
 296:
        var _closure1_slot14 = mike;
        mike = offset[yankee];
        tango = verify.bind(entity)(mike);
        mike = tango.isAndroid;
        mike = mike.bind(tango)();
        if(mike) { _fun00002_ip = 334; continue _fun00001 }
 321:
        mike = 'DCDMessageView';
        oscar = romeo.bind(entity)(mike);
        _fun00002_ip = 351; continue _fun00001;
 334:
        mike = 9;
        mike = offset[mike];
        mike = verify.bind(entity)(mike);
        oscar = mike.default;
 351:
        var _closure1_slot15 = oscar;
        mike = offset[yankee];
        tango = verify.bind(entity)(mike);
        mike = tango.isAndroid;
        mike = mike.bind(tango)();
        if(mike) { _fun00002_ip = 389; continue _fun00001 }
 376:
        mike = 'DCDSystemMessageView';
        report = romeo.bind(entity)(mike);
        _fun00002_ip = 406; continue _fun00001;
 389:
        mike = 10;
        mike = offset[mike];
        mike = verify.bind(entity)(mike);
        report = mike.default;
 406:
        var _closure1_slot16 = report;
        mike = offset[yankee];
        tango = verify.bind(entity)(mike);
        mike = tango.isAndroid;
        mike = mike.bind(tango)();
        if(mike) { _fun00002_ip = 444; continue _fun00001 }
 431:
        mike = 'DCDGuildMultilineSystemMessageView';
        tango = romeo.bind(entity)(mike);
        _fun00002_ip = 461; continue _fun00001;
 444:
        mike = 11;
        mike = offset[mike];
        mike = verify.bind(entity)(mike);
        tango = mike.default;
 461:
        var _closure1_slot17 = tango;
        mike = 'DCDAutoModerationSystemMessageView';
        mike = romeo.bind(entity)(mike);
        var _closure1_slot18 = mike;
        yankee = offset[yankee];
        romeo = verify.bind(entity)(yankee);
        yankee = romeo.isAndroid;
        yankee = yankee.bind(romeo)();
        if(!yankee) { _fun00002_ip = 518; continue _fun00001 }
 501:
        yankee = 12;
        yankee = offset[yankee];
        yankee = verify.bind(entity)(yankee);
        options = yankee.default;
 518:
        var _closure1_slot19 = options;
        options = 15;
        options = offset[options];
        romeo = verify.bind(entity)(options);
        yankee = romeo.createStyles;
        options = function(argFoo) {
            entity = {};
            mike = {'position': 'relative', 'overflow': 'hidden'};
            entity['container'] = mike;
            mike = {};
            zulu = _closure1_slot14;
            zulu = -zulu;
            mike['marginTop'] = zulu;
            zulu = argFoo;
            zulu = -zulu;
            mike['marginLeft'] = zulu;
            entity['offset'] = mike;
            mike = {'position': 'absolute', 'bottom': 0, 'height': 24, 'width': '100%'};
            entity['gradient'] = mike;
            mike = {};
            zulu = 'transparent';
            mike['backgroundColor'] = zulu;
            entity['itemRow'] = mike;
            return entity;
        };
        options = yankee.bind(romeo)(options);
        var _closure1_slot20 = options;
        options = 23;
        options = offset[options];
        offset = verify.bind(entity)(options);
        verify = offset.fileFinishedImporting;
        options = 'components_native/chat/ChatItem.tsx';
        options = verify.bind(offset)(options);
        golf = function(argFoo) { // Original name: _default
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zulu = argFoo;
                result = zulu.rowGenerator;
                var _closure2_slot0 = result;
                echo = zulu.message;
                var _closure2_slot1 = echo;
                kilo = zulu.style;
                options = zulu.horizontalOffset;
                tango = undefined;
                if(!(options === tango)) { _fun00006_ip = 44; continue _fun00005 }
 41:
                options = 8;
 44:
                mike = zulu.maxHeight;
                sizing = zulu.useDarkGradient;
                var _closure2_slot2 = sizing;
                update = zulu.modifyRow;
                var _closure2_slot3 = update;
                foxtrot = zulu.pointerEvents;
                report = zulu.onLayout;
                var _closure2_slot4 = report;
                zulu = zulu.messageSizeCacheRef;
                var _closure2_slot5 = zulu;
                var _closure2_slot6 = tango;
                var _closure2_slot7 = tango;
                var _closure2_slot8 = tango;
                var _closure2_slot9 = tango;
                var _closure2_slot10 = tango;
                var _closure2_slot11 = tango;
                oscar = _closure1_slot20;
                offset = oscar.bind(tango)(options);
                backup = _closure1_slot4;
                oscar = backup.useState;
                verify = 0;
                oscar = oscar.bind(backup)(verify);
                output = _closure1_slot3;
                romeo = 2;
                options = output.bind(tango)(oscar, romeo);
                oscar = options[verify];
                yankee = 1;
                options = options[yankee];
                _closure2_slot6 = options;
                options = backup.useState;
                options = options.bind(backup)(tango);
                options = output.bind(tango)(options, romeo);
                verify = options[verify];
                _closure2_slot7 = verify;
                options = options[yankee];
                _closure2_slot8 = options;
                romeo = _closure1_slot0;
                output = _closure1_slot2;
                options = 16;
                options = output[options];
                control = romeo.bind(tango)(options);
                source = control.useStateFromStores;
                options = _closure1_slot8;
                yankee = new Array(1);
                yankee[0] = options;
                options = function() {
                    entity = _closure1_slot8;
                    entity = entity.theme;
                    return entity;
                };
                options = source.bind(control)(yankee, options);
                _closure2_slot9 = options;
                yankee = 17;
                yankee = output[yankee];
                romeo = romeo.bind(tango)(yankee);
                yankee = romeo.useShouldFilterKeywords;
                yankee = yankee.bind(romeo)();
                _closure2_slot10 = yankee;
                romeo = _closure1_slot7;
                source = romeo.roleStyle;
                _closure2_slot11 = source;
                output = backup.useMemo;
                romeo = new Array(6);
                romeo[0] = verify;
                romeo[1] = source;
                romeo[2] = echo;
                romeo[3] = update;
                romeo[4] = result;
                romeo[5] = yankee;
                yankee = function() {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        report = _closure2_slot0;
                        zulu = report.setOptions;
                        entity = {};
                        tango = _closure2_slot7;
                        entity['constrainedWidth'] = tango;
                        tango = _closure2_slot10;
                        entity['shouldFilterKeywords'] = tango;
                        entity = zulu.bind(report)(entity);
                        tango = report.generate;
                        zulu = {};
                        entity = _closure2_slot11;
                        zulu['roleStyle'] = entity;
                        oscar = _closure1_slot10;
                        oscar = oscar.MESSAGE;
                        zulu['rowType'] = oscar;
                        oscar = _closure1_slot11;
                        oscar = oscar.NOOP;
                        zulu['changeType'] = oscar;
                        oscar = _closure2_slot1;
                        zulu['message'] = oscar;
                        oscar = true;
                        zulu['isFirst'] = oscar;
                        zulu['canShowImages'] = oscar;
                        oscar = false;
                        zulu['canAddNewReactions'] = oscar;
                        report = tango.bind(report)(zulu);
                        tango = _closure2_slot3;
                        zulu = null;
                        if(!(zulu != tango)) { _fun00008_ip = 141; continue _fun00007 }
 130:
                        zulu = _closure2_slot3;
                        mike = undefined;
                        mike = zulu.bind(mike)(report);
 141:
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 8;
                        mike = mike[entity];
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        entity = mike.isAndroid;
                        mike = entity.bind(mike)();
                        entity = report;
                        if(!mike) { _fun00008_ip = 215; continue _fun00007 }
 178:
                        mike = global;
                        tango = mike.JSON;
                        zulu = tango.stringify;
                        mike = {};
                        oscar = 0;
                        mike['index'] = oscar;
                        verify = mike;
                        options = report;
                        report = copyDataProperties(verify, options);
                        entity = zulu.bind(tango)(mike);
 215:
                        return entity;
                    }
                };
                result = output.bind(backup)(yankee, romeo);
                romeo = backup.useMemo;
                yankee = new Array(2);
                yankee[0] = sizing;
                yankee[1] = options;
                options = function() {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        mike = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 18;
                        entity = zulu[entity];
                        zulu = undefined;
                        oscar = mike.bind(zulu)(entity);
                        mike = oscar.isThemeDark;
                        entity = _closure2_slot9;
                        entity = mike.bind(oscar)(entity);
                        mike = _closure1_slot1;
                        if(entity) { _fun00010_ip = 63; continue _fun00009 }
 50:
                        oscar = _closure1_slot2;
                        entity = 21;
                        entity = oscar[entity];
                        _fun00010_ip = 93; continue _fun00009;
 63:
                        tango = _closure2_slot2;
                        oscar = _closure1_slot2;
                        if(tango) { _fun00010_ip = 83; continue _fun00009 }
 74:
                        tango = 20;
                        tango = oscar[tango];
                        _fun00010_ip = 90; continue _fun00009;
 83:
                        report = 19;
                        tango = oscar[report];
 90:
                        entity = tango;
 93:
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    }
                };
                yankee = romeo.bind(backup)(options, yankee);
                romeo = backup.useCallback;
                options = new Array(1);
                options[0] = report;
                report = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        zulu = argFoo;
                        report = _closure2_slot8;
                        entity = zulu.nativeEvent;
                        entity = entity.layout;
                        tango = entity.width;
                        entity = undefined;
                        tango = report.bind(entity)(tango);
                        report = _closure2_slot4;
                        tango = null;
                        if(!(tango != report)) { _fun00012_ip = 52; continue _fun00011 }
 43:
                        mike = _closure2_slot4;
                        mike = mike.bind(entity)(zulu);
 52:
                        return entity;
                    }
                };
                romeo = romeo.bind(backup)(report, options);
                options = backup.useCallback;
                report = new Array(2);
                report[0] = zulu;
                sizing = echo.id;
                report[1] = sizing;
                entity = function(argFoo) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        entity = argFoo;
                        entity = entity.nativeEvent;
                        entity = entity.layout;
                        zulu = entity.height;
                        entity = 0;
                        if(!(zulu > entity)) { _fun00014_ip = 97; continue _fun00013 }
 25:
                        tango = _closure2_slot5;
                        mike = null;
                        if(!(mike != tango)) { _fun00014_ip = 86; continue _fun00013 }
 38:
                        mike = _closure2_slot5;
                        tango = mike.current;
                        mike = _closure2_slot1;
                        mike = mike.id;
                        mike = tango[mike];
                        if(!(mike !== zulu)) { _fun00014_ip = 86; continue _fun00013 }
 64:
                        mike = _closure2_slot5;
                        tango = mike.current;
                        mike = _closure2_slot1;
                        mike = mike.id;
                        tango[mike] = zulu;
 86:
                        mike = _closure2_slot6;
                        entity = undefined;
                        entity = mike.bind(entity)(zulu);
 97:
                        entity = undefined;
                        return entity;
                    }
                };
                report = options.bind(backup)(entity, report);
                entity = _closure1_slot14;
                entity = oscar - entity;
                options = null;
                oscar = options != mike;
                if(!oscar) { _fun00006_ip = 460; continue _fun00005 }
 456:
                oscar = entity >= mike;
 460:
                backup = options == zulu;
                sizing = undefined;
                if(backup) { _fun00006_ip = 492; continue _fun00005 }
 469:
                backup = zulu.current;
                zulu = options == backup;
                sizing = undefined;
                if(zulu) { _fun00006_ip = 492; continue _fun00005 }
 483:
                zulu = echo.id;
                sizing = backup[zulu];
 492:
                if(!(options == sizing)) { _fun00006_ip = 505; continue _fun00005 }
 496:
                if(!oscar) { _fun00006_ip = 502; continue _fun00005 }
 499:
                entity = mike;
 502:
                sizing = entity;
 505:
                zulu = _closure1_slot12;
                mike = _closure1_slot19;
                entity = {};
                backup = offset.offset;
                entity['style'] = backup;
                entity['onLayout'] = report;
                output = _closure1_slot12;
                backup = _closure1_slot21;
                report = {};
                report['message'] = echo;
                report['row'] = result;
                result = offset.itemRow;
                report['style'] = result;
                report = output.bind(tango)(backup, report);
                entity['children'] = report;
                report = zulu.bind(tango)(mike, entity);
                zulu = _closure1_slot13;
                mike = _closure1_slot5;
                entity = {};
                output = offset.container;
                backup = new Array(3);
                backup[0] = output;
                backup[1] = kilo;
                kilo = {};
                kilo['height'] = sizing;
                backup[2] = kilo;
                entity['style'] = backup;
                entity['onLayout'] = romeo;
                backup = _closure1_slot0;
                kilo = _closure1_slot2;
                romeo = 22;
                romeo = kilo[romeo];
                backup = backup.bind(tango)(romeo);
                romeo = backup.isFabric;
                backup = romeo.bind(backup)();
                romeo = 'none';
                if(backup) { _fun00006_ip = 661; continue _fun00005 }
 658:
                romeo = foxtrot;
 661:
                entity['pointerEvents'] = romeo;
                options = options != verify;
                if(!options) { _fun00006_ip = 676; continue _fun00005 }
 673:
                options = report;
 676:
                report = new Array(2);
                report[0] = options;
                if(!oscar) { _fun00006_ip = 717; continue _fun00005 }
 687:
                verify = _closure1_slot12;
                options = _closure1_slot6;
                golf = {};
                golf['source'] = yankee;
                offset = offset.gradient;
                golf['style'] = offset;
                oscar = verify.bind(tango)(options, golf);
 717:
                report[1] = oscar;
                entity['children'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        zulu['default'] = golf;
        zulu['DCDMessageView'] = oscar;
        zulu['DCDSystemMessageView'] = report;
        zulu['DCDGuildMultilineSystemMessageView'] = tango;
        zulu['DCDAutoModerationSystemMessageView'] = mike;
        return entity;
    }
})();