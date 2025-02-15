// app/modules/channel_list_v2/native/unread_bars/ChannelsUnreadBarsFastList.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot21;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot21;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: shouldSkipSection
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = argFoo;
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            report = 12;
            zulu = zulu[report];
            tango = undefined;
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(zulu !== mike)) { _fun00008_ip = 69; continue _fun00007 }
 38:
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[report];
            entity = zulu.bind(tango)(entity);
            entity = entity.SECTION_INDEX_GUILD_ACTIONS;
            if(!(entity !== mike)) { _fun00008_ip = 69; continue _fun00007 }
 65:
            entity = false;
            return entity;
 69:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: checkHasMentionOrUnread
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argFoo;
            mike = argCorge;
            tango = report.getChannelFromSectionRow;
            zulu = argBar;
            entity = argBaz;
            entity = tango.bind(report)(zulu, entity);
            yankee = null;
            if(!(yankee != entity)) { _fun00010_ip = 380; continue _fun00009 }
 33:
            zulu = entity.channel;
            entity = _closure1_slot16;
            entity = entity.MENTION;
            if(!(mike !== entity)) { _fun00010_ip = 267; continue _fun00009 }
 58:
            entity = _closure1_slot16;
            entity = entity.UNREAD;
            entity = mike === entity;
            if(!entity) { _fun00010_ip = 265; continue _fun00009 }
 78:
            golf = zulu.record;
            tango = _closure1_slot20;
            mike = zulu.threadIds;
            verify = undefined;
            options = tango.bind(verify)(mike);
            tango = options.bind(verify)();
            mike = tango.done;
            report = tango;
            if(mike) { _fun00010_ip = 179; continue _fun00009 }
 116:
            romeo = report.value;
            tango = _closure1_slot7;
            mike = tango.getChannel;
            mike = mike.bind(tango)(romeo);
            if(!(yankee != mike)) { _fun00010_ip = 164; continue _fun00009 }
 139:
            romeo = _closure1_slot9;
            tango = romeo.hasUnread;
            mike = mike.id;
            tango = tango.bind(romeo)(mike);
            mike = true;
            if(tango) { _fun00010_ip = 262; continue _fun00009 }
 164:
            romeo = options.bind(verify)();
            tango = romeo.done;
            report = romeo;
            if(!tango) { _fun00010_ip = 116; continue _fun00009 }
 179:
            tango = golf.isGuildVocal;
            tango = tango.bind(golf)();
            tango = !tango;
            if(!tango) { _fun00010_ip = 204; continue _fun00009 }
 195:
            report = zulu.isMuted;
            tango = !report;
 204:
            if(!tango) { _fun00010_ip = 227; continue _fun00009 }
 207:
            options = _closure1_slot9;
            oscar = options.hasUnread;
            report = golf.id;
            tango = oscar.bind(options)(report);
 227:
            if(!tango) { _fun00010_ip = 259; continue _fun00009 }
 230:
            oscar = _closure1_slot10;
            report = oscar.resolveUnreadSetting;
            oscar = report.bind(oscar)(golf);
            report = _closure1_slot12;
            report = report.ALL_MESSAGES;
            tango = oscar === report;
 259:
            mike = tango;
 262:
            entity = mike;
 265:
            _fun00010_ip = 378; continue _fun00009;
 267:
            report = _closure1_slot9;
            tango = report.getMentionCount;
            mike = zulu.id;
            mike = tango.bind(report)(mike);
            verify = 0;
            tango = mike > verify;
            mike = true;
            if(tango) { _fun00010_ip = 375; continue _fun00009 }
 298:
            tango = _closure1_slot20;
            zulu = zulu.threadIds;
            golf = undefined;
            oscar = tango.bind(golf)(zulu);
            tango = oscar.bind(golf)();
            zulu = tango.done;
            mike = false;
            if(zulu) { _fun00010_ip = 375; continue _fun00009 }
 329:
            romeo = tango.value;
            yankee = _closure1_slot9;
            zulu = yankee.getMentionCount;
            zulu = zulu.bind(yankee)(romeo);
            zulu = zulu > verify;
            mike = true;
            if(zulu) { _fun00010_ip = 375; continue _fun00009 }
 358:
            yankee = oscar.bind(golf)();
            zulu = yankee.done;
            tango = yankee;
            mike = false;
            if(!zulu) { _fun00010_ip = 329; continue _fun00009 }
 375:
            entity = mike;
 378:
            return entity;
 380:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: findFirstOrLastUnreadItem
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = argFoo;
            output = argBar;
            tango = argBaz;
            golf = output.id;
            report = _closure1_slot8;
            zulu = report.getMentionCount;
            zulu = zulu.bind(report)(golf);
            sizing = 0;
            report = zulu > sizing;
            oscar = _closure1_slot8;
            zulu = oscar.hasUnread;
            zulu = zulu.bind(oscar)(golf);
            if(report) { _fun00012_ip = 73; continue _fun00011 }
 56:
            kilo = null;
            if(!zulu) { _fun00012_ip = 71; continue _fun00011 }
 61:
            zulu = _closure1_slot16;
            kilo = zulu.UNREAD;
 71:
            _fun00012_ip = 83; continue _fun00011;
 73:
            zulu = _closure1_slot16;
            kilo = zulu.MENTION;
 83:
            backup = null;
            if(!(backup != kilo)) { _fun00012_ip = 1228; continue _fun00011 }
 92:
            zulu = mike.containerSize;
            if(!(sizing !== zulu)) { _fun00012_ip = 1222; continue _fun00011 }
 105:
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 13;
            zulu = oscar[zulu];
            foxtrot = undefined;
            report = report.bind(foxtrot)(zulu);
            zulu = report.getFontScale;
            report = zulu.bind(report)();
            zulu = _closure1_slot11;
            report = zulu.bind(foxtrot)(report);
            zulu = 2;
            golf = report / zulu;
            report = mike.scrollPosValue;
            zulu = report.get;
            report = zulu.bind(report)();
            oscar = mike.getSectionItemFromPosition;
            zulu = tango + report;
            zulu = zulu + golf;
            zulu = oscar.bind(mike)(zulu);
            oscar = zulu.item;
            golf = backup == oscar;
            zulu = undefined;
            if(golf) { _fun00012_ip = 207; continue _fun00011 }
 201:
            zulu = oscar.layoutStart;
 207:
            options = report;
            if(!(backup != zulu)) { _fun00012_ip = 217; continue _fun00011 }
 214:
            options = zulu;
 217:
            zulu = mike.containerSize;
            zulu = options + zulu;
            golf = zulu - tango;
            echo = {'section': 4294967295, 'item': 4294967295};
            romeo = -1;
            zulu = _closure1_slot20;
            mike = mike.state;
            mike = mike.items;
            oscar = zulu.bind(foxtrot)(mike);
            zulu = oscar.bind(foxtrot)();
            mike = zulu.done;
            report = 14;
            tango = zulu;
            zulu = null;
            yankee = null;
            if(mike) { _fun00012_ip = 565; continue _fun00011 }
 292:
            offset = tango.value;
            mike = offset.layoutStart;
            verify = zulu;
            if(!(!(mike < options))) { _fun00012_ip = 541; continue _fun00011 }
 313:
            result = offset.type;
            update = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[report];
            mike = update.bind(foxtrot)(mike);
            mike = mike.FastListItemTypes;
            mike = mike.ITEM;
            if(!(result !== mike)) { _fun00012_ip = 395; continue _fun00011 }
 351:
            result = offset.type;
            update = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[report];
            mike = update.bind(foxtrot)(mike);
            mike = mike.FastListItemTypes;
            mike = mike.SECTION;
            verify = zulu;
            if(!(result === mike)) { _fun00012_ip = 541; continue _fun00011 }
 395:
            mike = offset.layoutStart;
            yankee = zulu;
            if(!(!(mike > golf))) { _fun00012_ip = 565; continue _fun00011 }
 411:
            mike = echo.section;
            if(!(romeo === mike)) { _fun00012_ip = 442; continue _fun00011 }
 420:
            mike = offset.section;
            echo['section'] = mike;
            mike = offset.item;
            echo['item'] = mike;
 442:
            result = offset.type;
            update = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[report];
            mike = update.bind(foxtrot)(mike);
            mike = mike.FastListItemTypes;
            mike = mike.ITEM;
            verify = offset;
            if(!(result === mike)) { _fun00012_ip = 541; continue _fun00011 }
 483:
            result = _closure1_slot22;
            mike = offset.section;
            mike = result.bind(foxtrot)(mike);
            verify = zulu;
            if(mike) { _fun00012_ip = 541; continue _fun00011 }
 503:
            update = _closure1_slot23;
            variable39 = offset.section;
            variable38 = offset.item;
            variable41 = undefined;
            variable40 = output;
            variable37 = kilo;
            mike = variable41[update](variable40, variable39, variable38, variable37, variable36);
            verify = offset;
            if(!mike) { _fun00012_ip = 541; continue _fun00011 }
 535:
            mike = _closure1_slot17;
            return mike;
 541:
            offset = oscar.bind(foxtrot)();
            mike = offset.done;
            zulu = verify;
            tango = offset;
            yankee = zulu;
            if(!mike) { _fun00012_ip = 292; continue _fun00011 }
 565:
            mike = output.getSections;
            offset = mike.bind(output)();
            mike = offset.length;
            mike = sizing < mike;
            result = false;
            golf = 0;
            oscar = undefined;
            report = undefined;
            tango = undefined;
            zulu = undefined;
            if(!mike) { _fun00012_ip = 843; continue _fun00011 }
 602:
            mike = _closure1_slot22;
            vacuum = mike.bind(foxtrot)(golf);
            mike = golf;
            control = result;
            source = tango;
            update = zulu;
            if(vacuum) { _fun00012_ip = 819; continue _fun00011 }
 629:
            config = offset[mike];
            context = sizing < config;
            record = 0;
            vacuum = result;
            sequence = 0;
            if(!context) { _fun00012_ip = 801; continue _fun00011 }
 650:
            context = echo.section;
            context = mike > context;
            papa = echo.section;
            status = mike === papa;
            papa = echo.item;
            target = record >= papa;
            papa = record;
            vacuum = true;
            sequence = papa;
            tango = status;
            zulu = target;
            if(context) { _fun00012_ip = 801; continue _fun00011 }
 694:
            if(!status) { _fun00012_ip = 711; continue _fun00011 }
 697:
            vacuum = true;
            sequence = papa;
            tango = status;
            zulu = target;
            if(zulu) { _fun00012_ip = 801; continue _fun00011 }
 711:
            context = _closure1_slot23;
            variable41 = undefined;
            variable40 = output;
            variable39 = mike;
            variable38 = papa;
            variable37 = kilo;
            context = variable41[context](variable40, variable39, variable38, variable37, variable36);
            if(context) { _fun00012_ip = 757; continue _fun00011 }
 736:
            record = papa + 1;
            vacuum = result;
            tango = status;
            zulu = target;
            sequence = record;
            if(sequence < config) { _fun00012_ip = 650; continue _fun00011 }
 755:
            _fun00012_ip = 801; continue _fun00011;
 757:
            record = {};
            context = {};
            context['section'] = mike;
            context['row'] = papa;
            papa = _closure1_slot16;
            papa = papa.MENTION;
            papa = kilo === papa;
            context['isMention'] = papa;
            record['beforeItem'] = context;
            record['afterItem'] = backup;
            return record;
 801:
            control = vacuum;
            report = sequence;
            source = tango;
            update = zulu;
            oscar = config;
            if(control) { _fun00012_ip = 843; continue _fun00011 }
 819:
            golf = mike + 1;
            mike = offset.length;
            result = control;
            tango = source;
            zulu = update;
            if(golf < mike) { _fun00012_ip = 602; continue _fun00011 }
 843:
            mike = offset.length;
            golf = 1;
            oscar = mike - golf;
            verify = false;
            report = undefined;
            tango = undefined;
            zulu = undefined;
            mike = undefined;
            if(!(oscar >= sizing)) { _fun00012_ip = 1216; continue _fun00011 }
 872:
            result = _closure1_slot22;
            vacuum = result.bind(foxtrot)(oscar);
            control = oscar;
            source = verify;
            update = tango;
            echo = zulu;
            result = mike;
            if(vacuum) { _fun00012_ip = 1194; continue _fun00011 }
 902:
            vacuum = offset[control];
            lima = vacuum - golf;
            sierra = tango;
            target = zulu;
            papa = mike;
            vacuum = verify;
            record = sierra;
            config = target;
            sequence = papa;
            context = lima;
            if(!(context >= sizing)) { _fun00012_ip = 1176; continue _fun00011 }
 941:
            status = lima;
            if(!(backup != yankee)) { _fun00012_ip = 1062; continue _fun00011 }
 948:
            whiskey = yankee.section;
            variable36 = control < whiskey;
            whiskey = yankee.section;
            quebec = control === whiskey;
            whiskey = yankee.item;
            equality = romeo === whiskey;
            whiskey = yankee.item;
            whiskey = status <= whiskey;
            vacuum = true;
            context = status;
            record = quebec;
            config = equality;
            sequence = whiskey;
            if(variable36) { _fun00012_ip = 1176; continue _fun00011 }
 1004:
            sierra = quebec;
            target = equality;
            papa = whiskey;
            if(!quebec) { _fun00012_ip = 1062; continue _fun00011 }
 1016:
            vacuum = true;
            context = status;
            record = quebec;
            config = equality;
            sequence = whiskey;
            if(equality) { _fun00012_ip = 1176; continue _fun00011 }
 1036:
            sierra = quebec;
            target = equality;
            papa = whiskey;
            vacuum = true;
            context = status;
            record = sierra;
            config = target;
            sequence = papa;
            if(sequence) { _fun00012_ip = 1176; continue _fun00011 }
 1062:
            whiskey = _closure1_slot23;
            variable41 = undefined;
            variable40 = output;
            variable39 = control;
            variable38 = status;
            variable37 = kilo;
            whiskey = variable41[whiskey](variable40, variable39, variable38, variable37, variable36);
            variable36 = sierra;
            quebec = target;
            equality = papa;
            if(whiskey) { _fun00012_ip = 1132; continue _fun00011 }
 1096:
            lima = status - 1;
            sierra = variable36;
            target = quebec;
            papa = equality;
            vacuum = verify;
            record = sierra;
            config = target;
            sequence = papa;
            context = lima;
            if(context >= sizing) { _fun00012_ip = 941; continue _fun00011 }
 1130:
            _fun00012_ip = 1176; continue _fun00011;
 1132:
            papa = {};
            target = {};
            target['section'] = control;
            target['row'] = status;
            status = _closure1_slot16;
            status = status.MENTION;
            status = kilo === status;
            target['isMention'] = status;
            papa['afterItem'] = target;
            papa['beforeItem'] = backup;
            return papa;
 1176:
            source = vacuum;
            report = context;
            update = record;
            echo = config;
            result = sequence;
            if(source) { _fun00012_ip = 1216; continue _fun00011 }
 1194:
            oscar = control - 1;
            verify = source;
            tango = update;
            zulu = echo;
            mike = result;
            if(oscar >= sizing) { _fun00012_ip = 872; continue _fun00011 }
 1216:
            mike = _closure1_slot17;
            return mike;
 1222:
            mike = _closure1_slot17;
            return mike;
 1228:
            entity = _closure1_slot17;
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot4 = golf;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.View;
    var _closure1_slot5 = verify;
    offset = tango.StyleSheet;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.getScaledChannelRowHeight;
    var _closure1_slot11 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.UnreadSetting;
    var _closure1_slot12 = tango;
    tango = 10;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot13 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot14 = tango;
    tango = 11;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = offset.absoluteFillObject;
    tango['wrapper'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot15 = tango;
    tango = {};
    options = 'mention';
    tango['MENTION'] = options;
    options = 'unread';
    tango['UNREAD'] = options;
    var _closure1_slot16 = tango;
    tango = {'beforeItem': null, 'afterItem': null};
    var _closure1_slot17 = tango;
    tango = {};
    options = 'function ChannelsUnreadBarsFastListTsx1(){const{scrollPosValue}=this.__closure;return scrollPosValue.get();}';
    tango['code'] = options;
    var _closure1_slot18 = tango;
    tango = {};
    options = 'function ChannelsUnreadBarsFastListTsx2(position,lastPosition){const{runOnJS,debouncedUpdate}=this.__closure;if(position!==lastPosition){runOnJS(debouncedUpdate)();}}';
    tango['code'] = options;
    var _closure1_slot19 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: ChannelUnreadBarsComponent
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            mike = argFoo;
            yankee = mike.fastList;
            var _closure2_slot0 = yankee;
            kilo = mike.guild;
            zulu = mike.guildChannels;
            var _closure2_slot1 = zulu;
            verify = mike.headerHeight;
            var _closure2_slot2 = verify;
            mike = zulu.id;
            var _closure2_slot3 = mike;
            backup = _closure1_slot4;
            report = backup.useRef;
            tango = -1;
            tango = report.bind(backup)(tango);
            var _closure2_slot4 = tango;
            tango = backup.useRef;
            romeo = null;
            tango = tango.bind(backup)(romeo);
            var _closure2_slot5 = tango;
            report = backup.useState;
            tango = function() {
                report = _closure1_slot24;
                tango = _closure2_slot0;
                zulu = _closure2_slot1;
                mike = _closure2_slot2;
                entity = undefined;
                entity = report.bind(entity)(tango, zulu, mike);
                return entity;
            };
            options = report.bind(backup)(tango);
            golf = _closure1_slot3;
            tango = undefined;
            report = 2;
            golf = golf.bind(tango)(options, report);
            offset = 0;
            report = golf[offset];
            result = report.beforeItem;
            var _closure2_slot6 = result;
            foxtrot = report.afterItem;
            var _closure2_slot7 = foxtrot;
            report = 1;
            report = golf[report];
            var _closure2_slot8 = report;
            golf = backup.useMemo;
            report = new Array(3);
            report[0] = yankee;
            report[1] = zulu;
            report[2] = verify;
            zulu = function() {
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 15;
                entity = zulu[entity];
                tango = undefined;
                zulu = mike.bind(tango)(entity);
                mike = function() {
                    golf = _closure1_slot24;
                    oscar = _closure2_slot0;
                    report = _closure2_slot1;
                    tango = _closure2_slot2;
                    entity = undefined;
                    tango = golf.bind(entity)(oscar, report, tango);
                    var _closure4_slot0 = tango;
                    zulu = _closure2_slot8;
                    mike = function(argFoo) {
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            tango = argFoo;
                            zulu = _closure4_slot0;
                            entity = tango;
                            if(!(tango !== zulu)) { _fun00016_ip = 169; continue _fun00015 }
 20:
                            oscar = _closure1_slot1;
                            zulu = _closure1_slot2;
                            options = 16;
                            zulu = zulu[options];
                            golf = undefined;
                            offset = oscar.bind(golf)(zulu);
                            oscar = tango.afterItem;
                            zulu = null;
                            yankee = zulu != oscar;
                            verify = undefined;
                            if(!yankee) { _fun00016_ip = 65; continue _fun00015 }
 62:
                            verify = oscar;
 65:
                            oscar = _closure4_slot0;
                            yankee = oscar.afterItem;
                            romeo = zulu != yankee;
                            oscar = undefined;
                            if(!romeo) { _fun00016_ip = 87; continue _fun00015 }
 84:
                            oscar = yankee;
 87:
                            oscar = offset.bind(golf)(verify, oscar);
                            if(!oscar) { _fun00016_ip = 165; continue _fun00015 }
 96:
                            oscar = _closure1_slot1;
                            report = _closure1_slot2;
                            report = report[options];
                            oscar = oscar.bind(golf)(report);
                            options = tango.beforeItem;
                            verify = zulu != options;
                            report = undefined;
                            if(!verify) { _fun00016_ip = 131; continue _fun00015 }
 128:
                            report = options;
 131:
                            options = _closure4_slot0;
                            options = options.beforeItem;
                            verify = zulu != options;
                            zulu = undefined;
                            if(!verify) { _fun00016_ip = 153; continue _fun00015 }
 150:
                            zulu = options;
 153:
                            zulu = oscar.bind(golf)(report, zulu);
                            entity = tango;
                            if(zulu) { _fun00016_ip = 169; continue _fun00015 }
 165:
                            entity = _closure4_slot0;
 169:
                            return entity;
                        }
                    };
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                entity = 100;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            echo = golf.bind(backup)(zulu, report);
            var _closure2_slot9 = echo;
            report = backup.useEffect;
            zulu = new Array(2);
            zulu[0] = echo;
            zulu[1] = mike;
            mike = function() {
                report = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 17;
                tango = tango[zulu];
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                report = zulu.BatchedStoreListener;
                zulu = _closure1_slot8;
                tango = new Array(2);
                tango[0] = zulu;
                mike = _closure1_slot9;
                tango[1] = mike;
                mike = report.prototype;
                zulu = Object.create(mike, {constructor: {value: report}});
                oscar = function() {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        tango = _closure2_slot3;
                        zulu = _closure1_slot9;
                        mike = zulu.getGuildUnreadsSentinel;
                        zulu = mike.bind(zulu)(tango);
                        mike = _closure2_slot5;
                        mike = mike.current;
                        mike = tango === mike;
                        if(!mike) { _fun00018_ip = 54; continue _fun00017 }
 41:
                        report = _closure2_slot4;
                        report = report.current;
                        mike = zulu === report;
 54:
                        if(mike) { _fun00018_ip = 87; continue _fun00017 }
 57:
                        mike = _closure2_slot5;
                        mike['current'] = tango;
                        mike = _closure2_slot4;
                        mike['current'] = zulu;
                        mike = _closure2_slot9;
                        entity = undefined;
                        entity = mike.bind(entity)();
 87:
                        entity = undefined;
                        return entity;
                    }
                };
                options = zulu;
                golf = tango;
                mike = new options[report](golf, oscar, report);
                tango = mike instanceof Object ? mike : zulu;
                var _closure3_slot0 = tango;
                zulu = tango.attach;
                mike = 'channel-list-unread-bars';
                mike = zulu.bind(tango)(mike);
                entity = function() {
                    mike = _closure3_slot0;
                    entity = mike.detach;
                    entity = entity.bind(mike)();
                    entity = undefined;
                    return entity;
                };
                return entity;
            };
            mike = report.bind(backup)(mike, zulu);
            output = yankee.scrollPosValue;
            var _closure2_slot10 = output;
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            update = 18;
            mike = report[update];
            sizing = zulu.bind(tango)(mike);
            options = sizing.useAnimatedReaction;
            golf = function() { // Original name: E
                mike = _closure2_slot10;
                entity = mike.get;
                entity = entity.bind(mike)();
                return entity;
            };
            mike = {};
            mike['scrollPosValue'] = output;
            golf['__closure'] = mike;
            mike = 13585715584001.0;
            golf['__workletHash'] = mike;
            mike = _closure1_slot18;
            golf['__initData'] = mike;
            mike = function(argFoo, argBar) { // Original name: k
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    mike = argFoo;
                    entity = argBar;
                    if(!(mike !== entity)) { _fun00020_ip = 56; continue _fun00019 }
 10:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 18;
                    entity = mike[entity];
                    mike = undefined;
                    tango = zulu.bind(mike)(entity);
                    zulu = tango.runOnJS;
                    entity = _closure2_slot9;
                    entity = zulu.bind(tango)(entity);
                    entity = entity.bind(mike)();
 56:
                    entity = undefined;
                    return entity;
                }
            };
            output = {};
            update = report[update];
            update = zulu.bind(tango)(update);
            update = update.runOnJS;
            output['runOnJS'] = update;
            output['debouncedUpdate'] = echo;
            mike['__closure'] = output;
            output = 14932911601944.0;
            mike['__workletHash'] = output;
            output = _closure1_slot19;
            mike['__initData'] = output;
            mike = options.bind(sizing)(golf, mike);
            mike = _closure1_slot15;
            options = mike.bind(tango)();
            var _closure2_slot11 = options;
            golf = _closure1_slot1;
            mike = 19;
            mike = report[mike];
            mike = golf.bind(tango)(mike);
            mike = mike.bind(tango)(kilo);
            output = mike.bannerWidth;
            var _closure2_slot12 = output;
            sizing = mike.listBottom;
            var _closure2_slot13 = sizing;
            mike = 20;
            mike = report[mike];
            mike = golf.bind(tango)(mike);
            mike = mike.bind(tango)();
            var _closure2_slot14 = mike;
            kilo = backup.useMemo;
            echo = options.wrapper;
            options = new Array(4);
            options[0] = echo;
            options[1] = output;
            options[2] = sizing;
            options[3] = mike;
            mike = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    entity = _closure2_slot11;
                    mike = entity.wrapper;
                    entity = new Array(2);
                    entity[0] = mike;
                    mike = {};
                    zulu = _closure2_slot12;
                    mike['width'] = zulu;
                    report = _closure2_slot14;
                    zulu = 0;
                    if(report) { _fun00022_ip = 44; continue _fun00021 }
 40:
                    zulu = _closure2_slot13;
 44:
                    mike['bottom'] = zulu;
                    entity[1] = mike;
                    return entity;
                }
            };
            options = kilo.bind(backup)(mike, options);
            if(!(romeo != result)) { _fun00014_ip = 515; continue _fun00013 }
 502:
            mike = result.isMention;
            sizing = 'before';
            if(mike) { _fun00014_ip = 565; continue _fun00013 }
 515:
            if(!(romeo != foxtrot)) { _fun00014_ip = 532; continue _fun00013 }
 519:
            kilo = foxtrot.isMention;
            mike = 'after';
            if(kilo) { _fun00014_ip = 562; continue _fun00013 }
 532:
            output = romeo != result;
            kilo = 'before';
            if(output) { _fun00014_ip = 559; continue _fun00013 }
 543:
            echo = romeo != foxtrot;
            output = null;
            if(!echo) { _fun00014_ip = 556; continue _fun00013 }
 552:
            output = 'after';
 556:
            kilo = output;
 559:
            mike = kilo;
 562:
            sizing = mike;
 565:
            mike = 17;
            mike = report[mike];
            output = zulu.bind(tango)(mike);
            kilo = output.useStateFromStores;
            mike = _closure1_slot6;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                entity = _closure1_slot6;
                entity = entity.useReducedMotion;
                return entity;
            };
            kilo = kilo.bind(output)(zulu, mike);
            var _closure2_slot15 = kilo;
            output = backup.useCallback;
            zulu = new Array(3);
            zulu[0] = result;
            zulu[1] = kilo;
            zulu[2] = yankee;
            mike = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    mike = _closure2_slot6;
                    entity = null;
                    if(!(entity != mike)) { _fun00024_ip = 132; continue _fun00023 }
 13:
                    zulu = _closure1_slot0;
                    golf = _closure1_slot2;
                    mike = 21;
                    mike = golf[mike];
                    oscar = undefined;
                    zulu = zulu.bind(oscar)(mike);
                    mike = zulu.triggerHapticFeedback;
                    report = _closure1_slot1;
                    entity = 22;
                    entity = golf[entity];
                    entity = report.bind(oscar)(entity);
                    entity = entity.IMPACT_LIGHT;
                    entity = mike.bind(zulu)(entity);
                    zulu = _closure2_slot0;
                    mike = zulu.scrollToLocation;
                    entity = {};
                    report = _closure2_slot6;
                    oscar = report.section;
                    entity['section'] = oscar;
                    report = report.row;
                    entity['item'] = report;
                    tango = _closure2_slot15;
                    tango = !tango;
                    entity['animated'] = tango;
                    tango = 'center';
                    entity['orientation'] = tango;
                    entity = mike.bind(zulu)(entity);
 132:
                    entity = undefined;
                    return entity;
                }
            };
            output = output.bind(backup)(mike, zulu);
            zulu = backup.useCallback;
            mike = new Array(3);
            mike[0] = foxtrot;
            mike[1] = kilo;
            mike[2] = yankee;
            entity = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    mike = _closure2_slot7;
                    entity = null;
                    if(!(entity != mike)) { _fun00026_ip = 132; continue _fun00025 }
 13:
                    zulu = _closure1_slot0;
                    golf = _closure1_slot2;
                    mike = 21;
                    mike = golf[mike];
                    oscar = undefined;
                    zulu = zulu.bind(oscar)(mike);
                    mike = zulu.triggerHapticFeedback;
                    report = _closure1_slot1;
                    entity = 22;
                    entity = golf[entity];
                    entity = report.bind(oscar)(entity);
                    entity = entity.IMPACT_LIGHT;
                    entity = mike.bind(zulu)(entity);
                    zulu = _closure2_slot0;
                    mike = zulu.scrollToLocation;
                    entity = {};
                    report = _closure2_slot7;
                    oscar = report.section;
                    entity['section'] = oscar;
                    report = report.row;
                    entity['item'] = report;
                    tango = _closure2_slot15;
                    tango = !tango;
                    entity['animated'] = tango;
                    tango = 'center';
                    entity['orientation'] = tango;
                    entity = mike.bind(zulu)(entity);
 132:
                    entity = undefined;
                    return entity;
                }
            };
            backup = zulu.bind(backup)(entity, mike);
            zulu = _closure1_slot14;
            mike = _closure1_slot5;
            entity = {};
            entity['style'] = options;
            options = 'box-none';
            entity['pointerEvents'] = options;
            options = _closure1_slot13;
            kilo = 23;
            report = report[kilo];
            golf = golf.bind(tango)(report);
            report = {};
            echo = 'top';
            report['position'] = echo;
            echo = 'before';
            echo = echo === sizing;
            report['shown'] = echo;
            report['onPress'] = output;
            echo = romeo == result;
            output = undefined;
            if(echo) { _fun00014_ip = 762; continue _fun00013 }
 756:
            output = result.isMention;
 762:
            report['isMention'] = output;
            output = yankee.scrollPosValue;
            report['scrollPosition'] = output;
            report['listPaddingTop'] = offset;
            report['headerHeight'] = verify;
            golf = options.bind(tango)(golf, report);
            report = new Array(2);
            report[0] = golf;
            options = _closure1_slot13;
            golf = _closure1_slot1;
            oscar = _closure1_slot2;
            oscar = oscar[kilo];
            golf = golf.bind(tango)(oscar);
            oscar = {};
            kilo = 'bottom';
            oscar['position'] = kilo;
            kilo = 'after';
            kilo = kilo === sizing;
            oscar['shown'] = kilo;
            oscar['onPress'] = backup;
            backup = romeo == foxtrot;
            romeo = undefined;
            if(backup) { _fun00014_ip = 865; continue _fun00013 }
 859:
            romeo = foxtrot.isMention;
 865:
            oscar['isMention'] = romeo;
            yankee = yankee.scrollPosValue;
            oscar['scrollPosition'] = yankee;
            oscar['listPaddingTop'] = offset;
            oscar['headerHeight'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 24;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/channel_list_v2/native/unread_bars/ChannelsUnreadBarsFastList.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();