// app/modules/main_tabs_v2/native/friends/screens/NewMessageScreen.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        yankee = argBaz;
        zulu = argFred;
        oscar = argPlugh;
        var _closure1_slot0 = report;
        var _closure1_slot1 = yankee;
        var _closure1_slot2 = oscar;
        entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = argFoo;
                var _closure2_slot0 = zulu;
                report = global;
                mike = report.Symbol;
                tango = 'undefined';
                mike = typeof mike;
                mike = tango !== mike;
                if(!mike) { _fun00004_ip = 46; continue _fun00003 }
 30:
                tango = report.Symbol;
                tango = tango.iterator;
                mike = zulu[tango];
 46:
                if(mike) { _fun00004_ip = 55; continue _fun00003 }
 49:
                mike = zulu.@@iterator;
 55:
                if(mike) { _fun00004_ip = 345; continue _fun00003 }
 61:
                oscar = report.Array;
                tango = oscar.isArray;
                oscar = tango.bind(oscar)(zulu);
                tango = mike;
                if(oscar) { _fun00004_ip = 323; continue _fun00003 }
 86:
                options = undefined;
                oscar = undefined;
                if(!zulu) { _fun00004_ip = 283; continue _fun00003 }
 96:
                verify = 'string';
                golf = typeof zulu;
                if(!(verify !== golf)) { _fun00004_ip = 270; continue _fun00003 }
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
                if(!golf) { _fun00004_ip = 163; continue _fun00003 }
 158:
                golf = zulu.constructor;
 163:
                offset = verify;
                if(!golf) { _fun00004_ip = 179; continue _fun00003 }
 169:
                golf = zulu.constructor;
                offset = golf.name;
 179:
                golf = 'Map';
                if(!(golf !== offset)) { _fun00004_ip = 249; continue _fun00003 }
 187:
                golf = 'Set';
                if(!(golf !== offset)) { _fun00004_ip = 249; continue _fun00003 }
 195:
                golf = 'Arguments';
                if(!(golf !== offset)) { _fun00004_ip = 234; continue _fun00003 }
 205:
                verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                golf = verify.test;
                verify = golf.bind(verify)(offset);
                golf = undefined;
                if(!verify) { _fun00004_ip = 247; continue _fun00003 }
 234:
                verify = _closure1_slot26;
                golf = verify.bind(options)(zulu, options);
 247:
                _fun00004_ip = 265; continue _fun00003;
 249:
                offset = report.Array;
                verify = offset.from;
                golf = verify.bind(offset)(zulu);
 265:
                oscar = golf;
                _fun00004_ip = 283; continue _fun00003;
 270:
                golf = _closure1_slot26;
                oscar = golf.bind(options)(zulu, options);
 283:
                tango = oscar;
                if(tango) { _fun00004_ip = 323; continue _fun00003 }
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
                if(!tango) { _fun00004_ip = 330; continue _fun00003 }
 326:
                _closure2_slot0 = tango;
 330:
                tango = 0;
                var _closure2_slot1 = tango;
                entity = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        mike = _closure2_slot1;
                        entity = _closure2_slot0;
                        entity = entity.length;
                        if(!(!(mike >= entity))) { _fun00006_ip = 56; continue _fun00005 }
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
                        _fun00006_ip = 67; continue _fun00005;
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
        var _closure1_slot25 = entity;
        entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tango = argFoo;
                entity = null;
                zulu = undefined;
                entity = entity == zulu;
                if(entity) { _fun00008_ip = 23; continue _fun00007 }
 14:
                mike = tango.length;
                entity = zulu > mike;
 23:
                mike = undefined;
                if(!entity) { _fun00008_ip = 33; continue _fun00007 }
 28:
                mike = tango.length;
 33:
                entity = global;
                entity = entity.Array;
                entity = entity.bind(zulu)(mike);
                zulu = 0;
                report = zulu < mike;
                if(!report) { _fun00008_ip = 70; continue _fun00007 }
 55:
                report = tango[zulu];
                entity[zulu] = report;
                zulu = zulu + 1;
                if(zulu < mike) { _fun00008_ip = 55; continue _fun00007 }
 70:
                return entity;
            }
        };
        var _closure1_slot26 = entity;
        entity = function(argFoo, argBar) { // Original name: isPrivateChannelMatch
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = argFoo;
                entity = argBar;
                mike = entity.recipients;
                zulu = mike.length;
                entity = report.length;
                if(!(zulu === entity)) { _fun00010_ip = 93; continue _fun00009 }
 26:
                entity = _closure1_slot25;
                tango = undefined;
                zulu = entity.bind(tango)(mike);
                mike = zulu.bind(tango)();
                entity = mike.done;
                if(entity) { _fun00010_ip = 89; continue _fun00009 }
 52:
                oscar = mike.value;
                entity = report.includes;
                entity = entity.bind(report)(oscar);
                if(entity) { _fun00010_ip = 74; continue _fun00009 }
 70:
                entity = false;
                return entity;
 74:
                oscar = zulu.bind(tango)();
                entity = oscar.done;
                mike = oscar;
                if(!entity) { _fun00010_ip = 52; continue _fun00009 }
 89:
                entity = true;
                return entity;
 93:
                entity = false;
                return entity;
            }
        };
        var _closure1_slot27 = entity;
        entity = function(argFoo) { // Original name: findLocalMatchingPrivateChannelId
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                mike = argFoo;
                var _closure2_slot0 = mike;
                entity = mike.length;
                zulu = 1;
                if(!(zulu !== entity)) { _fun00012_ip = 135; continue _fun00011 }
 21:
                report = _closure1_slot11;
                tango = report.getSortedChannels;
                oscar = tango.bind(report)();
                report = _closure1_slot4;
                tango = undefined;
                entity = 2;
                entity = report.bind(tango)(oscar, entity);
                oscar = 0;
                tango = entity[oscar];
                report = new Array(2);
                report[0] = tango;
                entity = entity[zulu];
                report[1] = entity;
                entity = report.length;
                entity = oscar < entity;
                zulu = null;
                if(!entity) { _fun00012_ip = 126; continue _fun00011 }
 89:
                options = report[oscar];
                tango = options.find;
                entity = function(argFoo) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        entity = argFoo;
                        tango = entity.channelId;
                        zulu = _closure1_slot8;
                        entity = zulu.getChannel;
                        report = entity.bind(zulu)(tango);
                        entity = null;
                        zulu = entity == report;
                        if(zulu) { _fun00014_ip = 47; continue _fun00013 }
 34:
                        entity = report.isPrivate;
                        entity = entity.bind(report)();
                        zulu = !entity;
 47:
                        entity = !zulu;
                        if(zulu) { _fun00014_ip = 72; continue _fun00013 }
 53:
                        tango = _closure1_slot27;
                        zulu = _closure2_slot0;
                        mike = undefined;
                        entity = tango.bind(mike)(zulu, report);
 72:
                        return entity;
                    }
                };
                entity = tango.bind(options)(entity);
                if(!(zulu == entity)) { _fun00012_ip = 128; continue _fun00011 }
 114:
                oscar = oscar + 1;
                tango = report.length;
                if(oscar < tango) { _fun00012_ip = 89; continue _fun00011 }
 126:
                return zulu;
 128:
                entity = entity.channelId;
                return entity;
 135:
                entity = 0;
                zulu = mike[entity];
                mike = _closure1_slot8;
                entity = mike.getDMFromUserId;
                mike = entity.bind(mike)(zulu);
                entity = null;
                zulu = entity != mike;
                if(!zulu) { _fun00012_ip = 171; continue _fun00011 }
 168:
                entity = mike;
 171:
                return entity;
            }
        };
        var _closure1_slot28 = entity;
        entity = function() { // Original name: _findMatchingPrivateChannelId
            report = undefined;
            entity = undefined;
            tango = _closure1_slot3;
            zulu = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        StartGenerator();
                        zulu = argFoo;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00016_ip = 115; continue _fun00015 }
 10:
                        tango = zulu;
                        mike = _closure1_slot28;
                        golf = undefined;
                        mike = mike.bind(golf)(zulu);
                        zulu = null;
                        if(!(zulu == mike)) { _fun00016_ip = 112; continue _fun00015 }
 33:
                        oscar = tango;
                        options = oscar.length;
                        oscar = 1;
                        if(!(!(options > oscar))) { _fun00016_ip = 109; continue _fun00015 }
 48: // try_start_0
                        oscar = _closure1_slot1;
                        options = _closure1_slot2;
                        report = 19;
                        report = options[report];
                        oscar = oscar.bind(golf)(report);
                        report = oscar.getDMChannel;
                        golf = tango;
                        tango = 0;
                        tango = golf[tango];
                        tango = report.bind(oscar)(tango);
                        SaveGenerator(address=92);
 90:
                        return tango;
 92:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        if(report) { _fun00016_ip = 101; continue _fun00015 }
 98: // try_end0
                        return tango;
 101:
                        return tango;
 104: // catch_target0
                        CatchBlockStart(arg_register=3);
                        return zulu;
 109:
                        return zulu;
 112:
                        return mike;
 115:
                        return entity;
                    }
                };
                return entity;
            };
            tango = tango.bind(report)(zulu);
            _closure1_slot29 = tango;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        var _closure1_slot29 = entity;
        entity = function(argFoo) { // Original name: useChannelForParticipants
            tango = argFoo;
            var _closure2_slot0 = tango;
            oscar = _closure1_slot5;
            report = oscar.useState;
            entity = null;
            oscar = report.bind(oscar)(entity);
            report = _closure1_slot4;
            golf = undefined;
            entity = 2;
            oscar = report.bind(golf)(oscar, entity);
            entity = 0;
            entity = oscar[entity];
            var _closure2_slot1 = entity;
            report = 1;
            report = oscar[report];
            var _closure2_slot2 = report;
            verify = _closure1_slot5;
            options = verify.useEffect;
            oscar = new Array(1);
            oscar[0] = tango;
            report = function() {
                offset = function(argFoo) { // Original name: handleChannelCreate
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        entity = argFoo;
                        oscar = entity.channel;
                        tango = oscar.id;
                        report = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 20;
                        mike = mike[entity];
                        entity = undefined;
                        mike = report.bind(entity)(mike);
                        mike = mike.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                        if(!(tango !== mike)) { _fun00018_ip = 103; continue _fun00017 }
 48:
                        mike = oscar.isPrivate;
                        mike = mike.bind(oscar)();
                        if(!mike) { _fun00018_ip = 103; continue _fun00017 }
 61:
                        report = _closure1_slot27;
                        tango = _closure2_slot0;
                        tango = report.bind(entity)(tango, oscar);
                        if(!tango) { _fun00018_ip = 103; continue _fun00017 }
 81:
                        tango = _closure1_slot28;
                        zulu = _closure2_slot0;
                        zulu = tango.bind(entity)(zulu);
                        mike = _closure2_slot2;
                        mike = mike.bind(entity)(zulu);
 103:
                        return entity;
                    }
                };
                var _closure3_slot0 = offset;
                report = function(argFoo) { // Original name: handleChannelDelete
                    entity = argFoo;
                    var _closure4_slot0 = entity;
                    zulu = _closure2_slot2;
                    entity = undefined;
                    mike = function(argFoo) {
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            zulu = argFoo;
                            tango = _closure1_slot0;
                            mike = _closure1_slot2;
                            entity = 20;
                            mike = mike[entity];
                            entity = undefined;
                            entity = tango.bind(entity)(mike);
                            mike = entity.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                            entity = zulu;
                            if(!(entity !== mike)) { _fun00020_ip = 70; continue _fun00019 }
 41:
                            mike = _closure4_slot0;
                            mike = mike.channel;
                            tango = mike.id;
                            mike = null;
                            if(!(zulu !== tango)) { _fun00020_ip = 67; continue _fun00019 }
 64:
                            mike = zulu;
 67:
                            entity = mike;
 70:
                            return entity;
                        }
                    };
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                var _closure3_slot1 = report;
                tango = _closure1_slot1;
                oscar = _closure1_slot2;
                mike = 21;
                golf = oscar[mike];
                zulu = undefined;
                verify = tango.bind(zulu)(golf);
                options = verify.subscribe;
                golf = 'CHANNEL_CREATE';
                golf = options.bind(verify)(golf, offset);
                mike = oscar[mike];
                tango = tango.bind(zulu)(mike);
                zulu = tango.subscribe;
                mike = 'CHANNEL_DELETE';
                mike = zulu.bind(tango)(mike, report);
                entity = function() {
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 21;
                    mike = report[zulu];
                    entity = undefined;
                    verify = tango.bind(entity)(mike);
                    options = verify.unsubscribe;
                    golf = _closure3_slot0;
                    oscar = 'CHANNEL_CREATE';
                    oscar = options.bind(verify)(oscar, golf);
                    zulu = report[zulu];
                    report = tango.bind(entity)(zulu);
                    tango = report.unsubscribe;
                    zulu = _closure3_slot1;
                    mike = 'CHANNEL_DELETE';
                    mike = tango.bind(report)(mike, zulu);
                    return entity;
                };
                return entity;
            };
            report = options.bind(verify)(report, oscar);
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            report = 22;
            report = options[report];
            options = oscar.bind(golf)(report);
            golf = options.useStateFromStores;
            report = _closure1_slot8;
            oscar = new Array(1);
            oscar[0] = report;
            report = function() {
                zulu = _closure1_slot8;
                mike = zulu.getChannel;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = golf.bind(options)(oscar, report);
            var _closure2_slot3 = oscar;
            verify = _closure1_slot5;
            options = verify.useEffect;
            golf = new Array(2);
            golf[0] = tango;
            golf[1] = oscar;
            report = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    mike = function() { // Original name: _doAction
                        tango = undefined;
                        entity = undefined;
                        zulu = _closure1_slot3;
                        mike = function* () {
                            entity = function* () { // Original name: ?anon_0_
                                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(mike) { _fun00024_ip = 93; continue _fun00023 }
 7:
                                    report = _closure2_slot0;
                                    mike = function() { // Original name: findMatchingPrivateChannelId
                                        entity = undefined;
                                        tango = _closure1_slot29;
                                        zulu = tango.apply;
                                        entity = arguments;
                                        mike = entity;
                                        entity = this;
                                        entity = zulu.bind(tango)(entity, mike);
                                        return entity;
                                    };
                                    zulu = undefined;
                                    mike = mike.bind(zulu)(report);
                                    SaveGenerator(address=34);
 32:
                                    return mike;
 34:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                    if(report) { _fun00024_ip = 90; continue _fun00023 }
 40:
                                    report = _closure2_slot2;
                                    oscar = null;
                                    tango = mike;
                                    if(!(oscar == tango)) { _fun00024_ip = 82; continue _fun00023 }
 53:
                                    golf = _closure1_slot0;
                                    options = _closure1_slot2;
                                    oscar = 20;
                                    oscar = options[oscar];
                                    oscar = golf.bind(zulu)(oscar);
                                    tango = oscar.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
 82:
                                    tango = report.bind(zulu)(tango);
                                    return zulu;
 90:
                                    return mike;
 93:
                                    return entity;
                                }
                            };
                            return entity;
                        };
                        tango = zulu.bind(tango)(mike);
                        _closure3_slot0 = tango;
                        zulu = tango.apply;
                        entity = arguments;
                        mike = entity;
                        entity = this;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    var _closure3_slot0 = mike;
                    mike = _closure2_slot0;
                    tango = mike.length;
                    mike = 0;
                    if(!(mike === tango)) { _fun00022_ip = 46; continue _fun00021 }
 31:
                    report = _closure2_slot2;
                    tango = undefined;
                    mike = null;
                    mike = report.bind(tango)(mike);
                    _fun00022_ip = 115; continue _fun00021;
 46:
                    tango = _closure2_slot3;
                    mike = null;
                    mike = mike != tango;
                    if(!mike) { _fun00022_ip = 73; continue _fun00021 }
 59:
                    report = _closure2_slot3;
                    tango = report.isPrivate;
                    mike = tango.bind(report)();
 73:
                    if(!mike) { _fun00022_ip = 99; continue _fun00021 }
 76:
                    oscar = _closure1_slot27;
                    report = _closure2_slot0;
                    tango = _closure2_slot3;
                    zulu = undefined;
                    mike = oscar.bind(zulu)(report, tango);
 99:
                    if(mike) { _fun00022_ip = 115; continue _fun00021 }
 102:
                    mike = function() { // Original name: doAction
                        entity = undefined;
                        tango = _closure3_slot0;
                        zulu = tango.apply;
                        entity = arguments;
                        mike = entity;
                        entity = this;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    entity = undefined;
                    entity = mike.bind(entity)();
 115:
                    entity = undefined;
                    return entity;
                }
            };
            report = options.bind(verify)(report, golf);
            options = _closure1_slot5;
            golf = options.useEffect;
            report = new Array(2);
            report[0] = tango;
            report[1] = entity;
            tango = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    entity = _closure2_slot1;
                    golf = null;
                    if(!(golf != entity)) { _fun00026_ip = 52; continue _fun00025 }
 13:
                    mike = _closure2_slot1;
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 20;
                    zulu = zulu[entity];
                    entity = undefined;
                    entity = tango.bind(entity)(zulu);
                    entity = entity.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                    if(!(mike === entity)) { _fun00026_ip = 74; continue _fun00025 }
 52:
                    mike = _closure1_slot28;
                    entity = _closure2_slot0;
                    yankee = undefined;
                    entity = mike.bind(yankee)(entity);
                    if(!(golf != entity)) { _fun00026_ip = 78; continue _fun00025 }
 74:
                    entity = undefined;
                    return entity;
 78:
                    mike = _closure1_slot1;
                    romeo = _closure1_slot2;
                    entity = 21;
                    entity = romeo[entity];
                    zulu = mike.bind(yankee)(entity);
                    mike = zulu.dispatch;
                    entity = {};
                    tango = 'CHANNEL_CREATE';
                    entity['type'] = tango;
                    oscar = _closure1_slot7;
                    tango = {};
                    offset = _closure1_slot0;
                    options = 20;
                    options = romeo[options];
                    options = offset.bind(yankee)(options);
                    options = options.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                    tango['id'] = options;
                    options = _closure2_slot0;
                    offset = options.length;
                    options = 1;
                    if(!(options !== offset)) { _fun00026_ip = 173; continue _fun00025 }
 161:
                    options = _closure1_slot15;
                    options = options.GROUP_DM;
                    _fun00026_ip = 183; continue _fun00025;
 173:
                    verify = _closure1_slot15;
                    options = verify.DM;
 183:
                    tango['type'] = options;
                    options = '';
                    tango['name'] = options;
                    tango['guild_id'] = golf;
                    report = _closure2_slot0;
                    tango['recipients'] = report;
                    report = oscar.prototype;
                    report = Object.create(report, {constructor: {value: oscar}});
                    backup = report;
                    foxtrot = tango;
                    tango = new backup[oscar](foxtrot, romeo);
                    tango = tango instanceof Object ? tango : report;
                    entity['channel'] = tango;
                    entity = mike.bind(zulu)(entity);
                    entity = function() {
                        zulu = _closure1_slot1;
                        options = _closure1_slot2;
                        entity = 21;
                        mike = options[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.dispatch;
                        mike = {};
                        report = 'CHANNEL_DELETE';
                        mike['type'] = report;
                        report = {};
                        golf = _closure1_slot0;
                        oscar = 20;
                        oscar = options[oscar];
                        oscar = golf.bind(entity)(oscar);
                        oscar = oscar.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                        report['id'] = oscar;
                        report['guild_id'] = entity;
                        report['parent_id'] = entity;
                        mike['channel'] = report;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    return entity;
                }
            };
            tango = golf.bind(options)(tango, report);
            report = _closure1_slot5;
            tango = report.useEffect;
            zulu = new Array(1);
            zulu[0] = oscar;
            mike = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    mike = _closure2_slot3;
                    entity = null;
                    entity = entity != mike;
                    if(!entity) { _fun00028_ip = 60; continue _fun00027 }
 16:
                    mike = _closure2_slot3;
                    zulu = mike.id;
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 20;
                    tango = tango[mike];
                    mike = undefined;
                    mike = oscar.bind(mike)(tango);
                    mike = mike.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                    entity = zulu === mike;
 60:
                    if(!entity) { _fun00028_ip = 143; continue _fun00027 }
 63:
                    mike = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 21;
                    entity = zulu[entity];
                    tango = undefined;
                    zulu = mike.bind(tango)(entity);
                    mike = zulu.dispatch;
                    entity = {'type': 'LOAD_MESSAGES_SUCCESS', 'channelId': null, 'messages': null, 'isBefore': false, 'isAfter': false, 'hasMoreBefore': false, 'hasMoreAfter': false, 'limit': 0, 'jump': null, 'isStale': false};
                    report = _closure2_slot3;
                    report = report.id;
                    entity['channelId'] = report;
                    report = new Array(0);
                    entity['messages'] = report;
                    entity['jump'] = tango;
                    entity = mike.bind(zulu)(entity);
 143:
                    entity = undefined;
                    return entity;
                }
            };
            mike = tango.bind(report)(mike, zulu);
            return entity;
        };
        var _closure1_slot30 = entity;
        entity = function(argFoo) { // Original name: Header
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                mike = argFoo;
                options = mike.title;
                verify = mike.numInGroup;
                var _closure2_slot0 = verify;
                mike = _closure1_slot23;
                tango = undefined;
                report = mike.bind(tango)();
                golf = _closure1_slot5;
                oscar = golf.useMemo;
                zulu = new Array(1);
                zulu[0] = verify;
                mike = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 25;
                    entity = mike[entity];
                    mike = undefined;
                    entity = zulu.bind(mike)(entity);
                    mike = entity.bind(mike)();
                    zulu = _closure2_slot0;
                    entity = 1;
                    entity = zulu + entity;
                    entity = mike - entity;
                    return entity;
                };
                result = oscar.bind(golf)(mike, zulu);
                oscar = _closure1_slot0;
                romeo = _closure1_slot2;
                mike = 12;
                mike = romeo[mike];
                zulu = oscar.bind(tango)(mike);
                mike = zulu.useAnimatedStyle;
                entity = function() { // Original name: a
                    _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                        zulu = _closure2_slot0;
                        entity = _closure1_slot21;
                        report = zulu >= entity;
                        entity = {};
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        golf = 26;
                        zulu = zulu[golf];
                        oscar = undefined;
                        verify = tango.bind(oscar)(zulu);
                        options = verify.withTiming;
                        zulu = 0;
                        if(!report) { _fun00032_ip = 55; continue _fun00031 }
 52:
                        zulu = 1;
 55:
                        zulu = options.bind(verify)(zulu);
                        entity['opacity'] = zulu;
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        mike = mike[golf];
                        zulu = zulu.bind(oscar)(mike);
                        mike = zulu.withTiming;
                        tango = 0;
                        if(!report) { _fun00032_ip = 94; continue _fun00031 }
 91:
                        tango = 20;
 94:
                        mike = mike.bind(zulu)(tango);
                        entity['maxHeight'] = mike;
                        return entity;
                    }
                };
                golf = {};
                golf['numInGroup'] = verify;
                verify = _closure1_slot21;
                golf['NUM_IN_GROUP_THRESHOLD'] = verify;
                verify = 26;
                verify = romeo[verify];
                verify = oscar.bind(tango)(verify);
                verify = verify.withTiming;
                golf['withTiming'] = verify;
                entity['__closure'] = golf;
                golf = 12426216833792.0;
                entity['__workletHash'] = golf;
                golf = _closure1_slot24;
                entity['__initData'] = golf;
                yankee = mike.bind(zulu)(entity);
                entity = 0;
                verify = entity === result;
                zulu = _closure1_slot19;
                mike = _closure1_slot6;
                entity = {};
                report = report.header;
                entity['style'] = report;
                golf = _closure1_slot18;
                report = 27;
                report = romeo[report];
                report = oscar.bind(tango)(report);
                oscar = report.GenericHeaderTitle;
                report = {};
                report['title'] = options;
                oscar = golf.bind(tango)(oscar, report);
                report = new Array(2);
                report[0] = oscar;
                options = _closure1_slot18;
                golf = _closure1_slot22;
                oscar = {};
                oscar['style'] = yankee;
                yankee = 'text-xs/medium';
                oscar['variant'] = yankee;
                yankee = 'text-muted';
                if(!verify) { _fun00030_ip = 276; continue _fun00029 }
 270:
                yankee = 'status-danger';
 276:
                oscar['color'] = yankee;
                foxtrot = _closure1_slot0;
                backup = _closure1_slot2;
                offset = 28;
                yankee = backup[offset];
                yankee = foxtrot.bind(tango)(yankee);
                romeo = yankee.intl;
                if(verify) { _fun00030_ip = 370; continue _fun00029 }
 308:
                kilo = romeo.formatToPlainString;
                verify = backup[offset];
                verify = foxtrot.bind(tango)(verify);
                verify = verify.t;
                yankee = verify.HrSDPD;
                verify = {};
                sizing = global;
                sizing = sizing.HermesInternal;
                output = sizing.concat;
                sizing = '';
                sizing = output.bind(sizing)(result);
                verify['number'] = sizing;
                verify = kilo.bind(romeo)(yankee, verify);
                _fun00030_ip = 400; continue _fun00029;
 370:
                yankee = romeo.string;
                offset = backup[offset];
                offset = foxtrot.bind(tango)(offset);
                offset = offset.t;
                offset = offset.yiQW1N;
                verify = yankee.bind(romeo)(offset);
 400:
                oscar['children'] = verify;
                oscar = options.bind(tango)(golf, oscar);
                report[1] = oscar;
                entity['children'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        var _closure1_slot31 = entity;
        entity = function(argFoo) { // Original name: ChatPreview
            zulu = argFoo;
            result = zulu.channelId;
            var _closure2_slot0 = result;
            mike = zulu.navigateToChannel;
            kilo = zulu.tagListInputRef;
            zulu = _closure1_slot23;
            tango = undefined;
            yankee = zulu.bind(tango)();
            oscar = _closure1_slot5;
            report = oscar.useRef;
            zulu = null;
            sizing = report.bind(oscar)(zulu);
            golf = _closure1_slot5;
            oscar = golf.useEffect;
            report = new Array(1);
            report[0] = result;
            zulu = function() {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    zulu = _closure2_slot0;
                    mike = null;
                    if(!(mike == zulu)) { _fun00034_ip = 17; continue _fun00033 }
 13:
                    mike = undefined;
                    return mike;
 17:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    zulu = 19;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    zulu = tango.preload;
                    mike = _closure1_slot16;
                    entity = _closure2_slot0;
                    entity = zulu.bind(tango)(mike, entity);
                    entity = function() {
                        report = _closure2_slot0;
                        oscar = _closure1_slot0;
                        tango = _closure1_slot2;
                        entity = 17;
                        zulu = tango[entity];
                        entity = undefined;
                        golf = oscar.bind(entity)(zulu);
                        oscar = golf.disableAutomaticAck;
                        zulu = '';
                        zulu = oscar.bind(golf)(report, zulu);
                        zulu = _closure1_slot1;
                        mike = 18;
                        mike = tango[mike];
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.updateChatOpen;
                        mike = false;
                        mike = zulu.bind(tango)(report, mike);
                        return entity;
                    };
                    return entity;
                }
            };
            zulu = oscar.bind(golf)(zulu, report);
            entity = function(argFoo, argBar) { // Original name: useRedirectToChannelOnMessage
                golf = argFoo;
                oscar = argBar;
                var _closure3_slot0 = golf;
                var _closure3_slot1 = oscar;
                report = _closure1_slot5;
                tango = report.useCallback;
                zulu = new Array(2);
                zulu[0] = golf;
                zulu[1] = oscar;
                mike = function() {
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 23;
                    zulu = zulu[entity];
                    entity = undefined;
                    golf = tango.bind(entity)(zulu);
                    oscar = golf.track;
                    mike = _closure1_slot13;
                    report = mike.MESSAGE_COMPOSER_TRANSITIONED;
                    tango = {};
                    zulu = _closure3_slot0;
                    tango['channel_id'] = zulu;
                    tango = oscar.bind(golf)(report, tango);
                    mike = _closure3_slot1;
                    mike = mike.bind(entity)(zulu);
                    return entity;
                };
                zulu = tango.bind(report)(mike, zulu);
                tango = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 24;
                mike = mike[entity];
                entity = undefined;
                mike = tango.bind(entity)(mike);
                mike = mike.bind(entity)(zulu);
                return entity;
            };
            entity = entity.bind(tango)(result, mike);
            zulu = _closure1_slot18;
            mike = _closure1_slot6;
            entity = {};
            report = yankee.background;
            entity['style'] = report;
            golf = _closure1_slot18;
            oscar = _closure1_slot20;
            report = {};
            offset = _closure1_slot19;
            verify = _closure1_slot6;
            options = {};
            yankee = yankee.container;
            options['style'] = yankee;
            backup = _closure1_slot18;
            foxtrot = _closure1_slot1;
            output = _closure1_slot2;
            yankee = 29;
            yankee = output[yankee];
            foxtrot = foxtrot.bind(tango)(yankee);
            yankee = {'guildId': null, 'channelId': null, 'chatInputRef': null, 'HACK_fixModalInteraction': true, 'alwaysRespectKeyboard': true, 'screenIndex': 'new-message'};
            echo = _closure1_slot16;
            yankee['guildId'] = echo;
            yankee['channelId'] = result;
            yankee['chatInputRef'] = sizing;
            yankee['secondaryTextFieldRef'] = kilo;
            foxtrot = backup.bind(tango)(foxtrot, yankee);
            yankee = new Array(2);
            yankee[0] = foxtrot;
            backup = _closure1_slot18;
            sizing = _closure1_slot0;
            romeo = 30;
            romeo = output[romeo];
            romeo = sizing.bind(tango)(romeo);
            foxtrot = romeo.PortalKeyboardRenderer;
            romeo = {};
            kilo = 16;
            kilo = output[kilo];
            sizing = sizing.bind(tango)(kilo);
            kilo = sizing.isAndroid;
            kilo = kilo.bind(sizing)();
            romeo['portal'] = kilo;
            romeo = backup.bind(tango)(foxtrot, romeo);
            yankee[1] = romeo;
            options['children'] = yankee;
            options = offset.bind(tango)(verify, options);
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        var _closure1_slot32 = entity;
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
        tango = oscar[romeo];
        tango = yankee.bind(entity)(tango);
        var _closure1_slot4 = tango;
        tango = 2;
        golf = oscar[tango];
        tango = argCorge;
        tango = tango.bind(entity)(golf);
        var _closure1_slot5 = tango;
        tango = 3;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        tango = tango.View;
        var _closure1_slot6 = tango;
        tango = 4;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        tango = tango.PrivateChannelRecord;
        var _closure1_slot7 = tango;
        tango = 5;
        golf = oscar[tango];
        golf = yankee.bind(entity)(golf);
        var _closure1_slot8 = golf;
        golf = 6;
        golf = oscar[golf];
        golf = yankee.bind(entity)(golf);
        var _closure1_slot9 = golf;
        golf = 7;
        golf = oscar[golf];
        golf = yankee.bind(entity)(golf);
        var _closure1_slot10 = golf;
        golf = 8;
        golf = oscar[golf];
        golf = yankee.bind(entity)(golf);
        var _closure1_slot11 = golf;
        golf = 9;
        golf = oscar[golf];
        golf = report.bind(entity)(golf);
        golf = golf.UserRowModes;
        var _closure1_slot12 = golf;
        golf = 10;
        golf = oscar[golf];
        golf = report.bind(entity)(golf);
        options = golf.AnalyticEvents;
        var _closure1_slot13 = options;
        options = golf.AnalyticsSections;
        var _closure1_slot14 = options;
        options = golf.ChannelTypes;
        var _closure1_slot15 = options;
        options = golf.ME;
        var _closure1_slot16 = options;
        golf = golf.Routes;
        var _closure1_slot17 = golf;
        golf = 11;
        options = oscar[golf];
        options = report.bind(entity)(options);
        options = options.jsx;
        var _closure1_slot18 = options;
        options = oscar[golf];
        options = report.bind(entity)(options);
        options = options.jsxs;
        var _closure1_slot19 = options;
        golf = oscar[golf];
        golf = report.bind(entity)(golf);
        golf = golf.Fragment;
        var _closure1_slot20 = golf;
        var _closure1_slot21 = tango;
        tango = 12;
        tango = oscar[tango];
        options = yankee.bind(entity)(tango);
        golf = options.createAnimatedComponent;
        tango = 13;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        tango = tango.Text;
        tango = golf.bind(options)(tango);
        var _closure1_slot22 = tango;
        tango = 14;
        tango = oscar[tango];
        options = report.bind(entity)(tango);
        golf = options.createStyles;
        tango = {};
        verify = {};
        verify['flex'] = romeo;
        tango['container'] = verify;
        verify = {};
        verify['flex'] = romeo;
        offset = 15;
        foxtrot = oscar[offset];
        foxtrot = yankee.bind(entity)(foxtrot);
        foxtrot = foxtrot.colors;
        foxtrot = foxtrot.BG_BASE_PRIMARY;
        verify['backgroundColor'] = foxtrot;
        tango['background'] = verify;
        verify = {};
        foxtrot = 'column';
        verify['flexDirection'] = foxtrot;
        foxtrot = 16;
        foxtrot = oscar[foxtrot];
        backup = report.bind(entity)(foxtrot);
        foxtrot = backup.isAndroid;
        backup = foxtrot.bind(backup)();
        foxtrot = 'center';
        if(!backup) { _fun00002_ip = 604; continue _fun00001 }
 598:
        foxtrot = 'flex-start';
 604:
        verify['alignItems'] = foxtrot;
        tango['header'] = verify;
        verify = {};
        foxtrot = 24;
        verify['marginTop'] = foxtrot;
        tango['loading'] = verify;
        verify = {'flexGrow': 1, 'justifyContent': 'center'};
        tango['emptyContainer'] = verify;
        verify = {};
        verify['flexGrow'] = romeo;
        tango['emptyKeyboardView'] = verify;
        verify = {'marginBottom': null, 'flexDirection': 'row', 'justifyContent': 'center', 'width': '100%'};
        offset = oscar[offset];
        offset = yankee.bind(entity)(offset);
        offset = offset.spacing;
        offset = offset.PX_16;
        verify['marginBottom'] = offset;
        tango['addFriendsButtonContainer'] = verify;
        tango = golf.bind(options)(tango);
        var _closure1_slot23 = tango;
        tango = {};
        golf = 'function NewMessageScreenTsx1(){const{numInGroup,NUM_IN_GROUP_THRESHOLD,withTiming}=this.__closure;const show=numInGroup>=NUM_IN_GROUP_THRESHOLD;return{opacity:withTiming(show?1:0),maxHeight:withTiming(show?20:0)};}';
        tango['code'] = golf;
        var _closure1_slot24 = tango;
        tango = 46;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'modules/main_tabs_v2/native/friends/screens/NewMessageScreen.tsx';
        tango = report.bind(oscar)(tango);
        mike = function(argFoo) { // Original name: NewMessageScreen
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                entity = argFoo;
                sequence = entity.navigation;
                var _closure2_slot0 = sequence;
                entity = entity.route;
                entity = entity.params;
                yankee = entity.defaultSelectedUserId;
                tango = undefined;
                var _closure2_slot3 = tango;
                var _closure2_slot4 = tango;
                var _closure2_slot5 = tango;
                var _closure2_slot6 = tango;
                var _closure2_slot7 = tango;
                var _closure2_slot8 = tango;
                var _closure2_slot9 = tango;
                var _closure2_slot10 = tango;
                var _closure2_slot11 = tango;
                entity = _closure1_slot23;
                offset = entity.bind(tango)();
                var _closure2_slot1 = offset;
                oscar = _closure1_slot1;
                golf = _closure1_slot2;
                entity = 31;
                mike = golf[entity];
                report = oscar.bind(tango)(mike);
                mike = 32;
                mike = golf[mike];
                mike = oscar.bind(tango)(mike);
                mike = mike.NEW_MESSAGE_COMPOSER;
                mike = report.bind(tango)(mike);
                report = mike.analyticsLocations;
                mike = 33;
                mike = golf[mike];
                mike = oscar.bind(tango)(mike);
                mike = mike.bind(tango)();
                verify = mike.bottom;
                var _closure2_slot2 = verify;
                options = _closure1_slot5;
                golf = options.useEffect;
                oscar = function() {
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 23;
                    zulu = zulu[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.track;
                    mike = _closure1_slot13;
                    mike = mike.MESSAGE_COMPOSER_OPENED;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                mike = new Array(0);
                mike = golf.bind(options)(oscar, mike);
                golf = _closure1_slot5;
                oscar = golf.useState;
                record = null;
                if(!(record == yankee)) { _fun00036_ip = 207; continue _fun00035 }
 201:
                mike = new Array(0);
                _fun00036_ip = 218; continue _fun00035;
 207:
                options = new Array(1);
                options[0] = yankee;
                mike = options;
 218:
                oscar = oscar.bind(golf)(mike);
                mike = _closure1_slot4;
                romeo = 2;
                mike = mike.bind(tango)(oscar, romeo);
                golf = 0;
                sizing = mike[golf];
                _closure2_slot3 = sizing;
                options = 1;
                mike = mike[options];
                _closure2_slot4 = mike;
                oscar = _closure1_slot5;
                mike = oscar.useState;
                foxtrot = false;
                oscar = mike.bind(oscar)(foxtrot);
                mike = _closure1_slot4;
                oscar = mike.bind(tango)(oscar, romeo);
                mike = oscar[golf];
                oscar = oscar[options];
                _closure2_slot5 = oscar;
                yankee = _closure1_slot5;
                oscar = yankee.useState;
                yankee = oscar.bind(yankee)(foxtrot);
                oscar = _closure1_slot4;
                oscar = oscar.bind(tango)(yankee, romeo);
                foxtrot = oscar[golf];
                oscar = oscar[options];
                _closure2_slot6 = oscar;
                oscar = _closure1_slot30;
                vacuum = oscar.bind(tango)(sizing);
                _closure2_slot7 = vacuum;
                options = _closure1_slot5;
                oscar = options.useRef;
                echo = oscar.bind(options)(record);
                romeo = _closure1_slot5;
                yankee = romeo.useLayoutEffect;
                options = new Array(3);
                options[0] = sequence;
                oscar = sizing.length;
                options[1] = oscar;
                options[2] = vacuum;
                oscar = function() {
                    zulu = _closure2_slot0;
                    mike = zulu.setOptions;
                    entity = {};
                    report = function(argFoo) { // Original name: headerTitle
                        entity = argFoo;
                        entity = entity.children;
                        tango = _closure1_slot18;
                        zulu = _closure1_slot31;
                        mike = {};
                        report = _closure2_slot3;
                        report = report.length;
                        mike['numInGroup'] = report;
                        mike['title'] = entity;
                        entity = undefined;
                        entity = tango.bind(entity)(zulu, mike);
                        return entity;
                    };
                    entity['headerTitle'] = report;
                    tango = function() { // Original name: headerRight
                        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                            mike = _closure2_slot7;
                            golf = null;
                            entity = null;
                            if(!(golf !== mike)) { _fun00038_ip = 107; continue _fun00037 }
 15:
                            tango = _closure2_slot7;
                            options = _closure1_slot0;
                            report = _closure1_slot2;
                            zulu = 20;
                            zulu = report[zulu];
                            report = undefined;
                            zulu = options.bind(report)(zulu);
                            zulu = zulu.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                            entity = null;
                            if(!(tango !== zulu)) { _fun00038_ip = 107; continue _fun00037 }
 56:
                            tango = _closure1_slot18;
                            zulu = _closure1_slot1;
                            golf = _closure1_slot2;
                            mike = 34;
                            mike = golf[mike];
                            zulu = zulu.bind(report)(mike);
                            mike = {};
                            oscar = _closure2_slot7;
                            mike['channelId'] = oscar;
                            oscar = 'new-message';
                            mike['screenIndex'] = oscar;
                            entity = tango.bind(report)(zulu, mike);
 107:
                            return entity;
                        }
                    };
                    entity['headerRight'] = tango;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                oscar = yankee.bind(romeo)(oscar, options);
                romeo = _closure1_slot5;
                yankee = romeo.useCallback;
                options = new Array(1);
                options[0] = sequence;
                oscar = function(argFoo) {
                    mike = _closure2_slot0;
                    entity = mike.goBack;
                    entity = entity.bind(mike)();
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 35;
                    zulu = zulu[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.transitionTo;
                    golf = _closure1_slot17;
                    oscar = golf.CHANNEL;
                    report = _closure1_slot16;
                    mike = argFoo;
                    mike = oscar.bind(golf)(report, mike);
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                control = yankee.bind(romeo)(oscar, options);
                _closure2_slot8 = control;
                romeo = _closure1_slot5;
                yankee = romeo.useCallback;
                oscar = function() {
                    tango = _closure1_slot3;
                    zulu = undefined;
                    mike = function* (argFoo) {
                        entity = function* (argFoo) { // Original name: ?anon_0_
                            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                                StartGenerator();
                                mike = argFoo;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                if(zulu) { _fun00040_ip = 448; continue _fun00039 }
 13:
                                tango = _closure1_slot7;
                                tango = mike instanceof tango;
                                if(tango) { _fun00040_ip = 384; continue _fun00039 }
 30:
                                oscar = _closure1_slot9;
                                report = oscar.isFriend;
                                tango = mike.id;
                                tango = report.bind(oscar)(tango);
                                if(tango) { _fun00040_ip = 161; continue _fun00039 }
 53:
                                report = _closure1_slot1;
                                oscar = _closure1_slot2;
                                tango = 19;
                                tango = oscar[tango];
                                oscar = undefined;
                                golf = report.bind(oscar)(tango);
                                report = golf.getOrEnsurePrivateChannel;
                                tango = mike.id;
                                tango = report.bind(golf)(tango);
                                SaveGenerator(address=95);
 93:
                                return tango;
 95:
                                ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                                if(report) { _fun00040_ip = 158; continue _fun00039 }
 101:
                                golf = _closure1_slot1;
                                options = _closure1_slot2;
                                report = 23;
                                report = options[report];
                                options = golf.bind(oscar)(report);
                                golf = options.track;
                                report = _closure1_slot13;
                                report = report.MESSAGE_COMPOSER_SEARCH_RESULT_CLICKED;
                                report = golf.bind(options)(report);
                                report = _closure2_slot8;
                                report = report.bind(oscar)(tango);
                                report = undefined;
                                return report;
 158:
                                return tango;
 161:
                                golf = _closure2_slot3;
                                oscar = golf.indexOf;
                                tango = mike.id;
                                golf = oscar.bind(golf)(tango);
                                yankee = _closure2_slot3;
                                options = new Array(0);
                                offset = 0;
                                romeo = options;
                                tango = arraySpread(romeo, yankee, offset);
                                tango = -1;
                                if(!(tango !== golf)) { _fun00040_ip = 227; continue _fun00039 }
 210:
                                oscar = options.splice;
                                tango = 1;
                                tango = oscar.bind(options)(golf, tango);
                                _fun00040_ip = 288; continue _fun00039;
 227:
                                tango = _closure2_slot3;
                                golf = tango.length;
                                verify = _closure1_slot1;
                                oscar = _closure1_slot2;
                                tango = 25;
                                tango = oscar[tango];
                                oscar = undefined;
                                tango = verify.bind(oscar)(tango);
                                verify = tango.bind(oscar)();
                                tango = 1;
                                tango = verify - tango;
                                if(!(!(golf >= tango))) { _fun00040_ip = 313; continue _fun00039 }
 273:
                                golf = options.push;
                                tango = mike.id;
                                tango = golf.bind(options)(tango);
 288:
                                golf = _closure2_slot4;
                                tango = undefined;
                                golf = golf.bind(tango)(options);
                                golf = _closure2_slot6;
                                report = false;
                                report = golf.bind(tango)(report);
                                return tango;
 313:
                                report = _closure1_slot0;
                                golf = _closure1_slot2;
                                tango = 36;
                                tango = golf[tango];
                                report = report.bind(oscar)(tango);
                                tango = report.showMaxGroupMembers;
                                tango = tango.bind(report)();
                                report = _closure1_slot1;
                                tango = 23;
                                tango = golf[tango];
                                oscar = report.bind(oscar)(tango);
                                report = oscar.track;
                                tango = _closure1_slot13;
                                tango = tango.MESSAGE_COMPOSER_MAX_USERS_ADDED;
                                tango = report.bind(oscar)(tango);
                                tango = undefined;
                                return tango;
 384:
                                oscar = _closure1_slot1;
                                report = _closure1_slot2;
                                tango = 23;
                                report = report[tango];
                                tango = undefined;
                                oscar = oscar.bind(tango)(report);
                                report = oscar.track;
                                zulu = _closure1_slot13;
                                zulu = zulu.MESSAGE_COMPOSER_SEARCH_RESULT_CLICKED;
                                zulu = report.bind(oscar)(zulu);
                                zulu = _closure2_slot8;
                                mike = mike.id;
                                mike = zulu.bind(tango)(mike);
                                mike = undefined;
                                return mike;
 448:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    mike = tango.bind(zulu)(mike);
                    var _closure3_slot0 = mike;
                    entity = function(argFoo) {
                        entity = undefined;
                        tango = _closure3_slot0;
                        zulu = tango.apply;
                        entity = arguments;
                        mike = entity;
                        entity = this;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    return entity;
                };
                options = oscar.bind(tango)();
                oscar = new Array(2);
                oscar[0] = sizing;
                oscar[1] = control;
                result = yankee.bind(romeo)(options, oscar);
                romeo = _closure1_slot5;
                yankee = romeo.useCallback;
                options = function() {
                    zulu = _closure2_slot6;
                    entity = undefined;
                    mike = function(argFoo) {
                        entity = argFoo;
                        entity = !entity;
                        return entity;
                    };
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                oscar = new Array(0);
                romeo = yankee.bind(romeo)(options, oscar);
                backup = _closure1_slot5;
                yankee = backup.useCallback;
                options = function() {
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 23;
                    zulu = zulu[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.track;
                    mike = _closure1_slot13;
                    mike = mike.MESSAGE_COMPOSER_OPENED;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                oscar = new Array(0);
                yankee = yankee.bind(backup)(options, oscar);
                kilo = _closure1_slot5;
                backup = kilo.useCallback;
                options = function(argFoo) {
                    tango = _closure2_slot6;
                    entity = undefined;
                    zulu = false;
                    zulu = tango.bind(entity)(zulu);
                    zulu = _closure2_slot5;
                    mike = argFoo;
                    tango = mike.length;
                    mike = 0;
                    mike = tango > mike;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                oscar = new Array(0);
                output = backup.bind(kilo)(options, oscar);
                kilo = _closure1_slot5;
                backup = kilo.useMemo;
                options = new Array(1);
                options[0] = sizing;
                oscar = function() {
                    zulu = _closure2_slot3;
                    mike = zulu.join;
                    entity = ':';
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                source = backup.bind(kilo)(oscar, options);
                backup = _closure1_slot0;
                options = _closure1_slot2;
                oscar = 22;
                options = options[oscar];
                config = backup.bind(tango)(options);
                kilo = config.useStateFromStores;
                options = _closure1_slot10;
                backup = new Array(1);
                backup[0] = options;
                options = function() {
                    entity = _closure1_slot10;
                    entity = entity.keyboardOpen;
                    return entity;
                };
                config = kilo.bind(config)(backup, options);
                _closure2_slot9 = config;
                kilo = undefined;
                if(mike) { _fun00036_ip = 721; continue _fun00035 }
 641:
                kilo = undefined;
                if(foxtrot) { _fun00036_ip = 721; continue _fun00035 }
 646:
                mike = sizing.length;
                mike = mike > golf;
                kilo = undefined;
                if(!mike) { _fun00036_ip = 721; continue _fun00035 }
 660:
                backup = _closure1_slot18;
                options = _closure1_slot32;
                mike = {};
                if(!(record == vacuum)) { _fun00036_ip = 700; continue _fun00035 }
 674:
                context = _closure1_slot0;
                papa = _closure1_slot2;
                record = 20;
                record = papa[record];
                record = context.bind(tango)(record);
                vacuum = record.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
 700:
                mike['channelId'] = vacuum;
                mike['navigateToChannel'] = control;
                mike['tagListInputRef'] = echo;
                kilo = backup.bind(tango)(options, mike, source);
 721:
                mike = sizing.length;
                backup = golf === mike;
                _closure2_slot10 = backup;
                mike = _closure1_slot0;
                vacuum = _closure1_slot2;
                oscar = vacuum[oscar];
                source = mike.bind(tango)(oscar);
                options = source.useStateFromStores;
                oscar = _closure1_slot9;
                golf = new Array(1);
                golf[0] = oscar;
                oscar = function() {
                    mike = _closure1_slot9;
                    entity = mike.getRelationshipCount;
                    mike = entity.bind(mike)();
                    entity = 0;
                    entity = mike > entity;
                    return entity;
                };
                oscar = options.bind(source)(golf, oscar);
                _closure2_slot11 = oscar;
                source = _closure1_slot5;
                options = source.useMemo;
                golf = new Array(3);
                golf[0] = sequence;
                golf[1] = oscar;
                golf[2] = backup;
                oscar = function() {
                    _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                        entity = new Array(0);
                        zulu = _closure2_slot10;
                        if(!zulu) { _fun00042_ip = 309; continue _fun00041 }
 19:
                        mike = _closure2_slot11;
                        if(!mike) { _fun00042_ip = 168; continue _fun00041 }
 29:
                        zulu = entity.push;
                        mike = {};
                        golf = _closure1_slot1;
                        offset = _closure1_slot2;
                        oscar = 37;
                        oscar = offset[oscar];
                        verify = undefined;
                        oscar = golf.bind(verify)(oscar);
                        mike['icon'] = oscar;
                        options = _closure1_slot0;
                        report = 38;
                        report = offset[report];
                        report = options.bind(verify)(report);
                        report = report.GroupPlusIcon;
                        mike['IconComponent'] = report;
                        report = 28;
                        oscar = offset[report];
                        oscar = options.bind(verify)(oscar);
                        golf = oscar.intl;
                        oscar = golf.string;
                        report = offset[report];
                        report = options.bind(verify)(report);
                        report = report.t;
                        report = report.3hF1W1;
                        report = oscar.bind(golf)(report);
                        mike['label'] = report;
                        report = 'blurple';
                        mike['iconVariant'] = report;
                        report = function() { // Original name: onPress
                            tango = _closure2_slot0;
                            zulu = tango.navigate;
                            mike = {};
                            entity = false;
                            mike['allowNameEdit'] = entity;
                            entity = _closure1_slot14;
                            entity = entity.NEW_MESSAGE_COMPOSER;
                            mike['locationPage'] = entity;
                            entity = 'gdm';
                            entity = zulu.bind(tango)(entity, mike);
                            return entity;
                        };
                        mike['onPress'] = report;
                        mike = zulu.bind(entity)(mike);
 168:
                        zulu = entity.push;
                        mike = {};
                        golf = _closure1_slot1;
                        offset = _closure1_slot2;
                        oscar = 39;
                        oscar = offset[oscar];
                        verify = undefined;
                        oscar = golf.bind(verify)(oscar);
                        mike['icon'] = oscar;
                        options = _closure1_slot0;
                        report = 40;
                        report = offset[report];
                        report = options.bind(verify)(report);
                        report = report.UserPlusIcon;
                        mike['IconComponent'] = report;
                        report = 28;
                        oscar = offset[report];
                        oscar = options.bind(verify)(oscar);
                        golf = oscar.intl;
                        oscar = golf.string;
                        report = offset[report];
                        report = options.bind(verify)(report);
                        report = report.t;
                        report = report.9nbDJy;
                        report = oscar.bind(golf)(report);
                        mike['label'] = report;
                        report = 'boosting-pink';
                        mike['iconVariant'] = report;
                        tango = function() { // Original name: onPress
                            tango = _closure2_slot0;
                            zulu = tango.navigate;
                            mike = {};
                            entity = 'New Message Composer';
                            mike['sourcePage'] = entity;
                            entity = 'add-friends';
                            entity = zulu.bind(tango)(entity, mike);
                            entity = undefined;
                            return entity;
                        };
                        mike['onPress'] = tango;
                        mike = zulu.bind(entity)(mike);
 309:
                        return entity;
                    }
                };
                control = options.bind(source)(oscar, golf);
                source = _closure1_slot5;
                options = source.useMemo;
                golf = new Array(1);
                golf[0] = sequence;
                oscar = function() {
                    mike = {};
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 39;
                    zulu = golf[zulu];
                    oscar = undefined;
                    zulu = tango.bind(oscar)(zulu);
                    mike['icon'] = zulu;
                    report = _closure1_slot0;
                    entity = 40;
                    entity = golf[entity];
                    entity = report.bind(oscar)(entity);
                    entity = entity.UserPlusIcon;
                    mike['IconComponent'] = entity;
                    entity = 28;
                    zulu = golf[entity];
                    zulu = report.bind(oscar)(zulu);
                    tango = zulu.intl;
                    zulu = tango.string;
                    entity = golf[entity];
                    entity = report.bind(oscar)(entity);
                    entity = entity.t;
                    entity = entity.9nbDJy;
                    entity = zulu.bind(tango)(entity);
                    mike['label'] = entity;
                    entity = 'boosting-pink';
                    mike['iconVariant'] = entity;
                    entity = function() { // Original name: onPress
                        tango = _closure2_slot0;
                        zulu = tango.navigate;
                        mike = {};
                        entity = 'New Message Composer';
                        mike['sourcePage'] = entity;
                        entity = 'add-friends';
                        entity = zulu.bind(tango)(entity, mike);
                        entity = undefined;
                        return entity;
                    };
                    mike['onPress'] = entity;
                    entity = new Array(1);
                    entity[0] = mike;
                    return entity;
                };
                source = options.bind(source)(oscar, golf);
                options = _closure1_slot5;
                golf = options.useMemo;
                oscar = new Array(4);
                oscar[0] = config;
                oscar[1] = sequence;
                oscar[2] = offset;
                oscar[3] = verify;
                zulu = function() {
                    _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                        tango = _closure1_slot18;
                        zulu = _closure1_slot20;
                        mike = {};
                        oscar = _closure1_slot1;
                        report = _closure1_slot2;
                        entity = 41;
                        report = report[entity];
                        entity = undefined;
                        oscar = oscar.bind(entity)(report);
                        report = {};
                        golf = _closure2_slot1;
                        options = golf.emptyKeyboardView;
                        golf = new Array(2);
                        golf[0] = options;
                        options = {};
                        yankee = _closure2_slot9;
                        verify = undefined;
                        if(yankee) { _fun00044_ip = 73; continue _fun00043 }
 69:
                        verify = _closure2_slot2;
 73:
                        options['paddingBottom'] = verify;
                        golf[1] = options;
                        report['style'] = golf;
                        verify = _closure1_slot18;
                        options = _closure1_slot1;
                        source = _closure1_slot2;
                        golf = 42;
                        golf = source[golf];
                        options = options.bind(entity)(golf);
                        golf = {};
                        update = _closure1_slot0;
                        output = 28;
                        yankee = source[output];
                        yankee = update.bind(entity)(yankee);
                        backup = yankee.intl;
                        romeo = backup.string;
                        yankee = source[output];
                        yankee = update.bind(entity)(yankee);
                        yankee = yankee.t;
                        yankee = yankee.1ESycn;
                        yankee = romeo.bind(backup)(yankee);
                        golf['title'] = yankee;
                        yankee = source[output];
                        yankee = update.bind(entity)(yankee);
                        backup = yankee.intl;
                        romeo = backup.string;
                        yankee = source[output];
                        yankee = update.bind(entity)(yankee);
                        yankee = yankee.t;
                        yankee = yankee.5IlFpq;
                        yankee = romeo.bind(backup)(yankee);
                        golf['subtitle'] = yankee;
                        backup = _closure2_slot1;
                        offset = backup.emptyContainer;
                        golf['containerStyle'] = offset;
                        sizing = true;
                        golf['fullHeight'] = sizing;
                        romeo = _closure1_slot18;
                        yankee = _closure1_slot6;
                        offset = {};
                        backup = backup.addFriendsButtonContainer;
                        offset['style'] = backup;
                        kilo = _closure1_slot18;
                        foxtrot = 43;
                        foxtrot = source[foxtrot];
                        foxtrot = update.bind(entity)(foxtrot);
                        backup = foxtrot.Button;
                        foxtrot = {};
                        result = source[output];
                        result = update.bind(entity)(result);
                        echo = result.intl;
                        result = echo.string;
                        output = source[output];
                        output = update.bind(entity)(output);
                        output = output.t;
                        output = output.zIJnAw;
                        output = result.bind(echo)(output);
                        foxtrot['text'] = output;
                        output = 'lg';
                        foxtrot['size'] = output;
                        output = function() { // Original name: onPress
                            tango = _closure2_slot0;
                            zulu = tango.navigate;
                            mike = {};
                            entity = 'New Message Composer No Results';
                            mike['sourcePage'] = entity;
                            entity = 'add-friends';
                            entity = zulu.bind(tango)(entity, mike);
                            return entity;
                        };
                        foxtrot['onPress'] = output;
                        foxtrot['grow'] = sizing;
                        foxtrot = kilo.bind(entity)(backup, foxtrot);
                        offset['children'] = foxtrot;
                        offset = romeo.bind(entity)(yankee, offset);
                        golf['children'] = offset;
                        golf = verify.bind(entity)(options, golf);
                        report['children'] = golf;
                        report = tango.bind(entity)(oscar, report);
                        mike['children'] = report;
                        entity = tango.bind(entity)(zulu, mike);
                        return entity;
                    }
                };
                offset = golf.bind(options)(zulu, oscar);
                zulu = _closure1_slot19;
                entity = vacuum[entity];
                entity = mike.bind(tango)(entity);
                mike = entity.AnalyticsLocationProvider;
                entity = {};
                entity['value'] = report;
                options = _closure1_slot18;
                golf = _closure1_slot1;
                report = 44;
                report = vacuum[report];
                oscar = golf.bind(tango)(report);
                verify = true;
                report = {'absolute': true, 'tall': true, 'wide': true};
                oscar = options.bind(tango)(oscar, report);
                report = new Array(2);
                report[0] = oscar;
                options = _closure1_slot18;
                oscar = 45;
                oscar = vacuum[oscar];
                golf = golf.bind(tango)(oscar);
                oscar = {};
                oscar['actions'] = control;
                oscar['noResultActions'] = source;
                update = _closure1_slot12;
                update = update.NONE;
                oscar['rowMode'] = update;
                oscar['tagListInputRef'] = echo;
                oscar['onSelectUser'] = result;
                oscar['onQueryChanged'] = output;
                oscar['selectedUserIds'] = sizing;
                oscar['withAffinitySuggestions'] = verify;
                oscar['overrideResults'] = kilo;
                oscar['withGuildMembers'] = backup;
                oscar['withGDMNames'] = verify;
                oscar['forceSearchResults'] = foxtrot;
                oscar['onForceSearchResults'] = romeo;
                oscar['onSearchFocus'] = yankee;
                oscar['defaultNoResultsFound'] = offset;
                oscar['autoFocusSearch'] = verify;
                oscar = options.bind(tango)(golf, oscar);
                report[1] = oscar;
                entity['children'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        zulu['default'] = mike;
        return entity;
    }
})();