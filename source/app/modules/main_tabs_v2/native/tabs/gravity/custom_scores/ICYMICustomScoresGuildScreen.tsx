// app/modules/main_tabs_v2/native/tabs/gravity/custom_scores/ICYMICustomScoresGuildScreen.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun117040: for(var _fun117040_ip = 0; ; ) switch(_fun117040_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun117040_ip = 46; continue _fun117040 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun117040_ip = 55; continue _fun117040 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun117040_ip = 345; continue _fun117040 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun117040_ip = 323; continue _fun117040 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun117040_ip = 283; continue _fun117040 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun117040_ip = 270; continue _fun117040 }
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
            if(!golf) { _fun117040_ip = 163; continue _fun117040 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun117040_ip = 179; continue _fun117040 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun117040_ip = 249; continue _fun117040 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun117040_ip = 249; continue _fun117040 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun117040_ip = 234; continue _fun117040 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun117040_ip = 247; continue _fun117040 }
 234:
            verify = _closure1_slot16;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun117040_ip = 265; continue _fun117040;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun117040_ip = 283; continue _fun117040;
 270:
            golf = _closure1_slot16;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun117040_ip = 323; continue _fun117040 }
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
            if(!tango) { _fun117040_ip = 330; continue _fun117040 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun117041: for(var _fun117041_ip = 0; ; ) switch(_fun117041_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun117041_ip = 56; continue _fun117041 }
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
                    _fun117041_ip = 67; continue _fun117041;
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
    var _closure1_slot15 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun117042: for(var _fun117042_ip = 0; ; ) switch(_fun117042_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun117042_ip = 23; continue _fun117042 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun117042_ip = 33; continue _fun117042 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun117042_ip = 70; continue _fun117042 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun117042_ip = 55; continue _fun117042 }
 70:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: ICYMICustomScoreChannelRow
        _fun117043: for(var _fun117043_ip = 0; ; ) switch(_fun117043_ip) {
 0:
            mike = argFoo;
            zulu = mike.channelId;
            var _closure2_slot0 = zulu;
            romeo = mike.start;
            verify = mike.end;
            foxtrot = mike.disabled;
            mike = _closure1_slot14;
            report = undefined;
            output = mike.bind(report)();
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 11;
            zulu = oscar[mike];
            yankee = tango.bind(report)(zulu);
            offset = yankee.useStateFromStores;
            zulu = _closure1_slot8;
            options = new Array(1);
            options[0] = zulu;
            zulu = function() {
                zulu = _closure1_slot8;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            result = offset.bind(yankee)(options, zulu);
            var _closure2_slot1 = result;
            mike = oscar[mike];
            offset = tango.bind(report)(mike);
            options = offset.useStateFromStores;
            mike = _closure1_slot6;
            zulu = new Array(2);
            zulu[0] = mike;
            mike = _closure1_slot10;
            zulu[1] = mike;
            mike = function() {
                _fun117045: for(var _fun117045_ip = 0; ; ) switch(_fun117045_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = null;
                    if(!(entity != zulu)) { _fun117045_ip = 162; continue _fun117045 }
 16:
                    oscar = _closure1_slot6;
                    report = oscar.getCustomChannelScore;
                    entity = _closure2_slot1;
                    tango = entity.guild_id;
                    entity = entity.id;
                    entity = report.bind(oscar)(tango, entity);
                    golf = _closure1_slot0;
                    tango = _closure1_slot2;
                    oscar = 12;
                    tango = tango[oscar];
                    report = undefined;
                    tango = golf.bind(report)(tango);
                    tango = tango.ICYMICustomScore;
                    tango = tango.UNKNOWN;
                    if(!(entity === tango)) { _fun117045_ip = 160; continue _fun117045 }
 87:
                    options = _closure1_slot10;
                    golf = options.isChannelMuted;
                    mike = _closure2_slot1;
                    tango = mike.guild_id;
                    mike = mike.id;
                    mike = golf.bind(options)(tango, mike);
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[oscar];
                    zulu = tango.bind(report)(zulu);
                    zulu = zulu.ICYMICustomScore;
                    if(mike) { _fun117045_ip = 151; continue _fun117045 }
 143:
                    mike = zulu.DEFAULT;
                    _fun117045_ip = 157; continue _fun117045;
 151:
                    mike = zulu.MUTED;
 157:
                    entity = mike;
 160:
                    return entity;
 162:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 12;
                    mike = mike[entity];
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    entity = entity.ICYMICustomScore;
                    entity = entity.DEFAULT;
                    return entity;
                }
            };
            mike = options.bind(offset)(zulu, mike);
            var _closure2_slot2 = mike;
            zulu = 12;
            zulu = oscar[zulu];
            zulu = tango.bind(report)(zulu);
            zulu = zulu.ICYMICustomScore;
            zulu = zulu.MUTED;
            options = mike === zulu;
            var _closure2_slot3 = options;
            oscar = _closure1_slot4;
            tango = oscar.useMemo;
            zulu = new Array(2);
            zulu[0] = options;
            zulu[1] = mike;
            mike = function() {
                _fun117046: for(var _fun117046_ip = 0; ; ) switch(_fun117046_ip) {
 0:
                    zulu = _closure2_slot3;
                    if(zulu) { _fun117046_ip = 269; continue _fun117046 }
 16:
                    tango = _closure2_slot2;
                    oscar = _closure1_slot0;
                    zulu = _closure1_slot2;
                    report = 12;
                    zulu = zulu[report];
                    golf = undefined;
                    zulu = oscar.bind(golf)(zulu);
                    zulu = zulu.ICYMICustomScore;
                    zulu = zulu.MORE;
                    if(!(tango !== zulu)) { _fun117046_ip = 212; continue _fun117046 }
 61:
                    zulu = _closure2_slot2;
                    tango = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[report];
                    entity = tango.bind(golf)(entity);
                    entity = entity.ICYMICustomScore;
                    entity = entity.LESS;
                    if(!(zulu !== entity)) { _fun117046_ip = 155; continue _fun117046 }
 98:
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    entity = 13;
                    zulu = oscar[entity];
                    zulu = report.bind(golf)(zulu);
                    tango = zulu.intl;
                    zulu = tango.string;
                    entity = oscar[entity];
                    entity = report.bind(golf)(entity);
                    entity = entity.t;
                    entity = entity.SnrG09;
                    entity = zulu.bind(tango)(entity);
                    _fun117046_ip = 210; continue _fun117046;
 155:
                    oscar = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 13;
                    tango = options[zulu];
                    tango = oscar.bind(golf)(tango);
                    report = tango.intl;
                    tango = report.string;
                    zulu = options[zulu];
                    zulu = oscar.bind(golf)(zulu);
                    zulu = zulu.t;
                    zulu = zulu.rdt65O;
                    entity = tango.bind(report)(zulu);
 210:
                    _fun117046_ip = 267; continue _fun117046;
 212:
                    oscar = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 13;
                    tango = options[zulu];
                    tango = oscar.bind(golf)(tango);
                    report = tango.intl;
                    tango = report.string;
                    zulu = options[zulu];
                    zulu = oscar.bind(golf)(zulu);
                    zulu = zulu.t;
                    zulu = zulu.Rxe3jI;
                    entity = tango.bind(report)(zulu);
 267:
                    _fun117046_ip = 326; continue _fun117046;
 269:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    mike = 13;
                    zulu = golf[mike];
                    report = undefined;
                    zulu = oscar.bind(report)(zulu);
                    tango = zulu.intl;
                    zulu = tango.string;
                    mike = golf[mike];
                    mike = oscar.bind(report)(mike);
                    mike = mike.t;
                    mike = mike.lhPHm5;
                    entity = zulu.bind(tango)(mike);
 326:
                    return entity;
                }
            };
            offset = tango.bind(oscar)(mike, zulu);
            tango = _closure1_slot4;
            zulu = tango.useCallback;
            mike = new Array(1);
            mike[0] = result;
            entity = function() {
                _fun117047: for(var _fun117047_ip = 0; ; ) switch(_fun117047_ip) {
 0:
                    zulu = _closure2_slot1;
                    mike = null;
                    if(!(mike != zulu)) { _fun117047_ip = 115; continue _fun117047 }
 13:
                    report = _closure1_slot1;
                    mike = _closure1_slot2;
                    tango = 14;
                    tango = mike[tango];
                    golf = undefined;
                    report = report.bind(golf)(tango);
                    tango = report.openLazy;
                    oscar = _closure1_slot0;
                    zulu = 16;
                    zulu = mike[zulu];
                    oscar = oscar.bind(golf)(zulu);
                    zulu = 15;
                    zulu = mike[zulu];
                    mike = mike.paths;
                    zulu = oscar.bind(golf)(zulu, mike);
                    mike = {};
                    entity = _closure2_slot1;
                    oscar = entity.guild_id;
                    mike['guildId'] = oscar;
                    entity = entity.id;
                    mike['channelId'] = entity;
                    entity = 'ItemDetailsActionSheet';
                    entity = tango.bind(report)(zulu, entity, mike);
 115:
                    entity = undefined;
                    return entity;
                }
            };
            oscar = zulu.bind(tango)(entity, mike);
            entity = null;
            if(!(entity != result)) { _fun117043_ip = 650; continue _fun117043 }
 252:
            source = _closure1_slot0;
            echo = _closure1_slot2;
            mike = 17;
            mike = echo[mike];
            zulu = source.bind(report)(mike);
            mike = zulu.getChannelIcon;
            sizing = mike.bind(zulu)(result);
            tango = _closure1_slot11;
            yankee = 18;
            mike = echo[yankee];
            mike = source.bind(report)(mike);
            zulu = mike.TableRow;
            mike = {};
            backup = true;
            mike['arrow'] = backup;
            mike['disabled'] = foxtrot;
            kilo = _closure1_slot11;
            backup = _closure1_slot1;
            update = 19;
            foxtrot = echo[update];
            backup = backup.bind(report)(foxtrot);
            foxtrot = {};
            echo = echo[update];
            echo = source.bind(report)(echo);
            echo = echo.IconSizes;
            echo = echo.SMALL;
            foxtrot['size'] = echo;
            foxtrot['source'] = sizing;
            foxtrot = kilo.bind(report)(backup, foxtrot);
            mike['icon'] = foxtrot;
            mike['start'] = romeo;
            mike['end'] = verify;
            verify = 1;
            mike['labelLineClamp'] = verify;
            if(options) { _fun117043_ip = 408; continue _fun117043 }
 398:
            options = result.name;
            _fun117043_ip = 584; continue _fun117043;
 408:
            foxtrot = _closure1_slot12;
            romeo = _closure1_slot5;
            verify = {};
            backup = output.channelNameContainer;
            verify['style'] = backup;
            sizing = _closure1_slot11;
            source = _closure1_slot1;
            echo = _closure1_slot2;
            backup = echo[update];
            kilo = source.bind(report)(backup);
            backup = {};
            control = 20;
            control = echo[control];
            control = source.bind(report)(control);
            backup['source'] = control;
            update = echo[update];
            update = source.bind(report)(update);
            update = update.Sizes;
            update = update.SMALL;
            backup['size'] = update;
            output = output.channelMutedIcon;
            backup['style'] = output;
            kilo = sizing.bind(report)(kilo, backup);
            backup = new Array(2);
            backup[0] = kilo;
            output = _closure1_slot11;
            sizing = _closure1_slot0;
            kilo = 21;
            kilo = echo[kilo];
            kilo = sizing.bind(report)(kilo);
            sizing = kilo.Text;
            kilo = {'variant': 'text-md/semibold', 'color': 'header-primary', 'lineClamp': 1};
            result = result.name;
            kilo['children'] = result;
            kilo = output.bind(report)(sizing, kilo);
            backup[1] = kilo;
            verify['children'] = backup;
            options = foxtrot.bind(report)(romeo, verify);
 584:
            mike['label'] = options;
            verify = _closure1_slot11;
            options = _closure1_slot0;
            golf = _closure1_slot2;
            golf = golf[yankee];
            golf = options.bind(report)(golf);
            golf = golf.TableRow;
            options = golf.TrailingText;
            golf = {};
            golf['text'] = offset;
            golf = verify.bind(report)(options, golf);
            mike['trailing'] = golf;
            mike['onPress'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 650:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar) { // Original name: keyExtractor
        _fun117048: for(var _fun117048_ip = 0; ; ) switch(_fun117048_ip) {
 0:
            zulu = argFoo;
            mike = zulu.kind;
            entity = 'header';
            if(!(entity !== mike)) { _fun117048_ip = 132; continue _fun117048 }
 16:
            tango = zulu.kind;
            mike = 'categoryHeader';
            if(!(mike !== tango)) { _fun117048_ip = 100; continue _fun117048 }
 29:
            tango = zulu.kind;
            mike = 'channel';
            if(!(mike !== tango)) { _fun117048_ip = 69; continue _fun117048 }
 42:
            mike = global;
            mike = mike.HermesInternal;
            report = mike.concat;
            tango = '';
            mike = argBar;
            mike = report.bind(tango)(mike);
            _fun117048_ip = 98; continue _fun117048;
 69:
            oscar = zulu.channelId;
            tango = global;
            tango = tango.HermesInternal;
            report = tango.concat;
            tango = 'channel-';
            mike = report.bind(tango)(oscar);
 98:
            _fun117048_ip = 129; continue _fun117048;
 100:
            report = zulu.index;
            zulu = global;
            zulu = zulu.HermesInternal;
            tango = zulu.concat;
            zulu = 'categoryHeader-';
            mike = tango.bind(zulu)(report);
 129:
            entity = mike;
 132:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
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
    offset = 1;
    golf = oscar[offset];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot11 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsxs;
    var _closure1_slot12 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot13 = tango;
    tango = 9;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    verify['flex'] = offset;
    offset = 10;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BG_BASE_PRIMARY;
    verify['backgroundColor'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_12;
    verify['paddingHorizontal'] = romeo;
    tango['container'] = verify;
    verify = {};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_32;
    verify['marginBottom'] = romeo;
    tango['guildHeader'] = verify;
    verify = {'paddingTop': null, 'paddingBottom': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_8;
    verify['paddingTop'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_8;
    verify['paddingBottom'] = romeo;
    foxtrot = 'row';
    romeo = 'center';
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_4;
    verify['gap'] = backup;
    tango['categoryHeader'] = verify;
    verify = {};
    verify['flexDirection'] = foxtrot;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_4;
    verify['gap'] = foxtrot;
    tango['channelNameContainer'] = verify;
    verify = {};
    verify['alignSelf'] = romeo;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.INTERACTIVE_MUTED;
    verify['tintColor'] = offset;
    tango['channelMutedIcon'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot14 = tango;
    tango = 29;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/tabs/gravity/custom_scores/ICYMICustomScoresGuildScreen.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ICYMICustomScoresGuildScreen
        _fun117049: for(var _fun117049_ip = 0; ; ) switch(_fun117049_ip) {
 0:
            mike = argFoo;
            zulu = mike.navigation;
            var _closure2_slot0 = zulu;
            mike = mike.route;
            mike = mike.params;
            mike = mike.guildId;
            var _closure2_slot1 = mike;
            tango = undefined;
            var _closure2_slot4 = tango;
            var _closure2_slot5 = tango;
            var _closure2_slot6 = tango;
            mike = _closure1_slot14;
            report = mike.bind(tango)();
            var _closure2_slot2 = report;
            golf = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 11;
            oscar = oscar[mike];
            offset = golf.bind(tango)(oscar);
            verify = offset.useStateFromStores;
            oscar = _closure1_slot9;
            golf = new Array(1);
            golf[0] = oscar;
            oscar = function() {
                zulu = _closure1_slot9;
                mike = zulu.getGuild;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            offset = verify.bind(offset)(golf, oscar);
            var _closure2_slot3 = offset;
            verify = _closure1_slot4;
            golf = verify.useEffect;
            oscar = new Array(2);
            oscar[0] = zulu;
            zulu = null;
            yankee = zulu == offset;
            zulu = undefined;
            if(yankee) { _fun117049_ip = 152; continue _fun117049 }
 147:
            zulu = offset.name;
 152:
            oscar[1] = zulu;
            zulu = function() {
                _fun117051: for(var _fun117051_ip = 0; ; ) switch(_fun117051_ip) {
 0:
                    tango = _closure2_slot0;
                    zulu = tango.setOptions;
                    mike = {};
                    entity = _closure2_slot3;
                    report = null;
                    options = report == entity;
                    entity = undefined;
                    oscar = undefined;
                    if(options) { _fun117051_ip = 41; continue _fun117051 }
 32:
                    golf = _closure2_slot3;
                    oscar = golf.name;
 41:
                    golf = report != oscar;
                    report = '';
                    if(!golf) { _fun117051_ip = 55; continue _fun117051 }
 52:
                    report = oscar;
 55:
                    mike['title'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            zulu = golf.bind(verify)(zulu, oscar);
            oscar = _closure1_slot0;
            kilo = _closure1_slot2;
            zulu = kilo[mike];
            yankee = oscar.bind(tango)(zulu);
            verify = yankee.useStateFromStores;
            zulu = _closure1_slot6;
            golf = new Array(1);
            golf[0] = zulu;
            zulu = function() {
                zulu = _closure1_slot6;
                mike = zulu.getCustomGuildScore;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            verify = verify.bind(yankee)(golf, zulu);
            zulu = 12;
            zulu = kilo[zulu];
            golf = oscar.bind(tango)(zulu);
            zulu = golf.numberToCustomScore;
            romeo = zulu.bind(golf)(verify);
            _closure2_slot4 = romeo;
            mike = kilo[mike];
            verify = oscar.bind(tango)(mike);
            golf = verify.useStateFromStoresObject;
            mike = _closure1_slot7;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                zulu = _closure1_slot7;
                mike = zulu.getGuild;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = golf.bind(verify)(zulu, mike);
            yankee = mike.guildChannels;
            _closure2_slot5 = yankee;
            mike = 22;
            mike = kilo[mike];
            golf = oscar.bind(tango)(mike);
            zulu = golf.useICYMIForumThreadsEnabled;
            mike = 'customScoresGuildScreen';
            mike = zulu.bind(golf)(mike);
            _closure2_slot6 = mike;
            verify = _closure1_slot4;
            golf = verify.useMemo;
            zulu = new Array(3);
            zulu[0] = romeo;
            zulu[1] = yankee;
            zulu[2] = mike;
            mike = function() {
                _fun117054: for(var _fun117054_ip = 0; ; ) switch(_fun117054_ip) {
 0:
                    entity = new Array(0);
                    zulu = entity.push;
                    mike = {};
                    tango = 'header';
                    mike['kind'] = tango;
                    mike = zulu.bind(entity)(mike);
                    zulu = _closure1_slot15;
                    report = _closure2_slot5;
                    tango = report.getSections;
                    mike = false;
                    tango = tango.bind(report)(mike);
                    mike = tango.entries;
                    mike = mike.bind(tango)();
                    control = undefined;
                    source = zulu.bind(control)(mike);
                    report = source.bind(control)();
                    mike = report.done;
                    update = 'categoryHeader';
                    echo = 2;
                    result = 0;
                    zulu = 1;
                    tango = 'channel';
                    output = 12;
                    sizing = 13;
                    kilo = null;
                    backup = '';
                    foxtrot = 23;
                    romeo = report;
                    yankee = undefined;
                    offset = undefined;
                    verify = undefined;
                    options = undefined;
                    golf = undefined;
                    oscar = undefined;
                    report = undefined;
                    if(mike) { _fun117054_ip = 976; continue _fun117054 }
 133:
                    record = romeo.value;
                    mike = _closure1_slot3;
                    mike = mike.bind(control)(record, echo);
                    equality = mike[result];
                    mike = mike[zulu];
                    lima = yankee;
                    sierra = offset;
                    status = verify;
                    target = options;
                    papa = golf;
                    context = oscar;
                    record = report;
                    if(!(result !== mike)) { _fun117054_ip = 937; continue _fun117054 }
 184:
                    whiskey = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[foxtrot];
                    mike = whiskey.bind(control)(mike);
                    mike = mike.SECTION_INDEX_GUILD_ACTIONS;
                    lima = yankee;
                    sierra = offset;
                    status = verify;
                    target = options;
                    papa = golf;
                    context = oscar;
                    record = report;
                    if(!(equality !== mike)) { _fun117054_ip = 937; continue _fun117054 }
 235:
                    mike = _closure2_slot5;
                    mike = mike.voiceChannelsSectionNumber;
                    lima = yankee;
                    sierra = offset;
                    status = verify;
                    target = options;
                    papa = golf;
                    context = oscar;
                    record = report;
                    if(!(equality !== mike)) { _fun117054_ip = 937; continue _fun117054 }
 273:
                    whiskey = _closure2_slot5;
                    mike = whiskey.getCategoryFromSection;
                    variable39 = mike.bind(whiskey)(equality);
                    mike = kilo == variable39;
                    variable38 = undefined;
                    if(mike) { _fun117054_ip = 324; continue _fun117054 }
 297:
                    mike = variable39.getChannelRecords;
                    quebec = mike.bind(variable39)();
                    whiskey = quebec.filter;
                    mike = function(argFoo) {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 12;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.isChannelCustomScoreEligible;
                        mike = _closure2_slot6;
                        entity = argFoo;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    variable38 = whiskey.bind(quebec)(mike);
 324:
                    lima = variable39;
                    sierra = variable38;
                    status = verify;
                    target = options;
                    papa = golf;
                    context = oscar;
                    record = report;
                    if(!(kilo != variable38)) { _fun117054_ip = 937; continue _fun117054 }
 352:
                    mike = variable38.length;
                    lima = variable39;
                    sierra = variable38;
                    status = verify;
                    target = options;
                    papa = golf;
                    context = oscar;
                    record = report;
                    if(!(result !== mike)) { _fun117054_ip = 937; continue _fun117054 }
 385:
                    quebec = _closure1_slot0;
                    mike = _closure1_slot2;
                    whiskey = mike[sizing];
                    whiskey = quebec.bind(control)(whiskey);
                    variable37 = whiskey.intl;
                    variable36 = variable37.string;
                    whiskey = mike[sizing];
                    whiskey = quebec.bind(control)(whiskey);
                    whiskey = whiskey.t;
                    whiskey = whiskey.GSfOoq;
                    whiskey = variable36.bind(variable37)(whiskey);
                    mike = mike[foxtrot];
                    mike = quebec.bind(control)(mike);
                    mike = mike.SECTION_INDEX_FAVORITES;
                    if(!(equality !== mike)) { _fun117054_ip = 644; continue _fun117054 }
 459:
                    quebec = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[foxtrot];
                    mike = quebec.bind(control)(mike);
                    mike = mike.SECTION_INDEX_RECENTS;
                    if(!(equality !== mike)) { _fun117054_ip = 584; continue _fun117054 }
 486:
                    quebec = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[foxtrot];
                    mike = quebec.bind(control)(mike);
                    mike = mike.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                    variable37 = whiskey;
                    variable36 = options;
                    quebec = golf;
                    if(!(equality >= mike)) { _fun117054_ip = 702; continue _fun117054 }
 525:
                    whiskey = _closure2_slot5;
                    mike = whiskey.getNamedCategoryFromSection;
                    mike = mike.bind(whiskey)(equality);
                    variable40 = kilo == mike;
                    whiskey = undefined;
                    if(variable40) { _fun117054_ip = 560; continue _fun117054 }
 549:
                    variable40 = mike.record;
                    whiskey = variable40.name;
 560:
                    variable41 = kilo != whiskey;
                    variable40 = backup;
                    if(!variable41) { _fun117054_ip = 573; continue _fun117054 }
 570:
                    variable40 = whiskey;
 573:
                    variable37 = variable40;
                    variable36 = whiskey;
                    quebec = mike;
                    _fun117054_ip = 702; continue _fun117054;
 584:
                    variable41 = _closure1_slot0;
                    mike = _closure1_slot2;
                    whiskey = mike[sizing];
                    whiskey = variable41.bind(control)(whiskey);
                    variable40 = whiskey.intl;
                    whiskey = variable40.string;
                    mike = mike[sizing];
                    mike = variable41.bind(control)(mike);
                    mike = mike.t;
                    mike = mike.gKcrqK;
                    variable37 = whiskey.bind(variable40)(mike);
                    variable36 = options;
                    quebec = golf;
                    _fun117054_ip = 702; continue _fun117054;
 644:
                    variable41 = _closure1_slot0;
                    mike = _closure1_slot2;
                    whiskey = mike[sizing];
                    whiskey = variable41.bind(control)(whiskey);
                    variable40 = whiskey.intl;
                    whiskey = variable40.string;
                    mike = mike[sizing];
                    mike = variable41.bind(control)(mike);
                    mike = mike.t;
                    mike = mike.k8fFjo;
                    variable37 = whiskey.bind(variable40)(mike);
                    variable36 = options;
                    quebec = golf;
 702:
                    whiskey = entity.push;
                    mike = {};
                    mike['kind'] = update;
                    mike['index'] = equality;
                    mike['title'] = variable37;
                    mike = whiskey.bind(entity)(mike);
                    whiskey = _closure1_slot15;
                    mike = variable38.entries;
                    mike = mike.bind(variable38)();
                    equality = whiskey.bind(control)(mike);
                    variable40 = equality.bind(control)();
                    mike = variable40.done;
                    whiskey = variable40;
                    lima = variable39;
                    sierra = variable38;
                    status = variable37;
                    target = variable36;
                    papa = quebec;
                    context = whiskey;
                    record = equality;
                    if(mike) { _fun117054_ip = 937; continue _fun117054 }
 784:
                    variable40 = whiskey.value;
                    mike = _closure1_slot3;
                    mike = mike.bind(control)(variable40, echo);
                    variable42 = mike[result];
                    variable41 = mike[zulu];
                    variable40 = entity.push;
                    mike = {};
                    mike['kind'] = tango;
                    variable41 = variable41.id;
                    mike['channelId'] = variable41;
                    variable41 = result === variable42;
                    mike['start'] = variable41;
                    variable41 = variable38.length;
                    variable41 = variable41 - zulu;
                    variable41 = variable42 === variable41;
                    mike['end'] = variable41;
                    variable42 = _closure2_slot4;
                    variable43 = _closure1_slot0;
                    variable41 = _closure1_slot2;
                    variable41 = variable41[output];
                    variable41 = variable43.bind(control)(variable41);
                    variable41 = variable41.ICYMICustomScore;
                    variable41 = variable41.MUTED;
                    variable41 = variable42 === variable41;
                    mike['disabled'] = variable41;
                    mike = variable40.bind(entity)(mike);
                    variable40 = equality.bind(control)();
                    mike = variable40.done;
                    whiskey = variable40;
                    lima = variable39;
                    sierra = variable38;
                    status = variable37;
                    target = variable36;
                    papa = quebec;
                    context = whiskey;
                    record = equality;
                    if(!mike) { _fun117054_ip = 784; continue _fun117054 }
 937:
                    whiskey = source.bind(control)();
                    mike = whiskey.done;
                    yankee = lima;
                    offset = sierra;
                    verify = status;
                    options = target;
                    golf = papa;
                    oscar = context;
                    report = record;
                    romeo = whiskey;
                    if(!mike) { _fun117054_ip = 133; continue _fun117054 }
 976:
                    mike = entity.length;
                    mike = mike - zulu;
                    zulu = entity[mike];
                    mike = zulu.kind;
                    if(!(tango === mike)) { _fun117054_ip = 1006; continue _fun117054 }
 998:
                    mike = true;
                    zulu['end'] = mike;
 1006:
                    return entity;
                }
            };
            verify = golf.bind(verify)(mike, zulu);
            backup = _closure1_slot1;
            mike = 24;
            mike = kilo[mike];
            mike = backup.bind(tango)(mike);
            yankee = mike.bind(tango)();
            mike = 25;
            mike = kilo[mike];
            mike = backup.bind(tango)(mike);
            mike = mike.bind(tango)();
            foxtrot = mike.bottom;
            golf = _closure1_slot4;
            zulu = golf.useCallback;
            mike = new Array(3);
            mike[0] = offset;
            offset = report.categoryHeader;
            mike[1] = offset;
            offset = report.guildHeader;
            mike[2] = offset;
            entity = function(argFoo) {
                _fun117056: for(var _fun117056_ip = 0; ; ) switch(_fun117056_ip) {
 0:
                    entity = argFoo;
                    offset = entity.item;
                    mike = offset.kind;
                    entity = 'header';
                    if(!(entity !== mike)) { _fun117056_ip = 300; continue _fun117056 }
 24:
                    mike = offset.kind;
                    entity = 'categoryHeader';
                    if(!(entity !== mike)) { _fun117056_ip = 114; continue _fun117056 }
 37:
                    zulu = offset.kind;
                    mike = 'channel';
                    entity = null;
                    if(!(mike === zulu)) { _fun117056_ip = 109; continue _fun117056 }
 52:
                    report = _closure1_slot11;
                    tango = _closure1_slot17;
                    zulu = {};
                    mike = offset.disabled;
                    zulu['disabled'] = mike;
                    mike = offset.channelId;
                    zulu['channelId'] = mike;
                    mike = offset.start;
                    zulu['start'] = mike;
                    mike = offset.end;
                    zulu['end'] = mike;
                    mike = undefined;
                    entity = report.bind(mike)(tango, zulu);
 109:
                    _fun117056_ip = 295; continue _fun117056;
 114:
                    report = _closure1_slot12;
                    tango = _closure1_slot5;
                    zulu = {};
                    mike = _closure2_slot2;
                    mike = mike.categoryHeader;
                    zulu['style'] = mike;
                    romeo = _closure1_slot11;
                    options = _closure1_slot0;
                    yankee = _closure1_slot2;
                    mike = 27;
                    oscar = yankee[mike];
                    mike = undefined;
                    oscar = options.bind(mike)(oscar);
                    verify = oscar.ChevronSmallDownIcon;
                    oscar = {};
                    foxtrot = 'xs';
                    oscar['size'] = foxtrot;
                    backup = _closure1_slot1;
                    foxtrot = 10;
                    foxtrot = yankee[foxtrot];
                    foxtrot = backup.bind(mike)(foxtrot);
                    foxtrot = foxtrot.colors;
                    foxtrot = foxtrot.HEADER_SECONDARY;
                    oscar['color'] = foxtrot;
                    verify = romeo.bind(mike)(verify, oscar);
                    oscar = new Array(2);
                    oscar[0] = verify;
                    verify = _closure1_slot11;
                    golf = 21;
                    golf = yankee[golf];
                    golf = options.bind(mike)(golf);
                    options = golf.Text;
                    golf = {'variant': 'text-sm/semibold', 'color': 'header-secondary'};
                    offset = offset.title;
                    golf['children'] = offset;
                    golf = verify.bind(mike)(options, golf);
                    oscar[1] = golf;
                    zulu['children'] = oscar;
                    entity = report.bind(mike)(tango, zulu);
 295:
                    _fun117056_ip = 658; continue _fun117056;
 300:
                    zulu = _closure2_slot3;
                    mike = null;
                    zulu = mike != zulu;
                    if(!zulu) { _fun117056_ip = 655; continue _fun117056 }
 319:
                    oscar = _closure1_slot12;
                    report = _closure1_slot13;
                    tango = {};
                    verify = _closure1_slot11;
                    options = _closure1_slot5;
                    golf = {};
                    zulu = _closure2_slot2;
                    zulu = zulu.guildHeader;
                    golf['style'] = zulu;
                    romeo = _closure1_slot11;
                    backup = _closure1_slot0;
                    kilo = _closure1_slot2;
                    zulu = 26;
                    offset = kilo[zulu];
                    zulu = undefined;
                    offset = backup.bind(zulu)(offset);
                    yankee = offset.GuildScoreSettings;
                    offset = {};
                    sizing = _closure2_slot3;
                    offset['guild'] = sizing;
                    offset = romeo.bind(zulu)(yankee, offset);
                    golf['children'] = offset;
                    options = verify.bind(zulu)(options, golf);
                    golf = new Array(3);
                    golf[0] = options;
                    romeo = _closure1_slot11;
                    options = 21;
                    verify = kilo[options];
                    verify = backup.bind(zulu)(verify);
                    offset = verify.Text;
                    verify = {'variant': 'text-sm/semibold', 'color': 'header-secondary'};
                    yankee = 13;
                    sizing = kilo[yankee];
                    sizing = backup.bind(zulu)(sizing);
                    result = sizing.intl;
                    output = result.string;
                    sizing = kilo[yankee];
                    sizing = backup.bind(zulu)(sizing);
                    sizing = sizing.t;
                    sizing = sizing.0jRosr;
                    sizing = output.bind(result)(sizing);
                    verify['children'] = sizing;
                    verify = romeo.bind(zulu)(offset, verify);
                    golf[1] = verify;
                    offset = _closure1_slot11;
                    options = kilo[options];
                    options = backup.bind(zulu)(options);
                    verify = options.Text;
                    options = {'variant': 'text-xs/normal', 'color': 'header-secondary'};
                    romeo = {};
                    sizing = _closure1_slot1;
                    foxtrot = 10;
                    foxtrot = kilo[foxtrot];
                    foxtrot = sizing.bind(zulu)(foxtrot);
                    foxtrot = foxtrot.spacing;
                    foxtrot = foxtrot.PX_16;
                    romeo['marginBottom'] = foxtrot;
                    options['style'] = romeo;
                    romeo = kilo[yankee];
                    romeo = backup.bind(zulu)(romeo);
                    foxtrot = romeo.intl;
                    romeo = foxtrot.string;
                    yankee = kilo[yankee];
                    yankee = backup.bind(zulu)(yankee);
                    yankee = yankee.t;
                    yankee = yankee.l52PX1;
                    yankee = romeo.bind(foxtrot)(yankee);
                    options['children'] = yankee;
                    options = offset.bind(zulu)(verify, options);
                    golf[2] = options;
                    tango['children'] = golf;
                    mike = oscar.bind(zulu)(report, tango);
 655:
                    entity = mike;
 658:
                    return entity;
                }
            };
            offset = zulu.bind(golf)(entity, mike);
            zulu = _closure1_slot11;
            mike = _closure1_slot5;
            entity = {};
            report = report.container;
            entity['style'] = report;
            golf = _closure1_slot11;
            report = 28;
            report = kilo[report];
            report = oscar.bind(tango)(report);
            oscar = report.AnimatedFlashList;
            report = {};
            romeo = {};
            romeo['bottom'] = foxtrot;
            foxtrot = 10;
            foxtrot = kilo[foxtrot];
            foxtrot = backup.bind(tango)(foxtrot);
            foxtrot = foxtrot.spacing;
            foxtrot = foxtrot.PX_12;
            romeo['top'] = foxtrot;
            report['contentInset'] = romeo;
            report['estimatedItemSize'] = yankee;
            yankee = false;
            report['showsVerticalScrollIndicator'] = yankee;
            report['renderItem'] = offset;
            report['data'] = verify;
            options = _closure1_slot18;
            report['keyExtractor'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();