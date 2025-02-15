// app/modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    offset = argBaz;
    yankee = argCorge;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = yankee;
    var _closure1_slot3 = options;
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
            verify = _closure1_slot19;
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
            golf = _closure1_slot19;
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
    var _closure1_slot18 = entity;
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
    var _closure1_slot19 = entity;
    report = function(argFoo, argBar, argBaz) { // Original name: useListingEditState
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            verify = argFoo;
            mike = argBar;
            zulu = argBaz;
            var _closure2_slot0 = verify;
            var _closure2_slot1 = mike;
            var _closure2_slot2 = zulu;
            golf = _closure1_slot10;
            tango = undefined;
            oscar = function(argFoo) {
                entity = argFoo;
                entity = entity.setListing;
                return entity;
            };
            offset = golf.bind(tango)(oscar);
            var _closure2_slot3 = offset;
            options = _closure1_slot6;
            golf = options.useCallback;
            oscar = new Array(4);
            oscar[0] = offset;
            oscar[1] = verify;
            oscar[2] = mike;
            oscar[3] = zulu;
            mike = function(argFoo) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                tango = _closure2_slot3;
                zulu = _closure2_slot0;
                entity = undefined;
                mike = function(argFoo) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        report = argFoo;
                        entity = null;
                        tango = entity == report;
                        zulu = undefined;
                        mike = undefined;
                        if(tango) { _fun00010_ip = 27; continue _fun00009 }
 16:
                        tango = _closure2_slot1;
                        mike = report[tango];
 27:
                        if(!(entity == mike)) { _fun00010_ip = 38; continue _fun00009 }
 31:
                        mike = _closure2_slot2;
 38:
                        tango = _closure3_slot0;
                        oscar = 'function';
                        tango = typeof tango;
                        if(!(oscar !== tango)) { _fun00010_ip = 62; continue _fun00009 }
 56:
                        oscar = _closure3_slot0;
                        _fun00010_ip = 71; continue _fun00009;
 62:
                        entity = _closure3_slot0;
                        oscar = entity.bind(zulu)(mike);
 71:
                        entity = global;
                        tango = entity.Object;
                        zulu = tango.assign;
                        mike = {};
                        entity = _closure2_slot1;
                        mike[entity] = oscar;
                        entity = {};
                        entity = zulu.bind(tango)(entity, report, mike);
                        return entity;
                    }
                };
                mike = tango.bind(entity)(zulu, mike);
                return entity;
            };
            mike = golf.bind(options)(mike, oscar);
            report = _closure1_slot10;
            entity = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.listings;
                    entity = _closure2_slot0;
                    zulu = zulu[entity];
                    entity = null;
                    tango = entity == zulu;
                    entity = undefined;
                    if(tango) { _fun00012_ip = 39; continue _fun00011 }
 31:
                    mike = _closure2_slot1;
                    entity = zulu[mike];
 39:
                    return entity;
                }
            };
            entity = report.bind(tango)(entity);
            if(!(tango !== entity)) { _fun00008_ip = 113; continue _fun00007 }
 110:
            zulu = entity;
 113:
            entity = new Array(2);
            entity[0] = zulu;
            entity[1] = mike;
            return entity;
        }
    };
    var _closure1_slot20 = report;
    entity = function(argFoo, argBar) { // Original name: useListingValue
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        tango = _closure1_slot0;
        golf = _closure1_slot3;
        zulu = 9;
        zulu = golf[zulu];
        report = undefined;
        options = tango.bind(report)(zulu);
        oscar = options.useStateFromStores;
        zulu = _closure1_slot8;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = function() {
            zulu = _closure1_slot8;
            mike = zulu.getSubscriptionListing;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar = oscar.bind(options)(tango, zulu);
        var _closure2_slot2 = oscar;
        tango = _closure1_slot1;
        zulu = 10;
        zulu = golf[zulu];
        tango = tango.bind(report)(zulu);
        zulu = function() {
            entity = _closure2_slot1;
            return entity;
        };
        report = tango.bind(report)(zulu);
        var _closure2_slot3 = report;
        tango = _closure1_slot6;
        zulu = tango.useMemo;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            zulu = _closure2_slot3;
            mike = _closure2_slot2;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar) { // Original name: getRoleEmojis
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tango = argFoo;
            mike = argBar;
            var _closure2_slot0 = mike;
            zulu = tango.length;
            mike = 0;
            if(!(mike !== zulu)) { _fun00014_ip = 87; continue _fun00013 }
 23:
            zulu = tango.filter;
            mike = function(argFoo) {
                entity = argFoo;
                zulu = entity.roles;
                mike = zulu.includes;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = zulu.bind(tango)(mike);
            mike = global;
            zulu = mike.Set;
            mike = tango.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            report = mike.bind(tango)(entity);
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            oscar = mike;
            entity = new oscar[zulu](report, tango);
            entity = entity instanceof Object ? entity : mike;
            return entity;
 87:
            entity = _closure1_slot17;
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    tango = function(argFoo) { // Original name: clearEditState
        tango = function(argFoo, argBar) { // Original name: copyEditState
            entity = 'nonexistantEditStateId';
            var _closure3_slot0 = entity;
            entity = argBar;
            var _closure3_slot1 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot3;
            entity = 19;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure1_slot10;
                mike = zulu.setState;
                entity = function(argFoo) {
                    report = argFoo;
                    entity = {};
                    mike = {};
                    oscar = report.listings;
                    golf = mike;
                    zulu = copyDataProperties(golf, oscar);
                    tango = _closure3_slot1;
                    report = report.listings;
                    zulu = _closure3_slot0;
                    zulu = report[zulu];
                    mike[tango] = zulu;
                    entity['listings'] = mike;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = undefined;
        zulu = 'nonexistantEditStateId';
        mike = argFoo;
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    var _closure1_slot23 = tango;
    entity = function() { // Original name: _updateListingPeripheralsFromEditState
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00016_ip = 686; continue _fun00015 }
 15:
                    yankee = mike.guildId;
                    var _closure4_slot0 = yankee;
                    backup = mike.editStateId;
                    report = undefined;
                    var _closure4_slot1 = report;
                    SaveGenerator(address=40);
 38:
                    return report;
 40:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00016_ip = 683; continue _fun00015 }
 49:
                    oscar = _closure1_slot8;
                    zulu = oscar.getSubscriptionListing;
                    zulu = zulu.bind(oscar)(backup);
                    romeo = _closure1_slot1;
                    foxtrot = _closure1_slot3;
                    oscar = 20;
                    options = foxtrot[oscar];
                    kilo = romeo.bind(report)(options);
                    options = null;
                    offset = options != zulu;
                    verify = 'listing doesnt exist';
                    verify = kilo.bind(report)(offset, verify);
                    verify = zulu.role_id;
                    _closure4_slot1 = verify;
                    offset = zulu.id;
                    kilo = _closure1_slot10;
                    zulu = kilo.getState;
                    zulu = zulu.bind(kilo)();
                    zulu = zulu.listings;
                    zulu = zulu[backup];
                    oscar = foxtrot[oscar];
                    foxtrot = romeo.bind(report)(oscar);
                    romeo = options != zulu;
                    oscar = 'edit state does not exist';
                    oscar = foxtrot.bind(report)(romeo, oscar);
                    sizing = zulu.roleColor;
                    output = zulu.roleIcon;
                    foxtrot = zulu.trialLimit;
                    backup = zulu.trialInterval;
                    romeo = zulu.tierEmojiIds;
                    zulu = report === sizing;
                    if(!zulu) { _fun00016_ip = 216; continue _fun00015 }
 212:
                    zulu = report === output;
 216:
                    if(zulu) { _fun00016_ip = 309; continue _fun00015 }
 219:
                    oscar = _closure1_slot1;
                    kilo = _closure1_slot3;
                    zulu = 21;
                    zulu = kilo[zulu];
                    kilo = oscar.bind(report)(zulu);
                    oscar = kilo.updateRole;
                    zulu = {};
                    zulu['color'] = sizing;
                    result = options == output;
                    sizing = undefined;
                    if(result) { _fun00016_ip = 265; continue _fun00015 }
 260:
                    sizing = output.icon;
 265:
                    zulu['icon'] = sizing;
                    result = options == output;
                    sizing = undefined;
                    if(result) { _fun00016_ip = 284; continue _fun00015 }
 278:
                    sizing = output.unicodeEmoji;
 284:
                    zulu['unicodeEmoji'] = sizing;
                    zulu = oscar.bind(kilo)(yankee, verify, zulu);
                    SaveGenerator(address=300);
 298:
                    return zulu;
 300:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(!oscar) { _fun00016_ip = 309; continue _fun00015 }
 306:
                    return zulu;
 309:
                    oscar = _closure1_slot8;
                    zulu = oscar.getSubscriptionTrial;
                    oscar = zulu.bind(oscar)(offset);
                    zulu = options != foxtrot;
                    if(zulu) { _fun00016_ip = 335; continue _fun00015 }
 331:
                    zulu = options != backup;
 335:
                    if(zulu) { _fun00016_ip = 352; continue _fun00015 }
 338:
                    oscar = options != oscar;
                    if(!oscar) { _fun00016_ip = 349; continue _fun00015 }
 345:
                    oscar = options == backup;
 349:
                    zulu = oscar;
 352:
                    if(!zulu) { _fun00016_ip = 413; continue _fun00015 }
 355:
                    oscar = _closure1_slot2;
                    options = _closure1_slot3;
                    zulu = 22;
                    zulu = options[zulu];
                    options = oscar.bind(report)(zulu);
                    oscar = options.updateSubscriptionTrial;
                    zulu = {};
                    zulu['trial'] = backup;
                    zulu['max_num_active_trial_users'] = foxtrot;
                    zulu = oscar.bind(options)(yankee, offset, zulu);
                    SaveGenerator(address=404);
 402:
                    return zulu;
 404:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscar) { _fun00016_ip = 680; continue _fun00015 }
 413:
                    if(!(report !== romeo)) { _fun00016_ip = 674; continue _fun00015 }
 420:
                    options = _closure1_slot22;
                    offset = _closure1_slot7;
                    oscar = offset.getGuildEmoji;
                    oscar = oscar.bind(offset)(yankee);
                    oscar = options.bind(report)(oscar, verify);
                    verify = _closure1_slot0;
                    yankee = _closure1_slot3;
                    golf = 23;
                    options = yankee[golf];
                    kilo = verify.bind(report)(options);
                    backup = kilo.difference;
                    foxtrot = new Array(0);
                    source = foxtrot;
                    update = romeo;
                    echo = 0;
                    options = arraySpread(source, update, echo);
                    options = new Array(0);
                    source = options;
                    update = oscar;
                    sizing = arraySpread(source, update, echo);
                    options = backup.bind(kilo)(foxtrot, options);
                    golf = yankee[golf];
                    yankee = verify.bind(report)(golf);
                    verify = yankee.difference;
                    golf = new Array(0);
                    source = golf;
                    update = oscar;
                    oscar = arraySpread(source, update, echo);
                    oscar = new Array(0);
                    source = oscar;
                    update = romeo;
                    romeo = arraySpread(source, update, echo);
                    verify = verify.bind(yankee)(golf, oscar);
                    golf = options.map;
                    oscar = function(argFoo) {
                        zulu = _closure1_slot7;
                        mike = zulu.getCustomEmojiById;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    options = golf.bind(options)(oscar);
                    golf = options.map;
                    oscar = function(argFoo) {
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            tango = argFoo;
                            entity = null;
                            if(!(entity == tango)) { _fun00018_ip = 13; continue _fun00017 }
 9:
                            entity = undefined;
                            return entity;
 13:
                            zulu = _closure1_slot0;
                            mike = _closure1_slot3;
                            entity = 24;
                            mike = mike[entity];
                            entity = undefined;
                            zulu = zulu.bind(entity)(mike);
                            mike = zulu.updateEmoji;
                            entity = {};
                            oscar = _closure4_slot0;
                            entity['guildId'] = oscar;
                            oscar = tango.id;
                            entity['emojiId'] = oscar;
                            verify = tango.roles;
                            tango = new Array(1);
                            options = 0;
                            offset = tango;
                            oscar = arraySpread(offset, verify, options);
                            report = _closure4_slot1;
                            tango[oscar] = report;
                            report = 1;
                            report = oscar + report;
                            entity['roles'] = tango;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        }
                    };
                    update = golf.bind(options)(oscar);
                    golf = verify.map;
                    oscar = function(argFoo) {
                        zulu = _closure1_slot7;
                        mike = zulu.getCustomEmojiById;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    golf = golf.bind(verify)(oscar);
                    oscar = golf.map;
                    tango = function(argFoo) {
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            oscar = argFoo;
                            entity = null;
                            if(!(entity == oscar)) { _fun00020_ip = 13; continue _fun00019 }
 9:
                            entity = undefined;
                            return entity;
 13:
                            zulu = oscar.roles;
                            mike = zulu.filter;
                            entity = function(argFoo) {
                                mike = _closure4_slot1;
                                entity = argFoo;
                                entity = entity !== mike;
                                return entity;
                            };
                            report = mike.bind(zulu)(entity);
                            mike = report.length;
                            entity = 0;
                            if(!(!(mike > entity))) { _fun00020_ip = 100; continue _fun00019 }
 49:
                            zulu = _closure1_slot0;
                            mike = _closure1_slot3;
                            entity = 24;
                            mike = mike[entity];
                            entity = undefined;
                            tango = zulu.bind(entity)(mike);
                            zulu = tango.deleteEmoji;
                            mike = _closure4_slot0;
                            entity = oscar.id;
                            entity = zulu.bind(tango)(mike, entity);
                            _fun00020_ip = 164; continue _fun00019;
 100:
                            tango = _closure1_slot0;
                            zulu = _closure1_slot3;
                            mike = 24;
                            zulu = zulu[mike];
                            mike = undefined;
                            tango = tango.bind(mike)(zulu);
                            zulu = tango.updateEmoji;
                            mike = {};
                            golf = _closure4_slot0;
                            mike['guildId'] = golf;
                            oscar = oscar.id;
                            mike['emojiId'] = oscar;
                            mike['roles'] = report;
                            entity = zulu.bind(tango)(mike);
 164:
                            return entity;
                        }
                    };
                    verify = oscar.bind(golf)(tango);
                    tango = global;
                    golf = tango.Promise;
                    oscar = golf.all;
                    tango = new Array(0);
                    source = tango;
                    echo = arraySpread(source, update, echo);
                    source = tango;
                    update = verify;
                    options = arraySpread(source, update, echo);
                    tango = oscar.bind(golf)(tango);
                    SaveGenerator(address=668);
 666:
                    return tango;
 668:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscar) { _fun00016_ip = 677; continue _fun00015 }
 674:
                    return report;
 677:
                    return tango;
 680:
                    return zulu;
 683:
                    return mike;
 686:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot24 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: _createListingFromEditState
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00022_ip = 566; continue _fun00021 }
 13:
                    result = mike.guildId;
                    update = mike.editStateId;
                    offset = mike.groupListingId;
                    options = mike.onBeforeDispatchNewListing;
                    golf = undefined;
                    SaveGenerator(address=42);
 40:
                    return golf;
 42:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00022_ip = 563; continue _fun00021 }
 51:
                    tango = _closure1_slot10;
                    zulu = tango.getState;
                    zulu = zulu.bind(tango)();
                    zulu = zulu.listings;
                    sizing = zulu[update];
                    tango = _closure1_slot1;
                    romeo = _closure1_slot3;
                    zulu = 20;
                    oscar = romeo[zulu];
                    yankee = tango.bind(golf)(oscar);
                    echo = null;
                    verify = echo != sizing;
                    oscar = 'edit state does not exist';
                    oscar = yankee.bind(golf)(verify, oscar);
                    backup = sizing.name;
                    foxtrot = sizing.description;
                    oscar = sizing.channelBenefits;
                    verify = sizing.intangibleBenefits;
                    yankee = sizing.priceTier;
                    kilo = sizing.image;
                    output = sizing.channelAccessFormat;
                    sizing = romeo[zulu];
                    control = tango.bind(golf)(sizing);
                    source = echo != backup;
                    sizing = 'no name provided';
                    sizing = control.bind(golf)(source, sizing);
                    sizing = romeo[zulu];
                    control = tango.bind(golf)(sizing);
                    source = echo != foxtrot;
                    sizing = 'no description provided';
                    sizing = control.bind(golf)(source, sizing);
                    sizing = romeo[zulu];
                    control = tango.bind(golf)(sizing);
                    source = echo != yankee;
                    sizing = 'no priceTier provided';
                    sizing = control.bind(golf)(source, sizing);
                    zulu = romeo[zulu];
                    romeo = tango.bind(golf)(zulu);
                    tango = echo != kilo;
                    zulu = 'no image provided';
                    zulu = romeo.bind(golf)(tango, zulu);
                    zulu = _closure1_slot9;
                    sizing = zulu.ALL_CHANNELS_ACCESS;
                    if(!(echo == offset)) { _fun00022_ip = 322; continue _fun00021 }
 270:
                    tango = _closure1_slot2;
                    romeo = _closure1_slot3;
                    zulu = 22;
                    zulu = romeo[zulu];
                    romeo = tango.bind(golf)(zulu);
                    tango = romeo.createSubscriptionGroupListing;
                    zulu = {};
                    zulu = tango.bind(romeo)(result, zulu);
                    SaveGenerator(address=308);
 306:
                    return zulu;
 308:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun00022_ip = 560; continue _fun00021 }
 317:
                    offset = zulu.id;
 322:
                    tango = echo != oscar;
                    if(!tango) { _fun00022_ip = 340; continue _fun00021 }
 329:
                    source = oscar.length;
                    romeo = 0;
                    tango = source > romeo;
 340:
                    if(!tango) { _fun00022_ip = 388; continue _fun00021 }
 343:
                    romeo = _closure1_slot0;
                    source = _closure1_slot3;
                    tango = 25;
                    tango = source[tango];
                    romeo = romeo.bind(golf)(tango);
                    tango = romeo.createChannelsFromTemplateTierBenefits;
                    tango = tango.bind(romeo)(result, oscar);
                    SaveGenerator(address=379);
 377:
                    return tango;
 379:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=11);
                    if(romeo) { _fun00022_ip = 557; continue _fun00021 }
 388:
                    source = oscar;
                    if(!(echo == source)) { _fun00022_ip = 399; continue _fun00021 }
 395:
                    source = new Array(0);
 399:
                    romeo = new Array(0);
                    vacuum = 0;
                    config = romeo;
                    sequence = source;
                    oscar = arraySpread(config, sequence, vacuum);
                    if(!(echo == verify)) { _fun00022_ip = 423; continue _fun00021 }
 419:
                    verify = new Array(0);
 423:
                    config = romeo;
                    sequence = verify;
                    vacuum = oscar;
                    oscar = arraySpread(config, sequence, vacuum);
                    verify = _closure1_slot0;
                    echo = _closure1_slot3;
                    oscar = 25;
                    oscar = echo[oscar];
                    verify = verify.bind(golf)(oscar);
                    oscar = verify.getTemplateTierCreationAnalyticsContext;
                    verify = oscar.bind(verify)(update, result);
                    oscar = _closure1_slot2;
                    report = 22;
                    report = echo[report];
                    golf = oscar.bind(golf)(report);
                    oscar = golf.createSubscriptionListing;
                    report = {};
                    report['guildId'] = result;
                    report['groupListingId'] = offset;
                    offset = {};
                    sizing = output === sizing;
                    offset['can_access_all_channels'] = sizing;
                    offset['image'] = kilo;
                    offset['name'] = backup;
                    offset['description'] = foxtrot;
                    offset['benefits'] = romeo;
                    offset['priceTier'] = yankee;
                    report['data'] = offset;
                    report['analyticsContext'] = verify;
                    report['onBeforeDispatchNewListing'] = options;
                    report = oscar.bind(golf)(report);
                    return report;
 557:
                    return tango;
 560:
                    return zulu;
 563:
                    return mike;
 566:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot25 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot25 = entity;
    oscar = global;
    foxtrot = oscar.Object;
    romeo = foxtrot.defineProperty;
    verify = {};
    entity = true;
    verify['value'] = entity;
    entity = '__esModule';
    entity = romeo.bind(foxtrot)(zulu, entity, verify);
    entity = 0;
    verify = options[entity];
    entity = undefined;
    verify = offset.bind(entity)(verify);
    var _closure1_slot4 = verify;
    verify = 1;
    verify = options[verify];
    verify = offset.bind(entity)(verify);
    var _closure1_slot5 = verify;
    verify = 2;
    verify = options[verify];
    verify = yankee.bind(entity)(verify);
    var _closure1_slot6 = verify;
    verify = 3;
    verify = options[verify];
    verify = offset.bind(entity)(verify);
    var _closure1_slot7 = verify;
    verify = 4;
    verify = options[verify];
    verify = offset.bind(entity)(verify);
    var _closure1_slot8 = verify;
    verify = 5;
    verify = options[verify];
    verify = golf.bind(entity)(verify);
    offset = verify.AllChannelAccessOptions;
    var _closure1_slot9 = offset;
    verify = verify.useEditStateStore;
    var _closure1_slot10 = verify;
    verify = 6;
    verify = options[verify];
    verify = golf.bind(entity)(verify);
    verify = verify.GuildRoleSubscriptionBenefitTypes;
    var _closure1_slot11 = verify;
    verify = 7;
    verify = options[verify];
    verify = golf.bind(entity)(verify);
    offset = verify.CurrencyCodes;
    var _closure1_slot12 = offset;
    verify = verify.DEFAULT_ROLE_COLOR;
    var _closure1_slot13 = verify;
    verify = 8;
    verify = options[verify];
    verify = golf.bind(entity)(verify);
    verify = verify.SubscriptionIntervalTypes;
    var _closure1_slot14 = verify;
    verify = new Array(0);
    var _closure1_slot15 = verify;
    verify = new Array(0);
    var _closure1_slot16 = verify;
    oscar = oscar.Set;
    verify = oscar.prototype;
    verify = Object.create(verify, {constructor: {value: oscar}});
    output = verify;
    oscar = new output[oscar](sizing);
    oscar = oscar instanceof Object ? oscar : verify;
    var _closure1_slot17 = oscar;
    oscar = 27;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['useListingEditState'] = report;
    report = function(argFoo) { // Original name: useClearEditStateOnUnmount
        report = argFoo;
        var _closure2_slot0 = report;
        tango = _closure1_slot6;
        zulu = tango.useEffect;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            entity = function() {
                zulu = _closure1_slot23;
                mike = _closure2_slot0;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        entity = undefined;
        return entity;
    };
    zulu['useClearEditStateOnUnmount'] = report;
    report = function(argFoo) { // Original name: useName
        report = argFoo;
        tango = _closure1_slot20;
        mike = _closure1_slot21;
        zulu = undefined;
        entity = function(argFoo) {
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                zulu = argFoo;
                entity = null;
                tango = entity == zulu;
                mike = undefined;
                if(tango) { _fun00024_ip = 19; continue _fun00023 }
 14:
                mike = zulu.name;
 19:
                zulu = entity != mike;
                entity = '';
                if(!zulu) { _fun00024_ip = 33; continue _fun00023 }
 30:
                entity = mike;
 33:
                return entity;
            }
        };
        mike = mike.bind(zulu)(report, entity);
        entity = 'name';
        entity = tango.bind(zulu)(report, entity, mike);
        return entity;
    };
    zulu['useName'] = report;
    report = function(argFoo) { // Original name: usePriceTier
        report = argFoo;
        tango = _closure1_slot20;
        mike = _closure1_slot21;
        zulu = undefined;
        entity = function(argFoo) {
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                mike = argFoo;
                zulu = null;
                report = zulu == mike;
                entity = undefined;
                if(report) { _fun00026_ip = 41; continue _fun00025 }
 14:
                report = mike.subscription_plans;
                mike = 0;
                mike = report[mike];
                zulu = zulu == mike;
                entity = undefined;
                if(zulu) { _fun00026_ip = 41; continue _fun00025 }
 35:
                entity = mike.price;
 41:
                return entity;
            }
        };
        mike = mike.bind(zulu)(report, entity);
        entity = 'priceTier';
        entity = tango.bind(zulu)(report, entity, mike);
        return entity;
    };
    zulu['usePriceTier'] = report;
    report = function(argFoo) { // Original name: useDescription
        report = argFoo;
        tango = _closure1_slot20;
        mike = _closure1_slot21;
        zulu = undefined;
        entity = function(argFoo) {
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                zulu = argFoo;
                entity = null;
                tango = entity == zulu;
                mike = undefined;
                if(tango) { _fun00028_ip = 19; continue _fun00027 }
 14:
                mike = zulu.description;
 19:
                zulu = entity != mike;
                entity = '';
                if(!zulu) { _fun00028_ip = 33; continue _fun00027 }
 30:
                entity = mike;
 33:
                return entity;
            }
        };
        mike = mike.bind(zulu)(report, entity);
        entity = 'description';
        entity = tango.bind(zulu)(report, entity, mike);
        return entity;
    };
    zulu['useDescription'] = report;
    report = function(argFoo, argBar) { // Original name: useImage
        report = argFoo;
        mike = argBar;
        var _closure2_slot0 = mike;
        tango = _closure1_slot20;
        mike = _closure1_slot21;
        zulu = undefined;
        entity = function(argFoo) {
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                entity = argFoo;
                zulu = null;
                report = zulu == entity;
                tango = undefined;
                mike = undefined;
                if(report) { _fun00030_ip = 22; continue _fun00029 }
 16:
                mike = entity.image_asset;
 22:
                if(!(zulu == mike)) { _fun00030_ip = 28; continue _fun00029 }
 26:
                return tango;
 28:
                zulu = _closure1_slot0;
                report = _closure1_slot3;
                mike = 11;
                mike = report[mike];
                report = zulu.bind(tango)(mike);
                tango = report.getAssetURL;
                zulu = entity.application_id;
                mike = entity.image_asset;
                entity = _closure2_slot0;
                entity = tango.bind(report)(zulu, mike, entity);
                return entity;
            }
        };
        mike = mike.bind(zulu)(report, entity);
        entity = 'image';
        entity = tango.bind(zulu)(report, entity, mike);
        return entity;
    };
    zulu['useImage'] = report;
    report = function(argFoo) { // Original name: useApplicationId
        tango = _closure1_slot21;
        zulu = undefined;
        mike = argFoo;
        entity = function(argFoo) {
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                mike = argFoo;
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun00032_ip = 20; continue _fun00031 }
 14:
                entity = mike.application_id;
 20:
                return entity;
            }
        };
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['useApplicationId'] = report;
    report = function(argFoo, argBar) { // Original name: useRoleIcon
        report = argFoo;
        oscar = _closure1_slot1;
        tango = _closure1_slot3;
        zulu = 12;
        zulu = tango[zulu];
        tango = undefined;
        oscar = oscar.bind(tango)(zulu);
        zulu = argBar;
        options = oscar.bind(tango)(zulu, report);
        var _closure2_slot0 = options;
        zulu = _closure1_slot20;
        golf = _closure1_slot6;
        oscar = golf.useMemo;
        mike = new Array(1);
        mike[0] = options;
        entity = function() {
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                entity = {};
                mike = _closure2_slot0;
                tango = null;
                zulu = tango == mike;
                oscar = undefined;
                if(zulu) { _fun00034_ip = 29; continue _fun00033 }
 20:
                zulu = _closure2_slot0;
                oscar = zulu.icon;
 29:
                golf = tango != oscar;
                zulu = undefined;
                if(!golf) { _fun00034_ip = 41; continue _fun00033 }
 38:
                zulu = oscar;
 41:
                entity['icon'] = zulu;
                zulu = _closure2_slot0;
                oscar = tango == zulu;
                zulu = undefined;
                if(oscar) { _fun00034_ip = 68; continue _fun00033 }
 58:
                report = _closure2_slot0;
                zulu = report.unicodeEmoji;
 68:
                tango = tango != zulu;
                mike = undefined;
                if(!tango) { _fun00034_ip = 80; continue _fun00033 }
 77:
                mike = zulu;
 80:
                entity['unicodeEmoji'] = mike;
                return entity;
            }
        };
        mike = oscar.bind(golf)(entity, mike);
        entity = 'roleIcon';
        entity = zulu.bind(tango)(report, entity, mike);
        return entity;
    };
    zulu['useRoleIcon'] = report;
    report = function(argFoo, argBar) { // Original name: useRole
        report = argFoo;
        var _closure2_slot0 = report;
        tango = _closure1_slot1;
        oscar = _closure1_slot3;
        zulu = 12;
        zulu = oscar[zulu];
        oscar = undefined;
        tango = tango.bind(oscar)(zulu);
        zulu = argBar;
        golf = tango.bind(oscar)(zulu, report);
        var _closure2_slot1 = golf;
        tango = _closure1_slot10;
        zulu = function(argFoo) {
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                entity = argFoo;
                mike = entity.listings;
                entity = _closure2_slot0;
                mike = mike[entity];
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun00036_ip = 37; continue _fun00035 }
 31:
                entity = mike.roleColor;
 37:
                return entity;
            }
        };
        report = tango.bind(oscar)(zulu);
        var _closure2_slot2 = report;
        tango = _closure1_slot10;
        zulu = function(argFoo) {
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                entity = argFoo;
                mike = entity.listings;
                entity = _closure2_slot0;
                mike = mike[entity];
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun00038_ip = 37; continue _fun00037 }
 31:
                entity = mike.roleIcon;
 37:
                return entity;
            }
        };
        oscar = tango.bind(oscar)(zulu);
        var _closure2_slot3 = oscar;
        tango = _closure1_slot6;
        zulu = tango.useMemo;
        mike = new Array(3);
        mike[0] = golf;
        mike[1] = oscar;
        mike[2] = report;
        entity = function() {
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                entity = {};
                zulu = _closure2_slot1;
                oscar = null;
                if(!(oscar == zulu)) { _fun00040_ip = 48; continue _fun00039 }
 15:
                report = _closure1_slot0;
                tango = _closure1_slot3;
                zulu = 13;
                tango = tango[zulu];
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                zulu = zulu.DEFAULT_PREVIEW_ROLE;
                _fun00040_ip = 52; continue _fun00039;
 48:
                zulu = _closure2_slot1;
 52:
                offset = entity;
                verify = zulu;
                zulu = copyDataProperties(offset, verify);
                zulu = _closure2_slot3;
                report = undefined;
                if(!(report !== zulu)) { _fun00040_ip = 130; continue _fun00039 }
 72:
                zulu = _closure2_slot3;
                golf = zulu.icon;
                options = oscar != golf;
                zulu = '';
                tango = zulu;
                if(!options) { _fun00040_ip = 98; continue _fun00039 }
 95:
                tango = golf;
 98:
                entity['icon'] = tango;
                tango = _closure2_slot3;
                tango = tango.unicodeEmoji;
                oscar = oscar != tango;
                if(!oscar) { _fun00040_ip = 124; continue _fun00039 }
 121:
                zulu = tango;
 124:
                entity['unicodeEmoji'] = zulu;
 130:
                zulu = _closure2_slot2;
                if(!(report !== zulu)) { _fun00040_ip = 188; continue _fun00039 }
 138:
                tango = _closure2_slot2;
                entity['color'] = tango;
                zulu = _closure1_slot0;
                oscar = _closure1_slot3;
                mike = 14;
                mike = oscar[mike];
                zulu = zulu.bind(report)(mike);
                mike = zulu.int2hex;
                mike = mike.bind(zulu)(tango);
                entity['colorString'] = mike;
 188:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useRole'] = report;
    report = function(argFoo, argBar) { // Original name: useRoleColor
        report = argFoo;
        oscar = _closure1_slot1;
        tango = _closure1_slot3;
        zulu = 12;
        zulu = tango[zulu];
        tango = undefined;
        oscar = oscar.bind(tango)(zulu);
        zulu = argBar;
        options = oscar.bind(tango)(zulu, report);
        var _closure2_slot0 = options;
        zulu = _closure1_slot20;
        golf = _closure1_slot6;
        oscar = golf.useMemo;
        mike = new Array(1);
        mike[0] = options;
        entity = function() {
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                entity = _closure2_slot0;
                mike = null;
                tango = mike == entity;
                entity = undefined;
                if(tango) { _fun00042_ip = 27; continue _fun00041 }
 18:
                zulu = _closure2_slot0;
                entity = zulu.color;
 27:
                if(!(mike == entity)) { _fun00042_ip = 38; continue _fun00041 }
 31:
                entity = _closure1_slot13;
 38:
                return entity;
            }
        };
        mike = oscar.bind(golf)(entity, mike);
        entity = 'roleColor';
        entity = zulu.bind(tango)(report, entity, mike);
        return entity;
    };
    zulu['useRoleColor'] = report;
    report = function(argFoo, argBar) { // Original name: useChannelAccessFormat
        report = argFoo;
        oscar = _closure1_slot1;
        tango = _closure1_slot3;
        zulu = 12;
        zulu = tango[zulu];
        tango = undefined;
        oscar = oscar.bind(tango)(zulu);
        zulu = argBar;
        options = oscar.bind(tango)(zulu, report);
        var _closure2_slot0 = options;
        zulu = _closure1_slot20;
        golf = _closure1_slot6;
        oscar = golf.useMemo;
        mike = new Array(1);
        mike[0] = options;
        entity = function() {
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                zulu = _closure2_slot0;
                mike = null;
                if(!(mike != zulu)) { _fun00044_ip = 76; continue _fun00043 }
 13:
                report = _closure1_slot0;
                tango = _closure1_slot3;
                zulu = 15;
                tango = tango[zulu];
                zulu = undefined;
                tango = report.bind(zulu)(tango);
                zulu = tango.isAllChannelsRole;
                entity = _closure2_slot0;
                entity = zulu.bind(tango)(entity);
                mike = _closure1_slot9;
                if(entity) { _fun00044_ip = 68; continue _fun00043 }
 60:
                entity = mike.SOME_CHANNELS_ACCESS;
                _fun00044_ip = 74; continue _fun00043;
 68:
                entity = mike.ALL_CHANNELS_ACCESS;
 74:
                _fun00044_ip = 89; continue _fun00043;
 76:
                mike = _closure1_slot9;
                entity = mike.SOME_CHANNELS_ACCESS;
 89:
                return entity;
            }
        };
        mike = oscar.bind(golf)(entity, mike);
        entity = 'channelAccessFormat';
        entity = zulu.bind(tango)(report, entity, mike);
        return entity;
    };
    zulu['useChannelAccessFormat'] = report;
    report = function(argFoo) { // Original name: useChannelBenefits
        report = argFoo;
        tango = _closure1_slot20;
        mike = _closure1_slot21;
        zulu = undefined;
        entity = function(argFoo) {
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                entity = argFoo;
                mike = null;
                if(!(mike != entity)) { _fun00046_ip = 64; continue _fun00045 }
 9:
                entity = entity.role_benefits;
                zulu = entity.benefits;
                mike = zulu.filter;
                report = _closure1_slot0;
                tango = _closure1_slot3;
                entity = 16;
                tango = tango[entity];
                entity = undefined;
                entity = report.bind(entity)(tango);
                entity = entity.isChannelBenefit;
                entity = mike.bind(zulu)(entity);
                _fun00046_ip = 71; continue _fun00045;
 64:
                entity = _closure1_slot15;
 71:
                return entity;
            }
        };
        mike = mike.bind(zulu)(report, entity);
        entity = 'channelBenefits';
        entity = tango.bind(zulu)(report, entity, mike);
        return entity;
    };
    zulu['useChannelBenefits'] = report;
    report = function(argFoo) { // Original name: useIntangibleBenefits
        report = argFoo;
        tango = _closure1_slot20;
        mike = _closure1_slot21;
        zulu = undefined;
        entity = function(argFoo) {
            _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                entity = argFoo;
                mike = null;
                if(!(mike != entity)) { _fun00048_ip = 64; continue _fun00047 }
 9:
                entity = entity.role_benefits;
                zulu = entity.benefits;
                mike = zulu.filter;
                report = _closure1_slot0;
                tango = _closure1_slot3;
                entity = 16;
                tango = tango[entity];
                entity = undefined;
                entity = report.bind(entity)(tango);
                entity = entity.isIntangibleBenefit;
                entity = mike.bind(zulu)(entity);
                _fun00048_ip = 71; continue _fun00047;
 64:
                entity = _closure1_slot16;
 71:
                return entity;
            }
        };
        mike = mike.bind(zulu)(report, entity);
        entity = 'intangibleBenefits';
        entity = tango.bind(zulu)(report, entity, mike);
        return entity;
    };
    zulu['useIntangibleBenefits'] = report;
    report = function(argFoo, argBar) { // Original name: useTierEmojiIds
        report = argFoo;
        zulu = argBar;
        var _closure2_slot0 = zulu;
        golf = _closure1_slot1;
        verify = _closure1_slot3;
        tango = 12;
        oscar = verify[tango];
        tango = undefined;
        oscar = golf.bind(tango)(oscar);
        options = oscar.bind(tango)(zulu, report);
        var _closure2_slot1 = options;
        golf = _closure1_slot0;
        oscar = 9;
        oscar = verify[oscar];
        offset = golf.bind(tango)(oscar);
        verify = offset.useStateFromStoresArray;
        oscar = _closure1_slot7;
        golf = new Array(1);
        golf[0] = oscar;
        oscar = new Array(1);
        oscar[0] = zulu;
        zulu = function() {
            zulu = _closure1_slot7;
            mike = zulu.getGuildEmoji;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        verify = verify.bind(offset)(golf, zulu, oscar);
        var _closure2_slot2 = verify;
        zulu = _closure1_slot20;
        golf = _closure1_slot6;
        oscar = golf.useMemo;
        mike = new Array(2);
        mike[0] = verify;
        mike[1] = options;
        entity = function() {
            _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                zulu = _closure2_slot1;
                mike = null;
                if(!(mike != zulu)) { _fun00050_ip = 43; continue _fun00049 }
 13:
                tango = _closure1_slot22;
                zulu = _closure2_slot2;
                entity = _closure2_slot1;
                mike = entity.id;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                _fun00050_ip = 50; continue _fun00049;
 43:
                entity = _closure1_slot17;
 50:
                return entity;
            }
        };
        mike = oscar.bind(golf)(entity, mike);
        entity = 'tierEmojiIds';
        entity = zulu.bind(tango)(report, entity, mike);
        return entity;
    };
    zulu['useTierEmojiIds'] = report;
    report = function(argFoo) { // Original name: useTrialInterval
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot0;
            golf = _closure1_slot3;
            entity = 17;
            entity = golf[entity];
            tango = undefined;
            zulu = zulu.bind(tango)(entity);
            entity = zulu.useSubscriptionTrial;
            entity = entity.bind(zulu)(report);
            oscar = _closure1_slot1;
            zulu = 18;
            zulu = golf[zulu];
            oscar = oscar.bind(tango)(zulu);
            zulu = null;
            options = zulu == entity;
            golf = undefined;
            if(options) { _fun00052_ip = 74; continue _fun00051 }
 66:
            golf = entity.active_trial;
 74:
            options = zulu != golf;
            entity = null;
            if(!options) { _fun00052_ip = 86; continue _fun00051 }
 83:
            entity = golf;
 86:
            entity = oscar.bind(tango)(entity);
            entity = entity.selectedOption;
            mike = _closure1_slot20;
            oscar = zulu != entity;
            zulu = null;
            if(!oscar) { _fun00052_ip = 113; continue _fun00051 }
 110:
            zulu = entity;
 113:
            entity = 'trialInterval';
            entity = mike.bind(tango)(report, entity, zulu);
            return entity;
        }
    };
    zulu['useTrialInterval'] = report;
    report = function(argFoo) { // Original name: useTrialLimit
        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot0;
            tango = _closure1_slot3;
            mike = 17;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.useSubscriptionTrial;
            oscar = mike.bind(zulu)(report);
            zulu = _closure1_slot20;
            mike = null;
            golf = mike == oscar;
            entity = undefined;
            if(golf) { _fun00054_ip = 60; continue _fun00053 }
 54:
            entity = oscar.max_num_active_trial_users;
 60:
            oscar = mike != entity;
            mike = null;
            if(!oscar) { _fun00054_ip = 72; continue _fun00053 }
 69:
            mike = entity;
 72:
            entity = 'trialLimit';
            entity = zulu.bind(tango)(report, entity, mike);
            return entity;
        }
    };
    zulu['useTrialLimit'] = report;
    report = function(argFoo) { // Original name: useHasChanges
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot10;
        mike = undefined;
        entity = function(argFoo) {
            entity = argFoo;
            mike = entity.listings;
            entity = _closure2_slot0;
            mike = mike[entity];
            entity = undefined;
            entity = entity !== mike;
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['useHasChanges'] = report;
    report = function(argFoo) { // Original name: useHasChangesForEditStateIds
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot10;
        mike = undefined;
        entity = function(argFoo) {
            _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                report = argFoo;
                mike = _closure1_slot18;
                entity = _closure2_slot0;
                tango = undefined;
                zulu = mike.bind(tango)(entity);
                mike = zulu.bind(tango)();
                entity = mike.done;
                if(entity) { _fun00056_ip = 76; continue _fun00055 }
 36:
                oscar = mike.value;
                entity = report.listings;
                entity = entity[oscar];
                if(!(tango === entity)) { _fun00056_ip = 72; continue _fun00055 }
 55:
                oscar = zulu.bind(tango)();
                entity = oscar.done;
                mike = oscar;
                if(entity) { _fun00056_ip = 76; continue _fun00055 }
 70:
                _fun00056_ip = 36; continue _fun00055;
 72:
                entity = true;
                return entity;
 76:
                entity = false;
                return entity;
            }
        };
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['useHasChangesForEditStateIds'] = report;
    report = function(argFoo) { // Original name: useSubscriptionPlan
        report = argFoo;
        tango = _closure1_slot21;
        golf = undefined;
        zulu = function(argFoo) {
            _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                mike = argFoo;
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun00058_ip = 26; continue _fun00057 }
 14:
                zulu = mike.subscription_plans;
                mike = 0;
                entity = zulu[mike];
 26:
                return entity;
            }
        };
        oscar = tango.bind(golf)(report, zulu);
        var _closure2_slot0 = oscar;
        tango = _closure1_slot20;
        zulu = 'priceTier';
        report = tango.bind(golf)(report, zulu, golf);
        tango = _closure1_slot5;
        zulu = 1;
        tango = tango.bind(golf)(report, zulu);
        zulu = 0;
        report = tango[zulu];
        var _closure2_slot1 = report;
        tango = _closure1_slot6;
        zulu = tango.useMemo;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                entity = {};
                zulu = _closure2_slot1;
                mike = null;
                if(!(mike == zulu)) { _fun00060_ip = 40; continue _fun00059 }
 15:
                zulu = _closure2_slot0;
                zulu = mike == zulu;
                report = undefined;
                if(zulu) { _fun00060_ip = 38; continue _fun00059 }
 28:
                zulu = _closure2_slot0;
                report = zulu.price;
 38:
                _fun00060_ip = 44; continue _fun00059;
 40:
                report = _closure2_slot1;
 44:
                oscar = mike != report;
                zulu = 0;
                if(!oscar) { _fun00060_ip = 56; continue _fun00059 }
 53:
                zulu = report;
 56:
                entity['price'] = zulu;
                zulu = _closure2_slot0;
                oscar = mike == zulu;
                report = undefined;
                if(oscar) { _fun00060_ip = 84; continue _fun00059 }
 74:
                oscar = _closure2_slot0;
                report = oscar.currency;
 84:
                if(!(mike == report)) { _fun00060_ip = 101; continue _fun00059 }
 88:
                oscar = _closure1_slot12;
                report = oscar.USD;
 101:
                entity['currency'] = report;
                report = _closure2_slot0;
                oscar = mike == report;
                report = undefined;
                if(oscar) { _fun00060_ip = 129; continue _fun00059 }
 119:
                oscar = _closure2_slot0;
                report = oscar.interval;
 129:
                if(!(mike == report)) { _fun00060_ip = 146; continue _fun00059 }
 133:
                oscar = _closure1_slot14;
                report = oscar.MONTH;
 146:
                entity['interval'] = report;
                report = _closure2_slot0;
                report = mike == report;
                oscar = undefined;
                if(report) { _fun00060_ip = 174; continue _fun00059 }
 164:
                report = _closure2_slot0;
                oscar = report.interval_count;
 174:
                golf = mike != oscar;
                report = 1;
                if(!golf) { _fun00060_ip = 187; continue _fun00059 }
 184:
                report = oscar;
 187:
                entity['interval_count'] = report;
                report = _closure2_slot0;
                report = mike == report;
                zulu = undefined;
                if(report) { _fun00060_ip = 214; continue _fun00059 }
 205:
                tango = _closure2_slot0;
                zulu = tango.id;
 214:
                tango = mike != zulu;
                mike = '';
                if(!tango) { _fun00060_ip = 228; continue _fun00059 }
 225:
                mike = zulu;
 228:
                entity['id'] = mike;
                return entity;
            }
        };
        mike = zulu.bind(tango)(entity, mike);
        entity = new Array(1);
        entity[0] = mike;
        return entity;
    };
    zulu['useSubscriptionPlan'] = report;
    zulu['clearEditState'] = tango;
    tango = function() { // Original name: useCreateOrUpdateListingFromEditState
        tango = _closure1_slot6;
        zulu = tango.useState;
        mike = false;
        zulu = zulu.bind(tango)(mike);
        verify = _closure1_slot5;
        mike = undefined;
        options = 2;
        oscar = verify.bind(mike)(zulu, options);
        zulu = 0;
        tango = oscar[zulu];
        golf = 1;
        oscar = oscar[golf];
        var _closure2_slot0 = oscar;
        offset = _closure1_slot6;
        oscar = offset.useState;
        oscar = oscar.bind(offset)();
        oscar = verify.bind(mike)(oscar, options);
        zulu = oscar[zulu];
        oscar = oscar[golf];
        var _closure2_slot1 = oscar;
        oscar = _closure1_slot6;
        report = oscar.useCallback;
        entity = function() {
            tango = _closure1_slot4;
            zulu = undefined;
            mike = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                        StartGenerator();
                        mike = argFoo;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                        if(report) { _fun00062_ip = 936; continue _fun00061 }
 15:
                        romeo = mike.guildId;
                        kilo = mike.editStateId;
                        zulu = mike.groupListingId;
                        yankee = mike.onBeforeDispatchNewListing;
                        backup = mike.onAfterDispatchNewListing;
                        oscar = undefined;
                        verify = undefined;
                        sizing = undefined;
                        foxtrot = undefined;
                        SaveGenerator(address=56);
 54:
                        return oscar;
 56:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(report) { _fun00062_ip = 933; continue _fun00061 }
 65:
                        output = kilo;
                        verify = output;
                        options = _closure1_slot8;
                        report = options.getSubscriptionListing;
                        sizing = report.bind(options)(output);
 89: // try_start_0 // try_start_2
                        output = _closure2_slot0;
                        options = true;
                        output = output.bind(oscar)(options);
                        output = _closure2_slot1;
                        output = output.bind(oscar)(oscar);
                        update = null;
                        if(!(update == sizing)) { _fun00062_ip = 231; continue _fun00061 }
 118:
                        sizing = {};
                        output = romeo;
                        sizing['guildId'] = output;
                        output = verify;
                        sizing['editStateId'] = output;
                        output = zulu;
                        sizing['groupListingId'] = output;
                        sizing['onBeforeDispatchNewListing'] = yankee;
                        yankee = function() { // Original name: createListingFromEditState
                            entity = undefined;
                            tango = _closure1_slot25;
                            zulu = tango.apply;
                            entity = arguments;
                            mike = entity;
                            entity = this;
                            entity = zulu.bind(tango)(entity, mike);
                            return entity;
                        };
                        yankee = yankee.bind(oscar)(sizing);
                        SaveGenerator(address=164);
 162:
                        return yankee;
 164:
                        ResumeGenerator(result_out_reg=10, return_bool_out_reg=15);
                        if(sizing) { _fun00062_ip = 217; continue _fun00061 }
 170:
                        foxtrot = yankee;
                        output = kilo;
                        sizing = yankee.id;
                        verify = sizing;
                        kilo = function(argFoo, argBar) { // Original name: moveEditState
                            entity = argFoo;
                            var _closure6_slot0 = entity;
                            entity = argBar;
                            var _closure6_slot1 = entity;
                            tango = _closure1_slot0;
                            zulu = _closure1_slot3;
                            entity = 19;
                            zulu = zulu[entity];
                            entity = undefined;
                            tango = tango.bind(entity)(zulu);
                            zulu = tango.batchUpdates;
                            mike = function() {
                                zulu = _closure1_slot10;
                                mike = zulu.setState;
                                entity = function(argFoo) {
                                    zulu = argFoo;
                                    entity = {};
                                    mike = {};
                                    oscar = zulu.listings;
                                    golf = mike;
                                    tango = copyDataProperties(golf, oscar);
                                    report = _closure6_slot1;
                                    zulu = zulu.listings;
                                    tango = _closure6_slot0;
                                    zulu = zulu[tango];
                                    mike[report] = zulu;
                                    zulu = undefined;
                                    mike[tango] = zulu;
                                    entity['listings'] = mike;
                                    return entity;
                                };
                                entity = mike.bind(zulu)(entity);
                                entity = undefined;
                                return entity;
                            };
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        };
                        kilo = kilo.bind(oscar)(output, sizing);
                        kilo = backup;
                        if(!(update != kilo)) { _fun00062_ip = 781; continue _fun00061 }
 207:
                        foxtrot = backup.bind(oscar)(foxtrot);
                        _fun00062_ip = 781; continue _fun00061;
 217: // try_end0 // try_end2
                        backup = _closure2_slot0;
                        foxtrot = false;
                        foxtrot = backup.bind(oscar)(foxtrot);
                        return yankee;
 231: // try_start_1 // try_start_3
                        foxtrot = _closure1_slot1;
                        kilo = _closure1_slot3;
                        yankee = 20;
                        backup = kilo[yankee];
                        output = foxtrot.bind(oscar)(backup);
                        backup = zulu;
                        sizing = update != backup;
                        zulu = 'groupListingId is null';
                        zulu = output.bind(oscar)(sizing, zulu);
                        zulu = {};
                        sizing = romeo;
                        zulu['guildId'] = sizing;
                        sizing = verify;
                        zulu['editStateId'] = sizing;
                        zulu['groupListingId'] = backup;
                        result = zulu.guildId;
                        sizing = zulu.editStateId;
                        output = zulu.groupListingId;
                        backup = _closure1_slot8;
                        zulu = backup.getSubscriptionListing;
                        zulu = zulu.bind(backup)(sizing);
                        backup = kilo[yankee];
                        source = foxtrot.bind(oscar)(backup);
                        echo = update != zulu;
                        backup = 'listing doesnt exist';
                        backup = source.bind(oscar)(echo, backup);
                        echo = _closure1_slot10;
                        backup = echo.getState;
                        backup = backup.bind(echo)();
                        backup = backup.listings;
                        backup = backup[sizing];
                        yankee = kilo[yankee];
                        kilo = foxtrot.bind(oscar)(yankee);
                        foxtrot = update != backup;
                        yankee = 'edit state does not exist';
                        yankee = kilo.bind(oscar)(foxtrot, yankee);
                        vacuum = backup.name;
                        source = backup.description;
                        yankee = backup.channelBenefits;
                        echo = backup.intangibleBenefits;
                        control = backup.priceTier;
                        foxtrot = backup.image;
                        backup = backup.channelAccessFormat;
                        kilo = {};
                        sequence = zulu.name;
                        if(!(vacuum !== sequence)) { _fun00062_ip = 455; continue _fun00061 }
 449:
                        kilo['name'] = vacuum;
 455:
                        vacuum = zulu.description;
                        if(!(source !== vacuum)) { _fun00062_ip = 470; continue _fun00061 }
 464:
                        kilo['description'] = source;
 470:
                        vacuum = zulu.subscription_plans;
                        source = 0;
                        sequence = vacuum[source];
                        config = update == sequence;
                        vacuum = undefined;
                        if(config) { _fun00062_ip = 497; continue _fun00061 }
 491:
                        vacuum = sequence.price;
 497:
                        if(!(control !== vacuum)) { _fun00062_ip = 507; continue _fun00061 }
 501:
                        kilo['priceTier'] = control;
 507:
                        if(!(update != foxtrot)) { _fun00062_ip = 517; continue _fun00061 }
 511:
                        kilo['image'] = foxtrot;
 517:
                        if(!(update != backup)) { _fun00062_ip = 541; continue _fun00061 }
 521:
                        foxtrot = _closure1_slot9;
                        foxtrot = foxtrot.ALL_CHANNELS_ACCESS;
                        foxtrot = backup === foxtrot;
                        kilo['can_access_all_channels'] = foxtrot;
 541:
                        if(!(update == yankee)) { _fun00062_ip = 552; continue _fun00061 }
 545:
                        if(!(update != echo)) { _fun00062_ip = 686; continue _fun00061 }
 552:
                        foxtrot = zulu.role_benefits;
                        vacuum = foxtrot.benefits;
                        control = vacuum.filter;
                        sequence = _closure1_slot0;
                        config = _closure1_slot3;
                        foxtrot = 16;
                        backup = config[foxtrot];
                        backup = sequence.bind(oscar)(backup);
                        backup = backup.isChannelBenefit;
                        backup = control.bind(vacuum)(backup);
                        control = zulu.role_benefits;
                        vacuum = control.benefits;
                        control = vacuum.filter;
                        foxtrot = config[foxtrot];
                        foxtrot = sequence.bind(oscar)(foxtrot);
                        foxtrot = foxtrot.isIntangibleBenefit;
                        foxtrot = control.bind(vacuum)(foxtrot);
                        if(!(update != yankee)) { _fun00062_ip = 644; continue _fun00061 }
 641:
                        backup = yankee;
 644:
                        yankee = new Array(0);
                        papa = yankee;
                        context = backup;
                        record = 0;
                        backup = arraySpread(papa, context, record);
                        if(!(update != echo)) { _fun00062_ip = 667; continue _fun00061 }
 664:
                        foxtrot = echo;
 667:
                        papa = yankee;
                        context = foxtrot;
                        record = backup;
                        foxtrot = arraySpread(papa, context, record);
                        kilo['benefits'] = yankee;
 686:
                        foxtrot = _closure1_slot0;
                        backup = _closure1_slot3;
                        yankee = 23;
                        yankee = backup[yankee];
                        foxtrot = foxtrot.bind(oscar)(yankee);
                        yankee = foxtrot.isEmpty;
                        yankee = yankee.bind(foxtrot)(kilo);
                        if(yankee) { _fun00062_ip = 771; continue _fun00061 }
 720:
                        foxtrot = _closure1_slot2;
                        backup = _closure1_slot3;
                        yankee = 22;
                        yankee = backup[yankee];
                        backup = foxtrot.bind(oscar)(yankee);
                        foxtrot = backup.updateSubscriptionListing;
                        yankee = {};
                        yankee['guildId'] = result;
                        yankee['groupListingId'] = output;
                        yankee['listingId'] = sizing;
                        yankee['data'] = kilo;
                        zulu = foxtrot.bind(backup)(yankee);
 771:
                        SaveGenerator(address=775);
 773:
                        return zulu;
 775:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=10);
                        if(yankee) { _fun00062_ip = 854; continue _fun00061 }
 781:
                        yankee = {};
                        yankee['guildId'] = romeo;
                        romeo = verify;
                        yankee['editStateId'] = romeo;
                        golf = function() { // Original name: updateListingPeripheralsFromEditState
                            entity = undefined;
                            tango = _closure1_slot24;
                            zulu = tango.apply;
                            entity = arguments;
                            mike = entity;
                            entity = this;
                            entity = zulu.bind(tango)(entity, mike);
                            return entity;
                        };
                        golf = golf.bind(oscar)(yankee);
                        SaveGenerator(address=811);
 809:
                        return golf;
 811:
                        ResumeGenerator(result_out_reg=6, return_bool_out_reg=10);
                        if(yankee) { _fun00062_ip = 840; continue _fun00061 }
 817:
                        offset = _closure1_slot23;
                        verify = offset.bind(oscar)(verify);
 826: // try_end1 // try_end3
                        offset = _closure2_slot0;
                        verify = false;
                        verify = offset.bind(oscar)(verify);
                        return options;
 840:
                        verify = _closure2_slot0;
                        options = false;
                        options = verify.bind(oscar)(options);
                        return golf;
 854:
                        golf = _closure2_slot0;
                        report = false;
                        report = golf.bind(oscar)(report);
                        return zulu;
 868: // try_start_4 // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=4);
                        tango = report;
                        zulu = 'getAnyErrorMessage';
                        zulu = zulu in report;
                        if(zulu) { _fun00062_ip = 889; continue _fun00061 }
 884:
                        zulu = tango;
                        throw zulu;
 889:
                        report = _closure2_slot1;
                        tango = report.bind(oscar)(tango);
 901: // try_end4
                        tango = _closure2_slot0;
                        zulu = false;
                        zulu = tango.bind(oscar)(zulu);
                        return oscar;
 915: // catch_target2 // catch_target3 // catch_target4
                        CatchBlockStart(arg_register=2);
                        report = _closure2_slot0;
                        tango = false;
                        tango = report.bind(oscar)(tango);
                        throw zulu;
 933:
                        return mike;
 936:
                        return entity;
                    }
                };
                mike = entity.next;
                mike = mike.bind(entity)();
                return entity;
            };
            mike = tango.bind(zulu)(mike);
            var _closure3_slot0 = mike;
            entity = function() {
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
        mike = entity.bind(mike)();
        entity = new Array(0);
        mike = report.bind(oscar)(mike, entity);
        entity = {};
        entity['loading'] = tango;
        entity['error'] = zulu;
        entity['handleCreateOrUpdateFromEditState'] = mike;
        return entity;
    };
    zulu['useCreateOrUpdateListingFromEditState'] = tango;
    mike = function(argFoo, argBar) { // Original name: useEditStateIds
        _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
            golf = argBar;
            oscar = arguments[2];
            var _closure2_slot0 = golf;
            options = undefined;
            if(!(oscar === options)) { _fun00064_ip = 30; continue _fun00063 }
 18:
            entity = {};
            zulu = false;
            entity['includeSoftDeleted'] = zulu;
            oscar = entity;
 30:
            var _closure2_slot1 = options;
            var _closure2_slot2 = options;
            var _closure2_slot3 = options;
            var _closure2_slot4 = options;
            tango = _closure1_slot0;
            report = _closure1_slot3;
            entity = 17;
            entity = report[entity];
            report = tango.bind(options)(entity);
            tango = report.useSubscriptionListingsForGroup;
            entity = argFoo;
            report = tango.bind(report)(entity, oscar);
            _closure2_slot1 = report;
            tango = _closure1_slot10;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.editStateIdsForGroup;
                entity = _closure2_slot0;
                entity = mike[entity];
                return entity;
            };
            yankee = tango.bind(options)(entity);
            _closure2_slot2 = yankee;
            tango = _closure1_slot10;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.setEditStateIdsForGroup;
                return entity;
            };
            oscar = tango.bind(options)(entity);
            _closure2_slot3 = oscar;
            tango = _closure1_slot10;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.setListing;
                return entity;
            };
            tango = tango.bind(options)(entity);
            _closure2_slot4 = tango;
            entity = {};
            offset = _closure1_slot6;
            verify = offset.useMemo;
            options = new Array(2);
            options[0] = yankee;
            options[1] = report;
            report = function() {
                _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
                    zulu = _closure2_slot1;
                    mike = zulu.map;
                    entity = function(argFoo) {
                        entity = argFoo;
                        entity = entity.id;
                        return entity;
                    };
                    golf = mike.bind(zulu)(entity);
                    entity = new Array(0);
                    oscar = 0;
                    options = entity;
                    zulu = arraySpread(options, golf, oscar);
                    report = _closure2_slot2;
                    mike = null;
                    if(!(mike == report)) { _fun00066_ip = 55; continue _fun00065 }
 49:
                    mike = new Array(0);
                    _fun00066_ip = 59; continue _fun00065;
 55:
                    mike = _closure2_slot2;
 59:
                    options = entity;
                    golf = mike;
                    oscar = zulu;
                    mike = arraySpread(options, golf, oscar);
                    return entity;
                }
            };
            report = verify.bind(offset)(report, options);
            entity['editStateIds'] = report;
            offset = _closure1_slot6;
            verify = offset.useCallback;
            options = new Array(2);
            options[0] = golf;
            options[1] = oscar;
            report = function() {
                tango = _closure1_slot0;
                zulu = _closure1_slot3;
                entity = 26;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.v4;
                zulu = zulu.bind(tango)();
                var _closure3_slot0 = zulu;
                tango = _closure2_slot3;
                zulu = _closure2_slot0;
                mike = function(argFoo) {
                    _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
                        zulu = argFoo;
                        entity = null;
                        if(!(entity == zulu)) { _fun00068_ip = 13; continue _fun00067 }
 9:
                        zulu = new Array(0);
 13:
                        entity = new Array(1);
                        tango = 0;
                        oscar = entity;
                        report = zulu;
                        zulu = arraySpread(oscar, report, tango);
                        mike = _closure3_slot0;
                        entity[zulu] = mike;
                        mike = 1;
                        mike = zulu + mike;
                        return entity;
                    }
                };
                mike = tango.bind(entity)(zulu, mike);
                return entity;
            };
            report = verify.bind(offset)(report, options);
            entity['addNewEditStateId'] = report;
            verify = _closure1_slot6;
            options = verify.useCallback;
            report = new Array(3);
            report[0] = golf;
            report[1] = oscar;
            report[2] = tango;
            tango = function(argFoo) {
                zulu = argFoo;
                var _closure3_slot0 = zulu;
                tango = _closure1_slot0;
                report = _closure1_slot3;
                entity = 26;
                entity = report[entity];
                golf = undefined;
                tango = tango.bind(golf)(entity);
                entity = tango.v4;
                entity = entity.bind(tango)();
                var _closure3_slot1 = entity;
                oscar = _closure2_slot3;
                report = _closure2_slot0;
                tango = function(argFoo) {
                    _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
                        zulu = argFoo;
                        entity = null;
                        if(!(entity == zulu)) { _fun00070_ip = 13; continue _fun00069 }
 9:
                        zulu = new Array(0);
 13:
                        entity = new Array(1);
                        tango = 0;
                        oscar = entity;
                        report = zulu;
                        zulu = arraySpread(oscar, report, tango);
                        mike = _closure3_slot1;
                        entity[zulu] = mike;
                        mike = 1;
                        mike = zulu + mike;
                        return entity;
                    }
                };
                tango = oscar.bind(golf)(report, tango);
                tango = zulu.listings;
                zulu = tango.forEach;
                mike = function(argFoo) {
                    entity = argFoo;
                    var _closure4_slot0 = entity;
                    tango = _closure2_slot4;
                    zulu = _closure3_slot1;
                    entity = undefined;
                    mike = function() {
                        entity = {};
                        mike = _closure4_slot0;
                        zulu = mike.name;
                        entity['name'] = zulu;
                        zulu = mike.description;
                        entity['description'] = zulu;
                        zulu = mike.price_tier;
                        entity['priceTier'] = zulu;
                        zulu = mike.image;
                        entity['image'] = zulu;
                        zulu = mike.additional_perks;
                        entity['intangibleBenefits'] = zulu;
                        report = mike.channels;
                        tango = report.map;
                        zulu = function(argFoo) {
                            mike = argFoo;
                            entity = {};
                            zulu = mike.id;
                            entity['ref_id'] = zulu;
                            zulu = _closure1_slot11;
                            zulu = zulu.CHANNEL;
                            entity['ref_type'] = zulu;
                            zulu = mike.description;
                            entity['description'] = zulu;
                            zulu = mike.name;
                            entity['name'] = zulu;
                            mike = mike.emoji_name;
                            entity['emoji_name'] = mike;
                            return entity;
                        };
                        zulu = tango.bind(report)(zulu);
                        entity['channelBenefits'] = zulu;
                        zulu = {};
                        tango = undefined;
                        zulu['unicodeEmoji'] = tango;
                        tango = mike.image;
                        zulu['icon'] = tango;
                        entity['roleIcon'] = zulu;
                        mike = mike.role_color;
                        entity['roleColor'] = mike;
                        mike = _closure3_slot0;
                        mike = mike.category;
                        entity['usedTemplate'] = mike;
                        return entity;
                    };
                    mike = tango.bind(entity)(zulu, mike);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            tango = options.bind(verify)(tango, report);
            entity['addNewEditStateFromTemplate'] = tango;
            report = _closure1_slot6;
            tango = report.useCallback;
            zulu = new Array(2);
            zulu[0] = golf;
            zulu[1] = oscar;
            mike = function(argFoo) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                tango = _closure2_slot3;
                zulu = _closure2_slot0;
                entity = undefined;
                mike = function(argFoo) {
                    _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
                        zulu = argFoo;
                        entity = null;
                        if(!(entity == zulu)) { _fun00072_ip = 13; continue _fun00071 }
 9:
                        zulu = new Array(0);
 13:
                        mike = zulu.filter;
                        entity = function(argFoo) {
                            mike = _closure3_slot0;
                            entity = argFoo;
                            entity = entity !== mike;
                            return entity;
                        };
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    }
                };
                mike = tango.bind(entity)(zulu, mike);
                return entity;
            };
            mike = tango.bind(report)(mike, zulu);
            entity['removeEditStateId'] = mike;
            return entity;
        }
    };
    zulu['useEditStateIds'] = mike;
    return entity;
})();