// app/modules/guilds_bar/native/GuildsBarUnreadBars.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun114625: for(var _fun114625_ip = 0; ; ) switch(_fun114625_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun114625_ip = 46; continue _fun114625 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun114625_ip = 55; continue _fun114625 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun114625_ip = 345; continue _fun114625 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun114625_ip = 323; continue _fun114625 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun114625_ip = 283; continue _fun114625 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun114625_ip = 270; continue _fun114625 }
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
            if(!golf) { _fun114625_ip = 163; continue _fun114625 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun114625_ip = 179; continue _fun114625 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun114625_ip = 249; continue _fun114625 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun114625_ip = 249; continue _fun114625 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun114625_ip = 234; continue _fun114625 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun114625_ip = 247; continue _fun114625 }
 234:
            verify = _closure1_slot19;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun114625_ip = 265; continue _fun114625;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun114625_ip = 283; continue _fun114625;
 270:
            golf = _closure1_slot19;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun114625_ip = 323; continue _fun114625 }
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
            if(!tango) { _fun114625_ip = 330; continue _fun114625 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun114626: for(var _fun114626_ip = 0; ; ) switch(_fun114626_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun114626_ip = 56; continue _fun114626 }
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
                    _fun114626_ip = 67; continue _fun114626;
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
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun114627: for(var _fun114627_ip = 0; ; ) switch(_fun114627_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun114627_ip = 23; continue _fun114627 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun114627_ip = 33; continue _fun114627 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun114627_ip = 70; continue _fun114627 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun114627_ip = 55; continue _fun114627 }
 70:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: checkNodeAndIterate
        _fun114628: for(var _fun114628_ip = 0; ; ) switch(_fun114628_ip) {
 0:
            entity = argFoo;
            verify = entity.node;
            oscar = entity.section;
            zulu = entity.item;
            kilo = entity.direction;
            backup = entity.selectedGuildId;
            tango = null;
            if(!(tango != verify)) { _fun114628_ip = 248; continue _fun114628 }
 40:
            report = verify.type;
            mike = _closure1_slot9;
            mike = mike.GUILD;
            if(!(report === mike)) { _fun114628_ip = 112; continue _fun114628 }
 62:
            mike = verify.id;
            if(!(mike !== backup)) { _fun114628_ip = 112; continue _fun114628 }
 71:
            golf = _closure1_slot6;
            report = golf.getMentionCount;
            mike = verify.id;
            report = report.bind(golf)(mike);
            mike = 0;
            golf = report > mike;
            report = undefined;
            if(!golf) { _fun114628_ip = 105; continue _fun114628 }
 102:
            report = verify;
 105:
            if(!(tango == report)) { _fun114628_ip = 302; continue _fun114628 }
 112:
            foxtrot = 0;
            options = 1;
            romeo = 0;
            if(!(options !== kilo)) { _fun114628_ip = 137; continue _fun114628 }
 123:
            golf = verify.children;
            golf = golf.length;
            romeo = golf - options;
 137:
            if(!(romeo >= foxtrot)) { _fun114628_ip = 248; continue _fun114628 }
 141:
            golf = verify.children;
            golf = golf.length;
            yankee = undefined;
            if(!(romeo < golf)) { _fun114628_ip = 248; continue _fun114628 }
 157:
            options = romeo;
            if(!(tango != oscar)) { _fun114628_ip = 167; continue _fun114628 }
 164:
            options = oscar;
 167:
            offset = _closure1_slot20;
            golf = {};
            sizing = verify.children;
            sizing = sizing[romeo];
            golf['node'] = sizing;
            golf['section'] = options;
            output = tango != oscar;
            sizing = undefined;
            if(!output) { _fun114628_ip = 203; continue _fun114628 }
 200:
            sizing = romeo;
 203:
            golf['item'] = sizing;
            golf['direction'] = kilo;
            golf['selectedGuildId'] = backup;
            offset = offset.bind(yankee)(golf);
            if(!(tango == offset)) { _fun114628_ip = 252; continue _fun114628 }
 226:
            romeo = romeo + kilo;
            if(!(romeo >= foxtrot)) { _fun114628_ip = 248; continue _fun114628 }
 234:
            golf = verify.children;
            golf = golf.length;
            if(romeo < golf) { _fun114628_ip = 157; continue _fun114628 }
 248:
            golf = undefined;
            return golf;
 252:
            yankee = verify.type;
            entity = _closure1_slot9;
            golf = entity.FOLDER;
            entity = offset;
            if(!(yankee === golf)) { _fun114628_ip = 300; continue _fun114628 }
 274:
            golf = verify.expanded;
            entity = offset;
            if(golf) { _fun114628_ip = 300; continue _fun114628 }
 286:
            golf = {};
            golf['node'] = verify;
            golf['section'] = options;
            entity = golf;
 300:
            return entity;
 302:
            entity = {};
            entity['node'] = report;
            golf = tango != oscar;
            report = 0;
            if(!golf) { _fun114628_ip = 321; continue _fun114628 }
 318:
            report = oscar;
 321:
            entity['section'] = report;
            tango = tango != zulu;
            mike = 0;
            if(!tango) { _fun114628_ip = 337; continue _fun114628 }
 334:
            mike = zulu;
 337:
            entity['item'] = mike;
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: findFirstOrLastMentionedItem
        _fun114629: for(var _fun114629_ip = 0; ; ) switch(_fun114629_ip) {
 0:
            report = argFoo;
            golf = argBar;
            verify = argBaz;
            zulu = _closure1_slot8;
            mike = zulu.getGuildsTree;
            sequence = mike.bind(zulu)();
            yankee = sequence.root;
            zulu = report.getSectionItemFromPosition;
            tango = report.scrollPosValue;
            mike = tango.get;
            tango = mike.bind(tango)();
            mike = _closure1_slot12;
            mike = tango + mike;
            mike = zulu.bind(report)(mike);
            tango = mike.item;
            mike = null;
            oscar = mike == tango;
            zulu = undefined;
            vacuum = undefined;
            if(oscar) { _fun114629_ip = 90; continue _fun114629 }
 84:
            vacuum = tango.layoutStart;
 90:
            if(!(mike == vacuum)) { _fun114629_ip = 109; continue _fun114629 }
 94:
            oscar = report.scrollPosValue;
            tango = oscar.get;
            vacuum = tango.bind(oscar)();
 109:
            tango = report.containerSize;
            oscar = vacuum + tango;
            options = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 8;
            tango = offset[tango];
            tango = options.bind(zulu)(tango);
            options = tango.TabsVisibleStore;
            tango = options.getState;
            tango = tango.bind(options)();
            tango = tango.tabsHeight;
            control = oscar - tango;
            tango = {'section': 4294967295, 'item': 4294967295};
            offset = -1;
            oscar = _closure1_slot18;
            report = report.state;
            report = report.items;
            source = oscar.bind(zulu)(report);
            foxtrot = source.bind(zulu)();
            romeo = foxtrot.done;
            result = false;
            report = true;
            options = 0;
            update = 9;
            echo = foxtrot;
            output = undefined;
            sizing = undefined;
            kilo = undefined;
            backup = undefined;
            foxtrot = undefined;
            oscar = false;
            if(romeo) { _fun114629_ip = 1000; continue _fun114629 }
 240:
            romeo = echo.value;
            sierra = romeo.layoutStart;
            config = result;
            status = output;
            target = sizing;
            papa = kilo;
            context = backup;
            record = foxtrot;
            if(!(!(sierra < vacuum))) { _fun114629_ip = 961; continue _fun114629 }
 276:
            lima = romeo.type;
            whiskey = _closure1_slot0;
            sierra = _closure1_slot2;
            sierra = sierra[update];
            sierra = whiskey.bind(zulu)(sierra);
            sierra = sierra.FastListItemTypes;
            sierra = sierra.ITEM;
            if(!(lima !== sierra)) { _fun114629_ip = 373; continue _fun114629 }
 314:
            lima = romeo.type;
            whiskey = _closure1_slot0;
            sierra = _closure1_slot2;
            sierra = sierra[update];
            sierra = whiskey.bind(zulu)(sierra);
            sierra = sierra.FastListItemTypes;
            sierra = sierra.SECTION;
            config = result;
            status = output;
            target = sizing;
            papa = kilo;
            context = backup;
            record = foxtrot;
            if(!(lima === sierra)) { _fun114629_ip = 961; continue _fun114629 }
 373:
            sierra = romeo.layoutStart;
            oscar = result;
            if(!(!(sierra > control))) { _fun114629_ip = 1000; continue _fun114629 }
 389:
            lima = romeo.section;
            sierra = _closure1_slot10;
            sierra = sierra.GUILDS;
            if(!(!(lima < sierra))) { _fun114629_ip = 938; continue _fun114629 }
 411:
            sierra = tango.section;
            if(!(offset === sierra)) { _fun114629_ip = 442; continue _fun114629 }
 420:
            sierra = romeo.section;
            tango['section'] = sierra;
            sierra = romeo.item;
            tango['item'] = sierra;
 442:
            lima = romeo.type;
            whiskey = _closure1_slot0;
            sierra = _closure1_slot2;
            sierra = sierra[update];
            sierra = whiskey.bind(zulu)(sierra);
            sierra = sierra.FastListItemTypes;
            sierra = sierra.SECTION;
            if(!(lima === sierra)) { _fun114629_ip = 754; continue _fun114629 }
 483:
            lima = sequence.getNode;
            sierra = romeo.recyclerKey;
            equality = lima.bind(sequence)(sierra);
            config = result;
            status = output;
            target = equality;
            papa = kilo;
            context = backup;
            record = foxtrot;
            if(!(mike != equality)) { _fun114629_ip = 961; continue _fun114629 }
 525:
            lima = equality.type;
            sierra = _closure1_slot9;
            sierra = sierra.FOLDER;
            config = result;
            status = output;
            target = equality;
            papa = kilo;
            context = backup;
            record = foxtrot;
            if(!(lima === sierra)) { _fun114629_ip = 961; continue _fun114629 }
 565:
            sierra = equality.expanded;
            config = result;
            status = output;
            target = equality;
            papa = kilo;
            context = backup;
            record = foxtrot;
            if(sierra) { _fun114629_ip = 961; continue _fun114629 }
 595:
            lima = _closure1_slot18;
            sierra = equality.children;
            whiskey = lima.bind(zulu)(sierra);
            quebec = whiskey.bind(zulu)();
            sierra = quebec.done;
            lima = quebec;
            config = result;
            status = output;
            target = equality;
            papa = lima;
            context = whiskey;
            record = foxtrot;
            if(sierra) { _fun114629_ip = 961; continue _fun114629 }
 645:
            quebec = lima.value;
            variable36 = quebec.type;
            sierra = _closure1_slot9;
            sierra = sierra.GUILD;
            if(!(variable36 === sierra)) { _fun114629_ip = 716; continue _fun114629 }
 669:
            variable37 = _closure1_slot6;
            variable36 = variable37.getMentionCount;
            sierra = quebec.id;
            sierra = variable36.bind(variable37)(sierra);
            sierra = sierra > options;
            config = true;
            status = output;
            target = equality;
            papa = lima;
            context = whiskey;
            record = quebec;
            if(sierra) { _fun114629_ip = 961; continue _fun114629 }
 716:
            variable36 = whiskey.bind(zulu)();
            sierra = variable36.done;
            lima = variable36;
            config = result;
            status = output;
            target = equality;
            papa = lima;
            context = whiskey;
            record = quebec;
            if(sierra) { _fun114629_ip = 961; continue _fun114629 }
 752:
            _fun114629_ip = 645; continue _fun114629;
 754:
            lima = romeo.type;
            whiskey = _closure1_slot0;
            sierra = _closure1_slot2;
            sierra = sierra[update];
            sierra = whiskey.bind(zulu)(sierra);
            sierra = sierra.FastListItemTypes;
            sierra = sierra.ITEM;
            config = result;
            status = output;
            target = sizing;
            papa = kilo;
            context = backup;
            record = foxtrot;
            if(!(lima === sierra)) { _fun114629_ip = 961; continue _fun114629 }
 813:
            sierra = sequence.getNode;
            romeo = romeo.recyclerKey;
            sierra = sierra.bind(sequence)(romeo);
            config = result;
            status = sierra;
            target = sizing;
            papa = kilo;
            context = backup;
            record = foxtrot;
            if(!(mike != sierra)) { _fun114629_ip = 961; continue _fun114629 }
 852:
            lima = sierra.type;
            romeo = _closure1_slot9;
            romeo = romeo.GUILD;
            config = result;
            status = sierra;
            target = sizing;
            papa = kilo;
            context = backup;
            record = foxtrot;
            if(!(lima === romeo)) { _fun114629_ip = 961; continue _fun114629 }
 889:
            whiskey = _closure1_slot6;
            lima = whiskey.getMentionCount;
            romeo = sierra.id;
            romeo = lima.bind(whiskey)(romeo);
            romeo = romeo > options;
            config = result;
            status = sierra;
            target = sizing;
            papa = kilo;
            context = backup;
            record = foxtrot;
            oscar = true;
            if(romeo) { _fun114629_ip = 1000; continue _fun114629 }
 936:
            _fun114629_ip = 961; continue _fun114629;
 938:
            config = result;
            status = output;
            target = sizing;
            papa = kilo;
            context = backup;
            record = foxtrot;
            oscar = true;
            if(golf) { _fun114629_ip = 1000; continue _fun114629 }
 961:
            sierra = source.bind(zulu)();
            romeo = sierra.done;
            result = config;
            output = status;
            sizing = target;
            kilo = papa;
            backup = context;
            foxtrot = record;
            echo = sierra;
            oscar = result;
            if(!romeo) { _fun114629_ip = 240; continue _fun114629 }
 1000:
            if(oscar) { _fun114629_ip = 1268; continue _fun114629 }
 1006:
            oscar = undefined;
            if(golf) { _fun114629_ip = 1040; continue _fun114629 }
 1011:
            foxtrot = _closure1_slot20;
            romeo = {};
            romeo['node'] = yankee;
            backup = 1;
            romeo['direction'] = backup;
            romeo['selectedGuildId'] = verify;
            oscar = foxtrot.bind(zulu)(romeo);
 1040:
            if(!(mike == oscar)) { _fun114629_ip = 1047; continue _fun114629 }
 1044:
            if(golf) { _fun114629_ip = 1061; continue _fun114629 }
 1047:
            if(!(mike == oscar)) { _fun114629_ip = 1061; continue _fun114629 }
 1051:
            if(!(mike == oscar)) { _fun114629_ip = 1134; continue _fun114629 }
 1055:
            golf = _closure1_slot14;
            return golf;
 1061:
            if(!(mike != oscar)) { _fun114629_ip = 1262; continue _fun114629 }
 1068:
            romeo = oscar.section;
            golf = _closure1_slot10;
            golf = golf.GUILDS;
            golf = romeo + golf;
            romeo = tango.section;
            if(!(!(golf < romeo))) { _fun114629_ip = 1227; continue _fun114629 }
 1099:
            romeo = tango.section;
            if(!(golf === romeo)) { _fun114629_ip = 1134; continue _fun114629 }
 1108:
            romeo = oscar.item;
            foxtrot = mike != romeo;
            options = 0;
            if(!foxtrot) { _fun114629_ip = 1125; continue _fun114629 }
 1122:
            options = romeo;
 1125:
            tango = tango.item;
            if(!(!(options < tango))) { _fun114629_ip = 1227; continue _fun114629 }
 1134:
            options = _closure1_slot20;
            tango = {};
            tango['node'] = yankee;
            tango['direction'] = offset;
            tango['selectedGuildId'] = verify;
            verify = options.bind(zulu)(tango);
            if(!(mike == verify)) { _fun114629_ip = 1170; continue _fun114629 }
 1164:
            mike = _closure1_slot14;
            _fun114629_ip = 1225; continue _fun114629;
 1170:
            tango = {};
            tango['beforeItem'] = zulu;
            options = {};
            yankee = verify.section;
            offset = _closure1_slot10;
            offset = offset.GUILDS;
            offset = yankee + offset;
            options['section'] = offset;
            verify = verify.item;
            options['row'] = verify;
            options['mention'] = report;
            tango['afterItem'] = options;
            mike = tango;
 1225:
            return mike;
 1227:
            mike = {};
            tango = {};
            tango['section'] = golf;
            oscar = oscar.item;
            tango['row'] = oscar;
            tango['mention'] = report;
            mike['beforeItem'] = tango;
            mike['afterItem'] = zulu;
            return mike;
 1262:
            mike = _closure1_slot15;
            return mike;
 1268:
            entity = _closure1_slot14;
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = yankee.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot4 = golf;
    options = 2;
    tango = oscar[options];
    tango = report.bind(entity)(tango);
    verify = tango.View;
    var _closure1_slot5 = verify;
    verify = tango.StyleSheet;
    tango = 3;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    offset = oscar[tango];
    offset = yankee.bind(entity)(offset);
    var _closure1_slot8 = offset;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildsNodeType;
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    offset = tango.FastListRenderSections;
    var _closure1_slot10 = offset;
    yankee = tango.GUILD_LIST_WIDTH;
    offset = tango.GUILD_ITEM_SIZE;
    tango = tango.GUILD_ITEM_MARGIN;
    romeo = 7;
    romeo = oscar[romeo];
    romeo = report.bind(entity)(romeo);
    romeo = romeo.jsx;
    var _closure1_slot11 = romeo;
    tango = options * tango;
    tango = offset + tango;
    tango = tango / options;
    var _closure1_slot12 = tango;
    options = verify.create;
    tango = {};
    offset = {'position': 'absolute', 'top': 0, 'left': 0, 'bottom': 0};
    offset['width'] = yankee;
    tango['wrapper'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot13 = tango;
    tango = {};
    tango['beforeItem'] = entity;
    tango['afterItem'] = entity;
    var _closure1_slot14 = tango;
    tango = {};
    options = {'section': 0, 'row': 0, 'mention': true};
    tango['beforeItem'] = options;
    tango['afterItem'] = entity;
    var _closure1_slot15 = tango;
    tango = {};
    options = 'function GuildsBarUnreadBarsTsx1(){const{scrollPosValue}=this.__closure;return scrollPosValue.get();}';
    tango['code'] = options;
    var _closure1_slot16 = tango;
    tango = {};
    options = 'function GuildsBarUnreadBarsTsx2(position,lastPosition){const{runOnJS,debouncedUpdate}=this.__closure;if(position!==lastPosition){runOnJS(debouncedUpdate)();}}';
    tango['code'] = options;
    var _closure1_slot17 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: GuildsBarUnreadBars
        mike = argFoo;
        foxtrot = mike.fastList;
        var _closure2_slot0 = foxtrot;
        golf = _closure1_slot4;
        zulu = golf.useState;
        mike = function() {
            _fun114631: for(var _fun114631_ip = 0; ; ) switch(_fun114631_ip) {
 0:
                report = _closure1_slot21;
                tango = _closure2_slot0;
                zulu = _closure1_slot6;
                mike = zulu.getPrivateChannelMentionCount;
                zulu = mike.bind(zulu)();
                mike = 0;
                zulu = zulu > mike;
                mike = _closure1_slot7;
                entity = mike.getGuildId;
                entity = entity.bind(mike)();
                mike = null;
                oscar = mike != entity;
                if(!oscar) { _fun114631_ip = 60; continue _fun114631 }
 57:
                mike = entity;
 60:
                entity = undefined;
                entity = report.bind(entity)(tango, zulu, mike);
                return entity;
            }
        };
        oscar = zulu.bind(golf)(mike);
        zulu = _closure1_slot3;
        tango = undefined;
        mike = 2;
        zulu = zulu.bind(tango)(oscar, mike);
        mike = 0;
        mike = zulu[mike];
        verify = mike.beforeItem;
        options = mike.afterItem;
        mike = 1;
        mike = zulu[mike];
        var _closure2_slot1 = mike;
        oscar = golf.useMemo;
        zulu = new Array(1);
        zulu[0] = foxtrot;
        mike = function() {
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 12;
            entity = zulu[entity];
            tango = undefined;
            zulu = mike.bind(tango)(entity);
            mike = function() {
                _fun114633: for(var _fun114633_ip = 0; ; ) switch(_fun114633_ip) {
 0:
                    golf = _closure1_slot21;
                    oscar = _closure2_slot0;
                    report = _closure1_slot6;
                    tango = report.getPrivateChannelMentionCount;
                    report = tango.bind(report)();
                    tango = 0;
                    report = report > tango;
                    tango = _closure1_slot7;
                    entity = tango.getGuildId;
                    entity = entity.bind(tango)();
                    tango = null;
                    options = tango != entity;
                    if(!options) { _fun114633_ip = 62; continue _fun114633 }
 59:
                    tango = entity;
 62:
                    entity = undefined;
                    tango = golf.bind(entity)(oscar, report, tango);
                    var _closure4_slot0 = tango;
                    zulu = _closure2_slot1;
                    mike = function(argFoo) {
                        _fun114634: for(var _fun114634_ip = 0; ; ) switch(_fun114634_ip) {
 0:
                            tango = argFoo;
                            zulu = _closure4_slot0;
                            entity = tango;
                            if(!(tango !== zulu)) { _fun114634_ip = 116; continue _fun114634 }
 17:
                            options = _closure1_slot1;
                            report = _closure1_slot2;
                            oscar = 13;
                            report = report[oscar];
                            golf = undefined;
                            verify = options.bind(golf)(report);
                            options = tango.afterItem;
                            report = _closure4_slot0;
                            report = report.afterItem;
                            report = verify.bind(golf)(options, report);
                            if(!report) { _fun114634_ip = 112; continue _fun114634 }
 67:
                            report = _closure1_slot1;
                            zulu = _closure1_slot2;
                            zulu = zulu[oscar];
                            oscar = report.bind(golf)(zulu);
                            report = tango.beforeItem;
                            zulu = _closure4_slot0;
                            zulu = zulu.beforeItem;
                            zulu = oscar.bind(golf)(report, zulu);
                            entity = tango;
                            if(zulu) { _fun114634_ip = 116; continue _fun114634 }
 112:
                            entity = _closure4_slot0;
 116:
                            return entity;
                        }
                    };
                    mike = zulu.bind(entity)(mike);
                    return entity;
                }
            };
            entity = 100;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        backup = oscar.bind(golf)(mike, zulu);
        var _closure2_slot2 = backup;
        oscar = golf.useEffect;
        zulu = new Array(1);
        zulu[0] = backup;
        mike = function() {
            report = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 14;
            tango = tango[zulu];
            zulu = undefined;
            zulu = report.bind(zulu)(tango);
            report = zulu.BatchedStoreListener;
            zulu = _closure1_slot6;
            tango = new Array(3);
            tango[0] = zulu;
            zulu = _closure1_slot7;
            tango[1] = zulu;
            mike = _closure1_slot8;
            tango[2] = mike;
            oscar = _closure2_slot2;
            zulu = report.prototype;
            zulu = Object.create(zulu, {constructor: {value: report}});
            options = zulu;
            golf = tango;
            mike = new options[report](golf, oscar, report);
            tango = mike instanceof Object ? mike : zulu;
            var _closure3_slot0 = tango;
            zulu = tango.attach;
            mike = 'guild-mention-bars';
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
        mike = oscar.bind(golf)(mike, zulu);
        romeo = foxtrot.scrollPosValue;
        var _closure2_slot3 = romeo;
        sizing = _closure1_slot0;
        offset = _closure1_slot2;
        kilo = 15;
        mike = offset[kilo];
        yankee = sizing.bind(tango)(mike);
        oscar = yankee.useAnimatedReaction;
        zulu = function() { // Original name: S
            mike = _closure2_slot3;
            entity = mike.get;
            entity = entity.bind(mike)();
            return entity;
        };
        mike = {};
        mike['scrollPosValue'] = romeo;
        zulu['__closure'] = mike;
        mike = 16367582542434.0;
        zulu['__workletHash'] = mike;
        mike = _closure1_slot16;
        zulu['__initData'] = mike;
        mike = function(argFoo, argBar) { // Original name: b
            _fun114638: for(var _fun114638_ip = 0; ; ) switch(_fun114638_ip) {
 0:
                mike = argFoo;
                entity = argBar;
                if(!(mike !== entity)) { _fun114638_ip = 56; continue _fun114638 }
 10:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 15;
                entity = mike[entity];
                mike = undefined;
                tango = zulu.bind(mike)(entity);
                zulu = tango.runOnJS;
                entity = _closure2_slot2;
                entity = zulu.bind(tango)(entity);
                entity = entity.bind(mike)();
 56:
                entity = undefined;
                return entity;
            }
        };
        romeo = {};
        kilo = offset[kilo];
        kilo = sizing.bind(tango)(kilo);
        kilo = kilo.runOnJS;
        romeo['runOnJS'] = kilo;
        romeo['debouncedUpdate'] = backup;
        mike['__closure'] = romeo;
        romeo = 13727289405147.0;
        mike['__workletHash'] = romeo;
        romeo = _closure1_slot17;
        mike['__initData'] = romeo;
        mike = oscar.bind(yankee)(zulu, mike);
        mike = function() { // Original name: useUnreadBarWrapperStyles
            tango = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 10;
            zulu = golf[zulu];
            report = undefined;
            zulu = tango.bind(report)(zulu);
            zulu = zulu.bind(report)();
            oscar = zulu.top;
            var _closure3_slot0 = oscar;
            tango = _closure1_slot0;
            zulu = 11;
            zulu = golf[zulu];
            tango = tango.bind(report)(zulu);
            zulu = tango.useMobileQuestDockHeight;
            report = zulu.bind(tango)();
            var _closure3_slot1 = report;
            tango = _closure1_slot4;
            zulu = tango.useMemo;
            mike = new Array(2);
            mike[0] = oscar;
            mike[1] = report;
            entity = function() {
                entity = {};
                mike = _closure1_slot13;
                mike = mike.wrapper;
                tango = new Array(2);
                tango[0] = mike;
                report = {};
                mike = _closure3_slot0;
                report['top'] = mike;
                zulu = _closure3_slot1;
                report['bottom'] = zulu;
                tango[1] = report;
                entity['style'] = tango;
                entity['paddingStart'] = mike;
                mike = 4;
                mike = zulu + mike;
                entity['paddingEnd'] = mike;
                return entity;
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        mike = mike.bind(tango)();
        oscar = mike.style;
        romeo = mike.paddingStart;
        var _closure2_slot4 = romeo;
        yankee = mike.paddingEnd;
        var _closure2_slot5 = yankee;
        zulu = golf.useCallback;
        mike = new Array(3);
        mike[0] = foxtrot;
        mike[1] = romeo;
        mike[2] = yankee;
        entity = function(argFoo) {
            zulu = _closure2_slot0;
            mike = zulu.scrollToLocation;
            entity = {};
            golf = argFoo;
            options = entity;
            report = copyDataProperties(options, golf);
            oscar = _closure2_slot4;
            report = 'paddingStart';
            entity[report] = oscar;
            report = _closure2_slot5;
            tango = 'paddingEnd';
            entity[tango] = report;
            report = 'visible';
            tango = 'orientation';
            entity[tango] = report;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        golf = zulu.bind(golf)(entity, mike);
        zulu = _closure1_slot11;
        mike = _closure1_slot5;
        entity = {};
        entity['style'] = oscar;
        oscar = 'box-none';
        entity['pointerEvents'] = oscar;
        oscar = _closure1_slot1;
        report = 16;
        report = offset[report];
        oscar = oscar.bind(tango)(report);
        report = {};
        report['beforeItem'] = verify;
        report['afterItem'] = options;
        report['scrollToLocation'] = golf;
        golf = true;
        report['compact'] = golf;
        report = zulu.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike = tango.bind(golf)(mike);
    tango = 17;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guilds_bar/native/GuildsBarUnreadBars.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();