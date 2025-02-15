// app/modules/guilds_bar/native/GuildsBarGuild.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.StyleSheet;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.useItemDragState;
    var _closure1_slot9 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    yankee = tango.GUILD_ITEM_SIZE;
    var _closure1_slot10 = yankee;
    tango = tango.TRANSITION_PHYSICS;
    var _closure1_slot11 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot12 = tango;
    tango = 10;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.Fragment;
    var _closure1_slot13 = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsxs;
    var _closure1_slot14 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot15 = tango;
    options = verify.create;
    tango = {};
    offset = {};
    offset['width'] = yankee;
    offset['height'] = yankee;
    tango['guildIcon'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot16 = tango;
    tango = {};
    options = "function GuildsBarGuildTsx1(values){const{dragDropInProgress,sharedId,guildId,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _guildId;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===guildId&&!isDragTarget;sharedId.set((_guildId=guildId)!==null&&_guildId!==void 0?_guildId:null);return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}";
    tango['code'] = options;
    var _closure1_slot17 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: GuildsBarGuild
        _fun114490: for(var _fun114490_ip = 0; ; ) switch(_fun114490_ip) {
 0:
            entity = argFoo;
            sequence = entity.guildId;
            var _closure2_slot0 = sequence;
            oscar = entity.isDragPreview;
            tango = undefined;
            if(!(oscar === tango)) { _fun114490_ip = 28; continue _fun114490 }
 26:
            oscar = false;
 28:
            var _closure2_slot1 = tango;
            var _closure2_slot2 = tango;
            var _closure2_slot3 = tango;
            var _closure2_slot4 = tango;
            var _closure2_slot5 = tango;
            var _closure2_slot6 = tango;
            var _closure2_slot7 = tango;
            status = _closure1_slot0;
            config = _closure1_slot2;
            entity = 11;
            mike = config[entity];
            golf = status.bind(tango)(mike);
            report = golf.useGuildsBarAnimatedWrapperStyles;
            mike = true;
            golf = report.bind(golf)(mike, mike);
            mike = 12;
            report = config[mike];
            romeo = status.bind(tango)(report);
            yankee = romeo.useStateFromStoresObject;
            report = _closure1_slot7;
            offset = new Array(3);
            offset[0] = report;
            report = _closure1_slot4;
            offset[1] = report;
            report = _closure1_slot5;
            offset[2] = report;
            options = new Array(1);
            options[0] = sequence;
            report = function() {
                entity = {};
                tango = _closure1_slot7;
                zulu = tango.getGuildId;
                zulu = zulu.bind(tango)();
                tango = _closure2_slot0;
                zulu = zulu === tango;
                entity['selected'] = zulu;
                report = _closure1_slot4;
                zulu = report.isUnavailable;
                zulu = zulu.bind(report)(tango);
                entity['isUnavailable'] = zulu;
                zulu = _closure1_slot5;
                mike = zulu.hasUnread;
                mike = mike.bind(zulu)(tango);
                entity['unread'] = mike;
                mike = zulu.getMentionCount;
                mike = mike.bind(zulu)(tango);
                entity['mentionCount'] = mike;
                mike = zulu.getIsMentionLowImportance;
                mike = mike.bind(zulu)(tango);
                entity['isMentionLowImportance'] = mike;
                return entity;
            };
            options = yankee.bind(romeo)(offset, report, options);
            yankee = options.selected;
            _closure2_slot1 = yankee;
            report = options.mentionCount;
            _closure2_slot2 = report;
            sizing = options.unread;
            _closure2_slot3 = sizing;
            romeo = options.isMentionLowImportance;
            mike = config[mike];
            output = status.bind(tango)(mike);
            kilo = output.useStateFromStores;
            mike = _closure1_slot6;
            backup = new Array(1);
            backup[0] = mike;
            foxtrot = new Array(2);
            foxtrot[0] = sequence;
            foxtrot[1] = yankee;
            mike = _closure1_slot1;
            options = 15;
            options = config[options];
            sierra = mike.bind(tango)(options);
            whiskey = function() {
                _fun114492: for(var _fun114492_ip = 0; ; ) switch(_fun114492_ip) {
 0:
                    report = _closure1_slot6;
                    mike = report.getGuild;
                    entity = _closure2_slot0;
                    golf = mike.bind(report)(entity);
                    report = null;
                    mike = report == golf;
                    oscar = undefined;
                    entity = undefined;
                    if(mike) { _fun114492_ip = 57; continue _fun114492 }
 37:
                    verify = golf.getIconURL;
                    options = _closure1_slot10;
                    mike = _closure2_slot1;
                    entity = verify.bind(golf)(options, mike);
 57:
                    options = report != entity;
                    mike = undefined;
                    if(!options) { _fun114492_ip = 69; continue _fun114492 }
 66:
                    mike = entity;
 69:
                    entity = {};
                    verify = report == golf;
                    options = undefined;
                    if(verify) { _fun114492_ip = 89; continue _fun114492 }
 80:
                    verify = golf.toString;
                    options = verify.bind(golf)();
 89:
                    entity['guildName'] = options;
                    entity['icon'] = mike;
                    report = report != mike;
                    mike = undefined;
                    if(!report) { _fun114492_ip = 166; continue _fun114492 }
 107:
                    options = _closure1_slot1;
                    verify = _closure1_slot2;
                    report = 13;
                    report = verify[report];
                    report = options.bind(oscar)(report);
                    options = _closure1_slot0;
                    tango = 14;
                    tango = verify[tango];
                    tango = options.bind(oscar)(tango);
                    tango = tango.GuildIconSizes;
                    tango = tango.LARGE;
                    zulu = _closure2_slot1;
                    mike = report.bind(oscar)(golf, tango, zulu);
 166:
                    entity['asset'] = mike;
                    return entity;
                }
            };
            quebec = output;
            equality = backup;
            lima = foxtrot;
            options = quebec[kilo](equality, whiskey, lima, sierra, status);
            output = options.asset;
            offset = options.icon;
            foxtrot = options.guildName;
            _closure2_slot4 = foxtrot;
            options = 16;
            options = config[options];
            options = mike.bind(tango)(options);
            options = options.bind(tango)(sequence, report, romeo);
            backup = options.badgeTopRight;
            romeo = options.badgeBottomRight;
            source = options.cutouts;
            context = _closure1_slot3;
            result = context.useMemo;
            kilo = new Array(1);
            kilo[0] = sequence;
            options = function() {
                entity = {};
                mike = function() { // Original name: onPress
                    _fun114494: for(var _fun114494_ip = 0; ; ) switch(_fun114494_ip) {
 0:
                        zulu = _closure1_slot8;
                        mike = zulu.getGuildFolders;
                        tango = mike.bind(zulu)();
                        zulu = tango.findIndex;
                        mike = function(argFoo) {
                            entity = argFoo;
                            zulu = entity.guildIds;
                            mike = zulu.includes;
                            entity = _closure2_slot0;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        oscar = zulu.bind(tango)(mike);
                        mike = -1;
                        if(!(oscar > mike)) { _fun114494_ip = 107; continue _fun114494 }
 47:
                        tango = _closure1_slot1;
                        zulu = _closure1_slot2;
                        mike = 17;
                        zulu = zulu[mike];
                        mike = undefined;
                        report = tango.bind(mike)(zulu);
                        tango = report.track;
                        mike = _closure1_slot12;
                        zulu = mike.GUILD_CLICKED;
                        mike = {};
                        golf = _closure2_slot0;
                        mike['guild_id'] = golf;
                        mike['index'] = oscar;
                        mike = tango.bind(report)(zulu, mike);
 107:
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 18;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = _closure2_slot0;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    }
                };
                entity['onPress'] = mike;
                return entity;
            };
            options = result.bind(context)(options, kilo);
            result = context.useMemo;
            kilo = new Array(3);
            kilo[0] = foxtrot;
            kilo[1] = report;
            kilo[2] = sizing;
            report = function() {
                _fun114496: for(var _fun114496_ip = 0; ; ) switch(_fun114496_ip) {
 0:
                    mike = _closure2_slot2;
                    entity = null;
                    if(!(entity != mike)) { _fun114496_ip = 26; continue _fun114496 }
 13:
                    mike = _closure2_slot2;
                    entity = 0;
                    if(!(!(mike > entity))) { _fun114496_ip = 193; continue _fun114496 }
 26:
                    mike = _closure2_slot3;
                    entity = true;
                    if(!(entity !== mike)) { _fun114496_ip = 119; continue _fun114496 }
 36:
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    entity = 19;
                    zulu = golf[entity];
                    mike = undefined;
                    zulu = report.bind(mike)(zulu);
                    tango = zulu.intl;
                    zulu = tango.formatToPlainString;
                    entity = golf[entity];
                    entity = report.bind(mike)(entity);
                    entity = entity.t;
                    mike = entity./uzRsr;
                    entity = {};
                    report = _closure2_slot4;
                    entity['guildName'] = report;
                    report = _closure2_slot2;
                    entity['mentions'] = report;
                    entity = zulu.bind(tango)(mike, entity);
                    _fun114496_ip = 191; continue _fun114496;
 119:
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    mike = 19;
                    tango = options[mike];
                    zulu = undefined;
                    tango = golf.bind(zulu)(tango);
                    report = tango.intl;
                    tango = report.formatToPlainString;
                    mike = options[mike];
                    mike = golf.bind(zulu)(mike);
                    mike = mike.t;
                    zulu = mike.lzqe4+;
                    mike = {};
                    golf = _closure2_slot4;
                    mike['guildName'] = golf;
                    entity = tango.bind(report)(zulu, mike);
 191:
                    _fun114496_ip = 274; continue _fun114496;
 193:
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    mike = 19;
                    tango = options[mike];
                    zulu = undefined;
                    tango = golf.bind(zulu)(tango);
                    report = tango.intl;
                    tango = report.formatToPlainString;
                    mike = options[mike];
                    mike = golf.bind(zulu)(mike);
                    mike = mike.t;
                    zulu = mike./uzRsr;
                    mike = {};
                    golf = _closure2_slot4;
                    mike['guildName'] = golf;
                    oscar = _closure2_slot2;
                    mike['mentions'] = oscar;
                    entity = tango.bind(report)(zulu, mike);
 274:
                    return entity;
                }
            };
            kilo = result.bind(context)(report, kilo);
            report = 20;
            report = config[report];
            report = mike.bind(tango)(report);
            offset = report.bind(tango)(sequence, offset, output);
            report = _closure1_slot9;
            report = report.bind(tango)(sequence, oscar);
            oscar = report.isDragTarget;
            _closure2_slot5 = oscar;
            echo = report.dragState;
            output = report.overState;
            vacuum = report.itemSize;
            papa = report.dragDropInProgress;
            _closure2_slot6 = papa;
            update = context.useMemo;
            result = new Array(1);
            result[0] = sequence;
            report = function() {
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 21;
                entity = tango[entity];
                tango = undefined;
                zulu = zulu.bind(tango)(entity);
                entity = _closure2_slot0;
                report = zulu.bind(tango)(entity);
                var _closure3_slot0 = report;
                entity = {};
                tango = report.map;
                zulu = function(argFoo) {
                    mike = argFoo;
                    entity = {};
                    zulu = mike.label;
                    entity['name'] = zulu;
                    mike = mike.label;
                    entity['label'] = mike;
                    return entity;
                };
                zulu = tango.bind(report)(zulu);
                entity['accessibilityActions'] = zulu;
                mike = function(argFoo) { // Original name: onAccessibilityAction
                    _fun114499: for(var _fun114499_ip = 0; ; ) switch(_fun114499_ip) {
 0:
                        mike = argFoo;
                        var _closure4_slot0 = mike;
                        zulu = _closure3_slot0;
                        mike = zulu.find;
                        entity = function(argFoo) {
                            entity = argFoo;
                            mike = entity.label;
                            entity = _closure4_slot0;
                            entity = entity.nativeEvent;
                            entity = entity.actionName;
                            entity = mike === entity;
                            return entity;
                        };
                        mike = mike.bind(zulu)(entity);
                        tango = null;
                        entity = tango == mike;
                        if(entity) { _fun114499_ip = 51; continue _fun114499 }
 42:
                        zulu = mike.action;
                        entity = tango == zulu;
 51:
                        if(entity) { _fun114499_ip = 63; continue _fun114499 }
 54:
                        entity = mike.action;
                        entity = entity.bind(mike)();
 63:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['onAccessibilityAction'] = mike;
                return entity;
            };
            report = update.bind(context)(report, result);
            control = report.accessibilityActions;
            update = report.onAccessibilityAction;
            report = 22;
            report = config[report];
            result = status.bind(tango)(report);
            report = result.useSharedValue;
            result = report.bind(result)(sequence);
            _closure2_slot7 = result;
            record = context.useCallback;
            report = function(argFoo) { // Original name: y
                _fun114501: for(var _fun114501_ip = 0; ; ) switch(_fun114501_ip) {
 0:
                    zulu = argFoo;
                    mike = _closure2_slot6;
                    entity = mike.get;
                    tango = entity.bind(mike)();
                    if(!tango) { _fun114501_ip = 43; continue _fun114501 }
 22:
                    mike = _closure2_slot7;
                    entity = mike.get;
                    mike = entity.bind(mike)();
                    entity = _closure2_slot0;
                    tango = mike === entity;
 43:
                    if(!tango) { _fun114501_ip = 53; continue _fun114501 }
 46:
                    entity = _closure2_slot5;
                    tango = !entity;
 53:
                    report = _closure2_slot7;
                    mike = report.set;
                    golf = _closure2_slot0;
                    entity = null;
                    golf = entity != golf;
                    if(!golf) { _fun114501_ip = 79; continue _fun114501 }
 75:
                    entity = _closure2_slot0;
 79:
                    entity = mike.bind(report)(entity);
                    entity = {};
                    mike = {};
                    if(tango) { _fun114501_ip = 99; continue _fun114501 }
 91:
                    report = zulu.targetOriginY;
                    _fun114501_ip = 152; continue _fun114501;
 99:
                    verify = _closure1_slot0;
                    options = _closure1_slot2;
                    golf = 23;
                    options = options[golf];
                    golf = undefined;
                    offset = verify.bind(golf)(options);
                    verify = offset.withSpring;
                    options = zulu.targetOriginY;
                    golf = _closure1_slot11;
                    oscar = 'animate-always';
                    report = verify.bind(offset)(options, golf, oscar);
 152:
                    mike['originY'] = report;
                    if(tango) { _fun114501_ip = 168; continue _fun114501 }
 160:
                    tango = zulu.targetHeight;
                    _fun114501_ip = 221; continue _fun114501;
 168:
                    options = _closure1_slot0;
                    golf = _closure1_slot2;
                    oscar = 23;
                    golf = golf[oscar];
                    oscar = undefined;
                    verify = options.bind(oscar)(golf);
                    options = verify.withSpring;
                    golf = zulu.targetHeight;
                    oscar = _closure1_slot11;
                    report = 'animate-always';
                    tango = options.bind(verify)(golf, oscar, report);
 221:
                    mike['height'] = tango;
                    entity['animations'] = mike;
                    mike = {};
                    tango = zulu.currentOriginY;
                    mike['originY'] = tango;
                    zulu = zulu.currentHeight;
                    mike['height'] = zulu;
                    entity['initialValues'] = mike;
                    return entity;
                }
            };
            zulu = {};
            zulu['dragDropInProgress'] = papa;
            zulu['sharedId'] = result;
            zulu['guildId'] = sequence;
            zulu['isDragTarget'] = oscar;
            target = 23;
            target = config[target];
            target = status.bind(tango)(target);
            target = target.withSpring;
            zulu['withSpring'] = target;
            target = _closure1_slot11;
            zulu['TRANSITION_PHYSICS'] = target;
            report['__closure'] = zulu;
            zulu = 14096669603718.0;
            report['__workletHash'] = zulu;
            zulu = _closure1_slot17;
            report['__initData'] = zulu;
            zulu = new Array(4);
            zulu[0] = sequence;
            zulu[1] = result;
            zulu[2] = oscar;
            zulu[3] = papa;
            report = record.bind(context)(report, zulu);
            zulu = _closure1_slot15;
            entity = config[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            entity['id'] = sequence;
            entity['draggedItemSize'] = vacuum;
            entity['accessibilityActions'] = control;
            entity['onAccessibilityAction'] = update;
            update = undefined;
            if(oscar) { _fun114490_ip = 687; continue _fun114490 }
 684:
            update = source;
 687:
            entity['cutouts'] = update;
            entity['selected'] = yankee;
            entity['isDragTarget'] = oscar;
            entity['dragState'] = echo;
            entity['sharedId'] = result;
            result = !yankee;
            entity['circle'] = result;
            entity['overState'] = output;
            entity['unread'] = sizing;
            entity['label'] = kilo;
            entity['config'] = options;
            entity['styles'] = golf;
            entity['isDragPreview'] = oscar;
            entity['layout'] = report;
            golf = _closure1_slot14;
            oscar = _closure1_slot13;
            report = {};
            options = new Array(2);
            options[0] = backup;
            options[1] = romeo;
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['externalChildren'] = report;
            report = null;
            if(!(report == offset)) { _fun114490_ip = 873; continue _fun114490 }
 796:
            golf = _closure1_slot15;
            oscar = _closure1_slot1;
            romeo = _closure1_slot2;
            options = 14;
            report = romeo[options];
            oscar = oscar.bind(tango)(report);
            report = {};
            report['value'] = foxtrot;
            report['selected'] = yankee;
            report['animate'] = yankee;
            yankee = _closure1_slot0;
            options = romeo[options];
            options = yankee.bind(tango)(options);
            options = options.GuildIconSizes;
            options = options.LARGE;
            report['size'] = options;
            report = golf.bind(tango)(oscar, report);
            _fun114490_ip = 923; continue _fun114490;
 873:
            options = _closure1_slot15;
            golf = _closure1_slot1;
            yankee = _closure1_slot2;
            oscar = 24;
            oscar = yankee[oscar];
            golf = golf.bind(tango)(oscar);
            oscar = {};
            oscar['source'] = offset;
            verify = _closure1_slot16;
            verify = verify.guildIcon;
            oscar['style'] = verify;
            report = options.bind(tango)(golf, oscar);
 923:
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 25;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guilds_bar/native/GuildsBarGuild.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();