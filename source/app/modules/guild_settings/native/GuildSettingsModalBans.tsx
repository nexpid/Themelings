// app/modules/guild_settings/native/GuildSettingsModalBans.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
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
            verify = _closure1_slot16;
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
            golf = _closure1_slot16;
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
    var _closure1_slot15 = entity;
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
    var _closure1_slot16 = entity;
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
    romeo = 1;
    golf = oscar[romeo];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.View;
    var _closure1_slot5 = golf;
    options = tango.StyleSheet;
    var _closure1_slot6 = options;
    tango = 3;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 7;
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
    golf = options.create;
    tango = {};
    verify = {};
    offset = 8;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_12;
    verify['paddingHorizontal'] = foxtrot;
    verify['flex'] = romeo;
    tango['containerInner'] = verify;
    verify = {};
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.spacing;
    offset = offset.PX_16;
    verify['paddingVertical'] = offset;
    tango['searchField'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot14 = tango;
    tango = 26;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_settings/native/GuildSettingsModalBans.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ConnectedGuildSettingsModalBans
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = argFoo;
            zulu = mike.guildId;
            var _closure2_slot0 = zulu;
            yankee = mike.contentContainerStyle;
            golf = mike.navScrim;
            tango = undefined;
            var _closure2_slot4 = tango;
            options = _closure1_slot0;
            foxtrot = _closure1_slot2;
            romeo = 9;
            mike = foxtrot[romeo];
            offset = options.bind(tango)(mike);
            verify = offset.useStateFromStores;
            mike = _closure1_slot7;
            oscar = new Array(1);
            oscar[0] = mike;
            mike = function() {
                zulu = _closure1_slot7;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = verify.bind(offset)(oscar, mike);
            var _closure2_slot1 = mike;
            oscar = foxtrot[romeo];
            offset = options.bind(tango)(oscar);
            verify = offset.useStateFromStoresObject;
            oscar = _closure1_slot10;
            options = new Array(1);
            options[0] = oscar;
            oscar = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    mike = _closure1_slot10;
                    entity = mike.getProps;
                    mike = entity.bind(mike)();
                    zulu = mike.bans;
                    tango = mike.searchQuery;
                    entity = {};
                    entity['bans'] = zulu;
                    zulu = null;
                    report = zulu != tango;
                    zulu = '';
                    if(!report) { _fun00010_ip = 52; continue _fun00009 }
 49:
                    zulu = tango;
 52:
                    entity['searchQuery'] = zulu;
                    mike = mike.bansVersion;
                    entity['bansVersion'] = mike;
                    return entity;
                }
            };
            oscar = verify.bind(offset)(options, oscar);
            verify = oscar.bans;
            var _closure2_slot2 = verify;
            update = oscar.searchQuery;
            var _closure2_slot3 = update;
            options = oscar.bansVersion;
            offset = _closure1_slot1;
            oscar = 10;
            oscar = foxtrot[oscar];
            oscar = offset.bind(tango)(oscar);
            result = oscar.bind(tango)();
            offset = _closure1_slot6;
            oscar = offset.flatten;
            offset = oscar.bind(offset)(yankee);
            oscar = null;
            foxtrot = oscar == offset;
            yankee = undefined;
            if(foxtrot) { _fun00008_ip = 207; continue _fun00007 }
 201:
            yankee = offset.paddingBottom;
 207:
            backup = 0;
            foxtrot = 'number';
            offset = typeof yankee;
            sizing = 0;
            if(!(foxtrot === offset)) { _fun00008_ip = 257; continue _fun00007 }
 222:
            foxtrot = _closure1_slot1;
            kilo = _closure1_slot2;
            offset = 8;
            offset = kilo[offset];
            offset = foxtrot.bind(tango)(offset);
            offset = offset.spacing;
            offset = offset.PX_16;
            sizing = yankee + offset;
 257:
            offset = _closure1_slot4;
            foxtrot = offset.useMemo;
            yankee = new Array(3);
            yankee[0] = verify;
            yankee[1] = options;
            yankee[2] = update;
            options = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    mike = new Array(0);
                    zulu = _closure1_slot15;
                    entity = _closure2_slot2;
                    verify = null;
                    if(!(verify == entity)) { _fun00012_ip = 30; continue _fun00011 }
 24:
                    entity = new Array(0);
                    _fun00012_ip = 34; continue _fun00011;
 30:
                    entity = _closure2_slot2;
 34:
                    options = undefined;
                    golf = zulu.bind(options)(entity);
                    zulu = golf.bind(options)();
                    entity = zulu.done;
                    oscar = 11;
                    report = 0;
                    tango = 1;
                    if(entity) { _fun00012_ip = 201; continue _fun00011 }
 64:
                    romeo = zulu.value;
                    entity = _closure1_slot3;
                    entity = entity.bind(options)(romeo, tango);
                    foxtrot = entity[report];
                    romeo = _closure1_slot8;
                    entity = romeo.getUser;
                    romeo = entity.bind(romeo)(foxtrot);
                    if(!(verify != romeo)) { _fun00012_ip = 183; continue _fun00011 }
 102:
                    entity = _closure2_slot3;
                    entity = entity.length;
                    entity = report === entity;
                    if(entity) { _fun00012_ip = 170; continue _fun00011 }
 118:
                    backup = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    foxtrot = foxtrot[oscar];
                    kilo = backup.bind(options)(foxtrot);
                    backup = _closure2_slot3;
                    foxtrot = backup.toLowerCase;
                    backup = foxtrot.bind(backup)();
                    sizing = romeo.username;
                    foxtrot = sizing.toLowerCase;
                    foxtrot = foxtrot.bind(sizing)();
                    entity = kilo.bind(options)(backup, foxtrot);
 170:
                    if(!entity) { _fun00012_ip = 183; continue _fun00011 }
 173:
                    entity = mike.push;
                    entity = entity.bind(mike)(romeo);
 183:
                    romeo = golf.bind(options)();
                    entity = romeo.done;
                    zulu = romeo;
                    if(!entity) { _fun00012_ip = 64; continue _fun00011 }
 201:
                    zulu = mike.sort;
                    entity = function(argFoo, argBar) {
                        entity = argFoo;
                        mike = entity.username;
                        entity = mike.toLowerCase;
                        zulu = entity.bind(mike)();
                        mike = zulu.localeCompare;
                        entity = argBar;
                        tango = entity.username;
                        entity = tango.toLowerCase;
                        entity = entity.bind(tango)();
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    entity = zulu.bind(mike)(entity);
                    entity = {};
                    entity['users'] = mike;
                    zulu = mike.length;
                    mike = new Array(1);
                    mike[0] = zulu;
                    entity['sections'] = mike;
                    return entity;
                }
            };
            options = foxtrot.bind(offset)(options, yankee);
            foxtrot = options.users;
            _closure2_slot4 = foxtrot;
            echo = options.sections;
            yankee = _closure1_slot0;
            options = _closure1_slot2;
            options = options[romeo];
            kilo = yankee.bind(tango)(options);
            romeo = kilo.useStateFromStores;
            options = _closure1_slot9;
            yankee = new Array(1);
            yankee[0] = options;
            options = function() {
                entity = _closure1_slot9;
                entity = entity.keyboardOpen;
                return entity;
            };
            options = romeo.bind(kilo)(yankee, options);
            romeo = offset.useEffect;
            yankee = new Array(1);
            yankee[0] = zulu;
            zulu = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 12;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.fetchGuildBansBatch;
                zulu = _closure2_slot0;
                mike = 1000;
                entity = null;
                entity = tango.bind(report)(zulu, mike, entity);
                entity = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 13;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.setSearchQuery;
                    mike = '';
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                return entity;
            };
            zulu = romeo.bind(offset)(zulu, yankee);
            yankee = offset.useCallback;
            zulu = new Array(3);
            zulu[0] = verify;
            zulu[1] = mike;
            zulu[2] = foxtrot;
            mike = function(argFoo, argBar) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    verify = argBar;
                    entity = _closure2_slot4;
                    romeo = entity[verify];
                    var _closure3_slot0 = romeo;
                    entity = _closure2_slot2;
                    foxtrot = null;
                    mike = foxtrot == entity;
                    report = undefined;
                    entity = undefined;
                    if(mike) { _fun00014_ip = 56; continue _fun00013 }
 37:
                    tango = _closure2_slot2;
                    zulu = tango.get;
                    mike = romeo.id;
                    entity = zulu.bind(tango)(mike);
 56:
                    var _closure3_slot1 = entity;
                    mike = foxtrot == entity;
                    entity = null;
                    if(mike) { _fun00014_ip = 326; continue _fun00013 }
 72:
                    tango = _closure1_slot11;
                    backup = _closure1_slot0;
                    kilo = _closure1_slot2;
                    mike = 14;
                    mike = kilo[mike];
                    mike = backup.bind(report)(mike);
                    zulu = mike.TableRow;
                    mike = {};
                    options = 0;
                    options = options === verify;
                    mike['start'] = options;
                    options = _closure2_slot4;
                    offset = options.length;
                    options = 1;
                    options = offset - options;
                    options = verify === options;
                    mike['end'] = options;
                    verify = _closure1_slot1;
                    offset = 15;
                    options = kilo[offset];
                    verify = verify.bind(report)(options);
                    options = {};
                    offset = kilo[offset];
                    offset = backup.bind(report)(offset);
                    offset = offset.AvatarSizes;
                    offset = offset.SMALL;
                    options['size'] = offset;
                    options['user'] = romeo;
                    offset = _closure2_slot1;
                    foxtrot = foxtrot == offset;
                    offset = undefined;
                    if(foxtrot) { _fun00014_ip = 210; continue _fun00013 }
 201:
                    yankee = _closure2_slot1;
                    offset = yankee.id;
 210:
                    options['guildId'] = offset;
                    options = tango.bind(report)(verify, options);
                    mike['icon'] = options;
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    options = 16;
                    options = offset[options];
                    yankee = verify.bind(report)(options);
                    verify = yankee.getUserTag;
                    options = {};
                    foxtrot = 'username';
                    options['mode'] = foxtrot;
                    options = verify.bind(yankee)(romeo, options);
                    mike['label'] = options;
                    verify = _closure1_slot11;
                    options = _closure1_slot0;
                    golf = 17;
                    golf = offset[golf];
                    golf = options.bind(report)(golf);
                    options = golf.TableRowArrow;
                    golf = {};
                    golf = verify.bind(report)(options, golf);
                    mike['trailing'] = golf;
                    oscar = function() { // Original name: onPress
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            entity = _closure2_slot1;
                            options = null;
                            if(!(options != entity)) { _fun00016_ip = 405; continue _fun00015 }
 16:
                            foxtrot = _closure1_slot0;
                            golf = _closure1_slot2;
                            entity = 18;
                            entity = golf[entity];
                            verify = undefined;
                            zulu = foxtrot.bind(verify)(entity);
                            mike = zulu.showSimpleActionSheet;
                            entity = {};
                            report = 'GuildSettingsUnban';
                            entity['key'] = report;
                            report = {};
                            offset = 19;
                            oscar = golf[offset];
                            oscar = foxtrot.bind(verify)(oscar);
                            kilo = oscar.intl;
                            backup = kilo.formatToPlainString;
                            oscar = golf[offset];
                            oscar = foxtrot.bind(verify)(oscar);
                            oscar = oscar.t;
                            romeo = oscar.XvAG5u;
                            yankee = {};
                            sizing = _closure3_slot0;
                            sizing = sizing.username;
                            yankee['user'] = sizing;
                            yankee = backup.bind(kilo)(romeo, yankee);
                            report['title'] = yankee;
                            yankee = golf[offset];
                            yankee = foxtrot.bind(verify)(yankee);
                            romeo = yankee.intl;
                            yankee = romeo.string;
                            golf = golf[offset];
                            golf = foxtrot.bind(verify)(golf);
                            golf = golf.t;
                            golf = golf.9Ki66O;
                            romeo = yankee.bind(romeo)(golf);
                            golf = _closure3_slot1;
                            golf = golf.reason;
                            if(!(options != golf)) { _fun00016_ip = 207; continue _fun00015 }
 189:
                            golf = _closure3_slot1;
                            options = golf.reason;
                            golf = '';
                            if(!(golf === options)) { _fun00016_ip = 261; continue _fun00015 }
 207:
                            foxtrot = _closure1_slot0;
                            golf = _closure1_slot2;
                            options = golf[offset];
                            options = foxtrot.bind(verify)(options);
                            yankee = options.intl;
                            options = yankee.string;
                            golf = golf[offset];
                            golf = foxtrot.bind(verify)(golf);
                            golf = golf.t;
                            golf = golf.t+2Zcn;
                            yankee = options.bind(yankee)(golf);
                            _fun00016_ip = 271; continue _fun00015;
 261:
                            oscar = _closure3_slot1;
                            yankee = oscar.reason;
 271:
                            oscar = global;
                            oscar = oscar.HermesInternal;
                            options = oscar.concat;
                            golf = '';
                            oscar = ': ';
                            oscar = options.bind(golf)(romeo, oscar, yankee);
                            report['subtitle'] = oscar;
                            entity['header'] = report;
                            report = {};
                            options = _closure1_slot0;
                            tango = _closure1_slot2;
                            oscar = tango[offset];
                            oscar = options.bind(verify)(oscar);
                            golf = oscar.intl;
                            oscar = golf.string;
                            tango = tango[offset];
                            tango = options.bind(verify)(tango);
                            tango = tango.t;
                            tango = tango.Mp6Z2t;
                            tango = oscar.bind(golf)(tango);
                            report['label'] = tango;
                            tango = true;
                            report['isDestructive'] = tango;
                            tango = function() { // Original name: onPress
                                zulu = _closure1_slot1;
                                mike = _closure1_slot2;
                                entity = 12;
                                mike = mike[entity];
                                entity = undefined;
                                report = zulu.bind(entity)(mike);
                                tango = report.unbanUser;
                                mike = _closure2_slot1;
                                zulu = mike.id;
                                mike = _closure3_slot0;
                                mike = mike.id;
                                mike = tango.bind(report)(zulu, mike);
                                return entity;
                            };
                            report['onPress'] = tango;
                            tango = new Array(1);
                            tango[0] = report;
                            entity['options'] = tango;
                            entity = mike.bind(zulu)(entity);
 405:
                            entity = undefined;
                            return entity;
                        }
                    };
                    mike['onPress'] = oscar;
                    entity = tango.bind(report)(zulu, mike);
 326:
                    return entity;
                }
            };
            output = yankee.bind(offset)(mike, zulu);
            zulu = offset.useCallback;
            mike = function(argFoo) {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 13;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.setSearchQuery;
                mike = argFoo;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = new Array(0);
            sequence = zulu.bind(offset)(mike, entity);
            zulu = _closure1_slot12;
            mike = _closure1_slot13;
            entity = {};
            if(!(oscar != verify)) { _fun00008_ip = 947; continue _fun00007 }
 457:
            kilo = '';
            if(!(kilo === update)) { _fun00008_ip = 477; continue _fun00007 }
 465:
            verify = foxtrot.length;
            if(!(backup !== verify)) { _fun00008_ip = 787; continue _fun00007 }
 477:
            yankee = _closure1_slot12;
            offset = _closure1_slot5;
            verify = {};
            control = _closure1_slot14;
            romeo = control.containerInner;
            verify['style'] = romeo;
            source = _closure1_slot11;
            romeo = {};
            control = control.searchField;
            romeo['style'] = control;
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            control = 23;
            control = config[control];
            control = vacuum.bind(tango)(control);
            vacuum = control.SearchField;
            control = {};
            config = 'md';
            control['size'] = config;
            control['onChange'] = sequence;
            control = source.bind(tango)(vacuum, control);
            romeo['children'] = control;
            source = source.bind(tango)(offset, romeo);
            romeo = new Array(2);
            romeo[0] = source;
            if(!(kilo !== update)) { _fun00008_ip = 595; continue _fun00007 }
 586:
            foxtrot = foxtrot.length;
            if(!(backup !== foxtrot)) { _fun00008_ip = 658; continue _fun00007 }
 595:
            kilo = _closure1_slot11;
            backup = _closure1_slot1;
            update = _closure1_slot2;
            foxtrot = 25;
            foxtrot = update[foxtrot];
            backup = backup.bind(tango)(foxtrot);
            foxtrot = {};
            foxtrot['sections'] = echo;
            foxtrot['itemSize'] = result;
            result = 'windowSize';
            foxtrot['estimatedListSize'] = result;
            foxtrot['renderItem'] = output;
            foxtrot['insetEnd'] = sizing;
            foxtrot = kilo.bind(tango)(backup, foxtrot);
            _fun00008_ip = 768; continue _fun00007;
 658:
            sizing = _closure1_slot11;
            kilo = _closure1_slot1;
            source = _closure1_slot2;
            backup = 21;
            backup = source[backup];
            kilo = kilo.bind(tango)(backup);
            backup = {};
            update = _closure1_slot0;
            output = 24;
            output = source[output];
            output = update.bind(tango)(output);
            output = output.NoResults;
            backup['Illustration'] = output;
            output = 19;
            result = source[output];
            result = update.bind(tango)(result);
            echo = result.intl;
            result = echo.string;
            output = source[output];
            output = update.bind(tango)(output);
            output = output.t;
            output = output.z3cK5u;
            output = result.bind(echo)(output);
            backup['body'] = output;
            foxtrot = sizing.bind(tango)(kilo, backup);
 768:
            romeo[1] = foxtrot;
            verify['children'] = romeo;
            verify = yankee.bind(tango)(offset, verify);
            _fun00008_ip = 945; continue _fun00007;
 787:
            romeo = _closure1_slot11;
            yankee = _closure1_slot1;
            output = _closure1_slot2;
            offset = 21;
            offset = output[offset];
            yankee = yankee.bind(tango)(offset);
            offset = {};
            sizing = _closure1_slot0;
            foxtrot = 22;
            foxtrot = output[foxtrot];
            foxtrot = sizing.bind(tango)(foxtrot);
            foxtrot = foxtrot.BansEmpty;
            offset['Illustration'] = foxtrot;
            foxtrot = 19;
            backup = output[foxtrot];
            backup = sizing.bind(tango)(backup);
            result = backup.intl;
            kilo = result.string;
            backup = output[foxtrot];
            backup = sizing.bind(tango)(backup);
            backup = backup.t;
            backup = backup.ZEiY1N;
            backup = kilo.bind(result)(backup);
            offset['title'] = backup;
            backup = output[foxtrot];
            backup = sizing.bind(tango)(backup);
            kilo = backup.intl;
            backup = kilo.string;
            foxtrot = output[foxtrot];
            foxtrot = sizing.bind(tango)(foxtrot);
            foxtrot = foxtrot.t;
            foxtrot = foxtrot.zfCsAw;
            foxtrot = backup.bind(kilo)(foxtrot);
            offset['body'] = foxtrot;
            verify = romeo.bind(tango)(yankee, offset);
 945:
            _fun00008_ip = 985; continue _fun00007;
 947:
            yankee = _closure1_slot11;
            offset = _closure1_slot0;
            romeo = _closure1_slot2;
            report = 20;
            report = romeo[report];
            report = offset.bind(tango)(report);
            offset = report.SceneLoadingIndicator;
            report = {};
            verify = yankee.bind(tango)(offset, report);
 985:
            report = new Array(2);
            report[0] = verify;
            oscar = null;
            if(options) { _fun00008_ip = 1001; continue _fun00007 }
 998:
            oscar = golf;
 1001:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();