// app/modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    offset = argBaz;
    yankee = argCor;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = yankee;
    var _closure1_slot3 = option;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot19;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot19;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    report = function(argFoo, argBar, argBaz) { // Original name: useListingEditState
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            verify = argFoo;
            michal = argBar;
            zuuluu = argBaz;
            var _closure2_slot0 = verify;
            var _closure2_slot1 = michal;
            var _closure2_slot2 = zuuluu;
            golfie = _closure1_slot10;
            tangon = undefined;
            oscard = function(argFoo) {
                entity = argFoo;
                entity = entity.setListing;
                return entity;
            };
            offset = golfie.bind(tangon)(oscard);
            var _closure2_slot3 = offset;
            option = _closure1_slot6;
            golfie = option.useCallback;
            oscard = new Array(4);
            oscard[0] = offset;
            oscard[1] = verify;
            oscard[2] = michal;
            oscard[3] = zuuluu;
            michal = function(argFoo) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                tangon = _closure2_slot3;
                zuuluu = _closure2_slot0;
                entity = undefined;
                michal = function(argFoo) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        report = argFoo;
                        entity = null;
                        tangon = entity == report;
                        zuuluu = undefined;
                        michal = undefined;
                        if(tangon) { _fun00010_ip = 27; continue _fun00009 }
 16:
                        tangon = _closure2_slot1;
                        michal = report[tangon];
 27:
                        if(!(entity == michal)) { _fun00010_ip = 38; continue _fun00009 }
 31:
                        michal = _closure2_slot2;
 38:
                        tangon = _closure3_slot0;
                        oscard = 'function';
                        tangon = typeof tangon;
                        if(!(oscard !== tangon)) { _fun00010_ip = 62; continue _fun00009 }
 56:
                        oscard = _closure3_slot0;
                        _fun00010_ip = 71; continue _fun00009;
 62:
                        entity = _closure3_slot0;
                        oscard = entity.bind(zuuluu)(michal);
 71:
                        entity = global;
                        tangon = entity.Object;
                        zuuluu = tangon.assign;
                        michal = {};
                        entity = _closure2_slot1;
                        michal[entity] = oscard;
                        entity = {};
                        entity = zuuluu.bind(tangon)(entity, report, michal);
                        return entity;
                    }
                };
                michal = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            michal = golfie.bind(option)(michal, oscard);
            report = _closure1_slot10;
            entity = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.listings;
                    entity = _closure2_slot0;
                    zuuluu = zuuluu[entity];
                    entity = null;
                    tangon = entity == zuuluu;
                    entity = undefined;
                    if(tangon) { _fun00012_ip = 39; continue _fun00011 }
 31:
                    michal = _closure2_slot1;
                    entity = zuuluu[michal];
 39:
                    return entity;
                }
            };
            entity = report.bind(tangon)(entity);
            if(!(tangon !== entity)) { _fun00008_ip = 113; continue _fun00007 }
 110:
            zuuluu = entity;
 113:
            entity = new Array(2);
            entity[0] = zuuluu;
            entity[1] = michal;
            return entity;
        }
    };
    var _closure1_slot20 = report;
    entity = function(argFoo, argBar) { // Original name: useListingValue
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        tangon = _closure1_slot0;
        golfie = _closure1_slot3;
        zuuluu = 9;
        zuuluu = golfie[zuuluu];
        report = undefined;
        option = tangon.bind(report)(zuuluu);
        oscard = option.useStateFromStores;
        zuuluu = _closure1_slot8;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = function() {
            zuuluu = _closure1_slot8;
            michal = zuuluu.getSubscriptionListing;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        oscard = oscard.bind(option)(tangon, zuuluu);
        var _closure2_slot2 = oscard;
        tangon = _closure1_slot1;
        zuuluu = 10;
        zuuluu = golfie[zuuluu];
        tangon = tangon.bind(report)(zuuluu);
        zuuluu = function() {
            entity = _closure2_slot1;
            return entity;
        };
        report = tangon.bind(report)(zuuluu);
        var _closure2_slot3 = report;
        tangon = _closure1_slot6;
        zuuluu = tangon.useMemo;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            zuuluu = _closure2_slot3;
            michal = _closure2_slot2;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar) { // Original name: getRoleEmojis
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argFoo;
            michal = argBar;
            var _closure2_slot0 = michal;
            zuuluu = tangon.length;
            michal = 0;
            if(!(michal !== zuuluu)) { _fun00014_ip = 87; continue _fun00013 }
 23:
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.roles;
                michal = zuuluu.includes;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = zuuluu.bind(tangon)(michal);
            michal = global;
            zuuluu = michal.Set;
            michal = tangon.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            report = michal.bind(tangon)(entity);
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            oscard = michal;
            entity = new oscard[zuuluu](report, tangon);
            entity = entity instanceof Object ? entity : michal;
            return entity;
 87:
            entity = _closure1_slot17;
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    tangon = function(argFoo) { // Original name: clearEditState
        tangon = function(argFoo, argBar) { // Original name: copyEditState
            entity = 'nonexistantEditStateId';
            var _closure3_slot0 = entity;
            entity = argBar;
            var _closure3_slot1 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot3;
            entity = 19;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure1_slot10;
                michal = zuuluu.setState;
                entity = function(argFoo) {
                    report = argFoo;
                    entity = {};
                    michal = {};
                    oscard = report.listings;
                    golfie = michal;
                    zuuluu = copyDataProperties(golfie, oscard);
                    tangon = _closure3_slot1;
                    report = report.listings;
                    zuuluu = _closure3_slot0;
                    zuuluu = report[zuuluu];
                    michal[tangon] = zuuluu;
                    entity['listings'] = michal;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity = undefined;
        zuuluu = 'nonexistantEditStateId';
        michal = argFoo;
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot23 = tangon;
    entity = function() { // Original name: _updateListingPeripheralsFromEditState
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00016_ip = 686; continue _fun00015 }
 15:
                    yankee = michal.guildId;
                    var _closure4_slot0 = yankee;
                    backup = michal.editStateId;
                    report = undefined;
                    var _closure4_slot1 = report;
                    SaveGenerator(address=40);
 38:
                    return report;
 40:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00016_ip = 683; continue _fun00015 }
 49:
                    oscard = _closure1_slot8;
                    zuuluu = oscard.getSubscriptionListing;
                    zuuluu = zuuluu.bind(oscard)(backup);
                    romeon = _closure1_slot1;
                    foxtra = _closure1_slot3;
                    oscard = 20;
                    option = foxtra[oscard];
                    kiloes = romeon.bind(report)(option);
                    option = null;
                    offset = option != zuuluu;
                    verify = 'listing doesnt exist';
                    verify = kiloes.bind(report)(offset, verify);
                    verify = zuuluu.role_id;
                    _closure4_slot1 = verify;
                    offset = zuuluu.id;
                    kiloes = _closure1_slot10;
                    zuuluu = kiloes.getState;
                    zuuluu = zuuluu.bind(kiloes)();
                    zuuluu = zuuluu.listings;
                    zuuluu = zuuluu[backup];
                    oscard = foxtra[oscard];
                    foxtra = romeon.bind(report)(oscard);
                    romeon = option != zuuluu;
                    oscard = 'edit state does not exist';
                    oscard = foxtra.bind(report)(romeon, oscard);
                    sizing = zuuluu.roleColor;
                    output = zuuluu.roleIcon;
                    foxtra = zuuluu.trialLimit;
                    backup = zuuluu.trialInterval;
                    romeon = zuuluu.tierEmojiIds;
                    zuuluu = report === sizing;
                    if(!zuuluu) { _fun00016_ip = 216; continue _fun00015 }
 212:
                    zuuluu = report === output;
 216:
                    if(zuuluu) { _fun00016_ip = 309; continue _fun00015 }
 219:
                    oscard = _closure1_slot1;
                    kiloes = _closure1_slot3;
                    zuuluu = 21;
                    zuuluu = kiloes[zuuluu];
                    kiloes = oscard.bind(report)(zuuluu);
                    oscard = kiloes.updateRole;
                    zuuluu = {};
                    zuuluu['color'] = sizing;
                    result = option == output;
                    sizing = undefined;
                    if(result) { _fun00016_ip = 265; continue _fun00015 }
 260:
                    sizing = output.icon;
 265:
                    zuuluu['icon'] = sizing;
                    result = option == output;
                    sizing = undefined;
                    if(result) { _fun00016_ip = 284; continue _fun00015 }
 278:
                    sizing = output.unicodeEmoji;
 284:
                    zuuluu['unicodeEmoji'] = sizing;
                    zuuluu = oscard.bind(kiloes)(yankee, verify, zuuluu);
                    SaveGenerator(address=300);
 298:
                    return zuuluu;
 300:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(!oscard) { _fun00016_ip = 309; continue _fun00015 }
 306:
                    return zuuluu;
 309:
                    oscard = _closure1_slot8;
                    zuuluu = oscard.getSubscriptionTrial;
                    oscard = zuuluu.bind(oscard)(offset);
                    zuuluu = option != foxtra;
                    if(zuuluu) { _fun00016_ip = 335; continue _fun00015 }
 331:
                    zuuluu = option != backup;
 335:
                    if(zuuluu) { _fun00016_ip = 352; continue _fun00015 }
 338:
                    oscard = option != oscard;
                    if(!oscard) { _fun00016_ip = 349; continue _fun00015 }
 345:
                    oscard = option == backup;
 349:
                    zuuluu = oscard;
 352:
                    if(!zuuluu) { _fun00016_ip = 413; continue _fun00015 }
 355:
                    oscard = _closure1_slot2;
                    option = _closure1_slot3;
                    zuuluu = 22;
                    zuuluu = option[zuuluu];
                    option = oscard.bind(report)(zuuluu);
                    oscard = option.updateSubscriptionTrial;
                    zuuluu = {};
                    zuuluu['trial'] = backup;
                    zuuluu['max_num_active_trial_users'] = foxtra;
                    zuuluu = oscard.bind(option)(yankee, offset, zuuluu);
                    SaveGenerator(address=404);
 402:
                    return zuuluu;
 404:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscard) { _fun00016_ip = 680; continue _fun00015 }
 413:
                    if(!(report !== romeon)) { _fun00016_ip = 674; continue _fun00015 }
 420:
                    option = _closure1_slot22;
                    offset = _closure1_slot7;
                    oscard = offset.getGuildEmoji;
                    oscard = oscard.bind(offset)(yankee);
                    oscard = option.bind(report)(oscard, verify);
                    verify = _closure1_slot0;
                    yankee = _closure1_slot3;
                    golfie = 23;
                    option = yankee[golfie];
                    kiloes = verify.bind(report)(option);
                    backup = kiloes.difference;
                    foxtra = new Array(0);
                    source = foxtra;
                    update = romeon;
                    echoed = 0;
                    option = arraySpread(source, update, echoed);
                    option = new Array(0);
                    source = option;
                    update = oscard;
                    sizing = arraySpread(source, update, echoed);
                    option = backup.bind(kiloes)(foxtra, option);
                    golfie = yankee[golfie];
                    yankee = verify.bind(report)(golfie);
                    verify = yankee.difference;
                    golfie = new Array(0);
                    source = golfie;
                    update = oscard;
                    oscard = arraySpread(source, update, echoed);
                    oscard = new Array(0);
                    source = oscard;
                    update = romeon;
                    romeon = arraySpread(source, update, echoed);
                    verify = verify.bind(yankee)(golfie, oscard);
                    golfie = option.map;
                    oscard = function(argFoo) {
                        zuuluu = _closure1_slot7;
                        michal = zuuluu.getCustomEmojiById;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    option = golfie.bind(option)(oscard);
                    golfie = option.map;
                    oscard = function(argFoo) {
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            tangon = argFoo;
                            entity = null;
                            if(!(entity == tangon)) { _fun00018_ip = 13; continue _fun00017 }
 9:
                            entity = undefined;
                            return entity;
 13:
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot3;
                            entity = 24;
                            michal = michal[entity];
                            entity = undefined;
                            zuuluu = zuuluu.bind(entity)(michal);
                            michal = zuuluu.updateEmoji;
                            entity = {};
                            oscard = _closure4_slot0;
                            entity['guildId'] = oscard;
                            oscard = tangon.id;
                            entity['emojiId'] = oscard;
                            verify = tangon.roles;
                            tangon = new Array(1);
                            option = 0;
                            offset = tangon;
                            oscard = arraySpread(offset, verify, option);
                            report = _closure4_slot1;
                            tangon[oscard] = report;
                            report = 1;
                            report = oscard + report;
                            entity['roles'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        }
                    };
                    update = golfie.bind(option)(oscard);
                    golfie = verify.map;
                    oscard = function(argFoo) {
                        zuuluu = _closure1_slot7;
                        michal = zuuluu.getCustomEmojiById;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    golfie = golfie.bind(verify)(oscard);
                    oscard = golfie.map;
                    tangon = function(argFoo) {
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            oscard = argFoo;
                            entity = null;
                            if(!(entity == oscard)) { _fun00020_ip = 13; continue _fun00019 }
 9:
                            entity = undefined;
                            return entity;
 13:
                            zuuluu = oscard.roles;
                            michal = zuuluu.filter;
                            entity = function(argFoo) {
                                michal = _closure4_slot1;
                                entity = argFoo;
                                entity = entity !== michal;
                                return entity;
                            };
                            report = michal.bind(zuuluu)(entity);
                            michal = report.length;
                            entity = 0;
                            if(!(!(michal > entity))) { _fun00020_ip = 100; continue _fun00019 }
 49:
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot3;
                            entity = 24;
                            michal = michal[entity];
                            entity = undefined;
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.deleteEmoji;
                            michal = _closure4_slot0;
                            entity = oscard.id;
                            entity = zuuluu.bind(tangon)(michal, entity);
                            _fun00020_ip = 164; continue _fun00019;
 100:
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot3;
                            michal = 24;
                            zuuluu = zuuluu[michal];
                            michal = undefined;
                            tangon = tangon.bind(michal)(zuuluu);
                            zuuluu = tangon.updateEmoji;
                            michal = {};
                            golfie = _closure4_slot0;
                            michal['guildId'] = golfie;
                            oscard = oscard.id;
                            michal['emojiId'] = oscard;
                            michal['roles'] = report;
                            entity = zuuluu.bind(tangon)(michal);
 164:
                            return entity;
                        }
                    };
                    verify = oscard.bind(golfie)(tangon);
                    tangon = global;
                    golfie = tangon.Promise;
                    oscard = golfie.all;
                    tangon = new Array(0);
                    source = tangon;
                    echoed = arraySpread(source, update, echoed);
                    source = tangon;
                    update = verify;
                    option = arraySpread(source, update, echoed);
                    tangon = oscard.bind(golfie)(tangon);
                    SaveGenerator(address=668);
 666:
                    return tangon;
 668:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscard) { _fun00016_ip = 677; continue _fun00015 }
 674:
                    return report;
 677:
                    return tangon;
 680:
                    return zuuluu;
 683:
                    return michal;
 686:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot24 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: _createListingFromEditState
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00022_ip = 566; continue _fun00021 }
 13:
                    result = michal.guildId;
                    update = michal.editStateId;
                    offset = michal.groupListingId;
                    option = michal.onBeforeDispatchNewListing;
                    golfie = undefined;
                    SaveGenerator(address=42);
 40:
                    return golfie;
 42:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00022_ip = 563; continue _fun00021 }
 51:
                    tangon = _closure1_slot10;
                    zuuluu = tangon.getState;
                    zuuluu = zuuluu.bind(tangon)();
                    zuuluu = zuuluu.listings;
                    sizing = zuuluu[update];
                    tangon = _closure1_slot1;
                    romeon = _closure1_slot3;
                    zuuluu = 20;
                    oscard = romeon[zuuluu];
                    yankee = tangon.bind(golfie)(oscard);
                    echoed = null;
                    verify = echoed != sizing;
                    oscard = 'edit state does not exist';
                    oscard = yankee.bind(golfie)(verify, oscard);
                    backup = sizing.name;
                    foxtra = sizing.description;
                    oscard = sizing.channelBenefits;
                    verify = sizing.intangibleBenefits;
                    yankee = sizing.priceTier;
                    kiloes = sizing.image;
                    output = sizing.channelAccessFormat;
                    sizing = romeon[zuuluu];
                    ctrled = tangon.bind(golfie)(sizing);
                    source = echoed != backup;
                    sizing = 'no name provided';
                    sizing = ctrled.bind(golfie)(source, sizing);
                    sizing = romeon[zuuluu];
                    ctrled = tangon.bind(golfie)(sizing);
                    source = echoed != foxtra;
                    sizing = 'no description provided';
                    sizing = ctrled.bind(golfie)(source, sizing);
                    sizing = romeon[zuuluu];
                    ctrled = tangon.bind(golfie)(sizing);
                    source = echoed != yankee;
                    sizing = 'no priceTier provided';
                    sizing = ctrled.bind(golfie)(source, sizing);
                    zuuluu = romeon[zuuluu];
                    romeon = tangon.bind(golfie)(zuuluu);
                    tangon = echoed != kiloes;
                    zuuluu = 'no image provided';
                    zuuluu = romeon.bind(golfie)(tangon, zuuluu);
                    zuuluu = _closure1_slot9;
                    sizing = zuuluu.ALL_CHANNELS_ACCESS;
                    if(!(echoed == offset)) { _fun00022_ip = 322; continue _fun00021 }
 270:
                    tangon = _closure1_slot2;
                    romeon = _closure1_slot3;
                    zuuluu = 22;
                    zuuluu = romeon[zuuluu];
                    romeon = tangon.bind(golfie)(zuuluu);
                    tangon = romeon.createSubscriptionGroupListing;
                    zuuluu = {};
                    zuuluu = tangon.bind(romeon)(result, zuuluu);
                    SaveGenerator(address=308);
 306:
                    return zuuluu;
 308:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00022_ip = 560; continue _fun00021 }
 317:
                    offset = zuuluu.id;
 322:
                    tangon = echoed != oscard;
                    if(!tangon) { _fun00022_ip = 340; continue _fun00021 }
 329:
                    source = oscard.length;
                    romeon = 0;
                    tangon = source > romeon;
 340:
                    if(!tangon) { _fun00022_ip = 388; continue _fun00021 }
 343:
                    romeon = _closure1_slot0;
                    source = _closure1_slot3;
                    tangon = 25;
                    tangon = source[tangon];
                    romeon = romeon.bind(golfie)(tangon);
                    tangon = romeon.createChannelsFromTemplateTierBenefits;
                    tangon = tangon.bind(romeon)(result, oscard);
                    SaveGenerator(address=379);
 377:
                    return tangon;
 379:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=11);
                    if(romeon) { _fun00022_ip = 557; continue _fun00021 }
 388:
                    source = oscard;
                    if(!(echoed == source)) { _fun00022_ip = 399; continue _fun00021 }
 395:
                    source = new Array(0);
 399:
                    romeon = new Array(0);
                    vacuum = 0;
                    config = romeon;
                    sequen = source;
                    oscard = arraySpread(config, sequen, vacuum);
                    if(!(echoed == verify)) { _fun00022_ip = 423; continue _fun00021 }
 419:
                    verify = new Array(0);
 423:
                    config = romeon;
                    sequen = verify;
                    vacuum = oscard;
                    oscard = arraySpread(config, sequen, vacuum);
                    verify = _closure1_slot0;
                    echoed = _closure1_slot3;
                    oscard = 25;
                    oscard = echoed[oscard];
                    verify = verify.bind(golfie)(oscard);
                    oscard = verify.getTemplateTierCreationAnalyticsContext;
                    verify = oscard.bind(verify)(update, result);
                    oscard = _closure1_slot2;
                    report = 22;
                    report = echoed[report];
                    golfie = oscard.bind(golfie)(report);
                    oscard = golfie.createSubscriptionListing;
                    report = {};
                    report['guildId'] = result;
                    report['groupListingId'] = offset;
                    offset = {};
                    sizing = output === sizing;
                    offset['can_access_all_channels'] = sizing;
                    offset['image'] = kiloes;
                    offset['name'] = backup;
                    offset['description'] = foxtra;
                    offset['benefits'] = romeon;
                    offset['priceTier'] = yankee;
                    report['data'] = offset;
                    report['analyticsContext'] = verify;
                    report['onBeforeDispatchNewListing'] = option;
                    report = oscard.bind(golfie)(report);
                    return report;
 557:
                    return tangon;
 560:
                    return zuuluu;
 563:
                    return michal;
 566:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot25 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot25 = entity;
    oscard = global;
    foxtra = oscard.Object;
    romeon = foxtra.defineProperty;
    verify = {};
    entity = true;
    verify['value'] = entity;
    entity = '__esModule';
    entity = romeon.bind(foxtra)(zuuluu, entity, verify);
    entity = 0;
    verify = option[entity];
    entity = undefined;
    verify = offset.bind(entity)(verify);
    var _closure1_slot4 = verify;
    verify = 1;
    verify = option[verify];
    verify = offset.bind(entity)(verify);
    var _closure1_slot5 = verify;
    verify = 2;
    verify = option[verify];
    verify = yankee.bind(entity)(verify);
    var _closure1_slot6 = verify;
    verify = 3;
    verify = option[verify];
    verify = offset.bind(entity)(verify);
    var _closure1_slot7 = verify;
    verify = 4;
    verify = option[verify];
    verify = offset.bind(entity)(verify);
    var _closure1_slot8 = verify;
    verify = 5;
    verify = option[verify];
    verify = golfie.bind(entity)(verify);
    offset = verify.AllChannelAccessOptions;
    var _closure1_slot9 = offset;
    verify = verify.useEditStateStore;
    var _closure1_slot10 = verify;
    verify = 6;
    verify = option[verify];
    verify = golfie.bind(entity)(verify);
    verify = verify.GuildRoleSubscriptionBenefitTypes;
    var _closure1_slot11 = verify;
    verify = 7;
    verify = option[verify];
    verify = golfie.bind(entity)(verify);
    offset = verify.CurrencyCodes;
    var _closure1_slot12 = offset;
    verify = verify.DEFAULT_ROLE_COLOR;
    var _closure1_slot13 = verify;
    verify = 8;
    verify = option[verify];
    verify = golfie.bind(entity)(verify);
    verify = verify.SubscriptionIntervalTypes;
    var _closure1_slot14 = verify;
    verify = new Array(0);
    var _closure1_slot15 = verify;
    verify = new Array(0);
    var _closure1_slot16 = verify;
    oscard = oscard.Set;
    verify = oscard.prototype;
    verify = Object.create(verify, {constructor: {value: oscard}});
    output = verify;
    oscard = new output[oscard](sizing);
    oscard = oscard instanceof Object ? oscard : verify;
    var _closure1_slot17 = oscard;
    oscard = 27;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['useListingEditState'] = report;
    report = function(argFoo) { // Original name: useClearEditStateOnUnmount
        report = argFoo;
        var _closure2_slot0 = report;
        tangon = _closure1_slot6;
        zuuluu = tangon.useEffect;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            entity = function() {
                zuuluu = _closure1_slot23;
                michal = _closure2_slot0;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        entity = undefined;
        return entity;
    };
    zuuluu['useClearEditStateOnUnmount'] = report;
    report = function(argFoo) { // Original name: useName
        report = argFoo;
        tangon = _closure1_slot20;
        michal = _closure1_slot21;
        zuuluu = undefined;
        entity = function(argFoo) {
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                zuuluu = argFoo;
                entity = null;
                tangon = entity == zuuluu;
                michal = undefined;
                if(tangon) { _fun00024_ip = 19; continue _fun00023 }
 14:
                michal = zuuluu.name;
 19:
                zuuluu = entity != michal;
                entity = '';
                if(!zuuluu) { _fun00024_ip = 33; continue _fun00023 }
 30:
                entity = michal;
 33:
                return entity;
            }
        };
        michal = michal.bind(zuuluu)(report, entity);
        entity = 'name';
        entity = tangon.bind(zuuluu)(report, entity, michal);
        return entity;
    };
    zuuluu['useName'] = report;
    report = function(argFoo) { // Original name: usePriceTier
        report = argFoo;
        tangon = _closure1_slot20;
        michal = _closure1_slot21;
        zuuluu = undefined;
        entity = function(argFoo) {
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                michal = argFoo;
                zuuluu = null;
                report = zuuluu == michal;
                entity = undefined;
                if(report) { _fun00026_ip = 41; continue _fun00025 }
 14:
                report = michal.subscription_plans;
                michal = 0;
                michal = report[michal];
                zuuluu = zuuluu == michal;
                entity = undefined;
                if(zuuluu) { _fun00026_ip = 41; continue _fun00025 }
 35:
                entity = michal.price;
 41:
                return entity;
            }
        };
        michal = michal.bind(zuuluu)(report, entity);
        entity = 'priceTier';
        entity = tangon.bind(zuuluu)(report, entity, michal);
        return entity;
    };
    zuuluu['usePriceTier'] = report;
    report = function(argFoo) { // Original name: useDescription
        report = argFoo;
        tangon = _closure1_slot20;
        michal = _closure1_slot21;
        zuuluu = undefined;
        entity = function(argFoo) {
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                zuuluu = argFoo;
                entity = null;
                tangon = entity == zuuluu;
                michal = undefined;
                if(tangon) { _fun00028_ip = 19; continue _fun00027 }
 14:
                michal = zuuluu.description;
 19:
                zuuluu = entity != michal;
                entity = '';
                if(!zuuluu) { _fun00028_ip = 33; continue _fun00027 }
 30:
                entity = michal;
 33:
                return entity;
            }
        };
        michal = michal.bind(zuuluu)(report, entity);
        entity = 'description';
        entity = tangon.bind(zuuluu)(report, entity, michal);
        return entity;
    };
    zuuluu['useDescription'] = report;
    report = function(argFoo, argBar) { // Original name: useImage
        report = argFoo;
        michal = argBar;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot20;
        michal = _closure1_slot21;
        zuuluu = undefined;
        entity = function(argFoo) {
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                entity = argFoo;
                zuuluu = null;
                report = zuuluu == entity;
                tangon = undefined;
                michal = undefined;
                if(report) { _fun00030_ip = 22; continue _fun00029 }
 16:
                michal = entity.image_asset;
 22:
                if(!(zuuluu == michal)) { _fun00030_ip = 28; continue _fun00029 }
 26:
                return tangon;
 28:
                zuuluu = _closure1_slot0;
                report = _closure1_slot3;
                michal = 11;
                michal = report[michal];
                report = zuuluu.bind(tangon)(michal);
                tangon = report.getAssetURL;
                zuuluu = entity.application_id;
                michal = entity.image_asset;
                entity = _closure2_slot0;
                entity = tangon.bind(report)(zuuluu, michal, entity);
                return entity;
            }
        };
        michal = michal.bind(zuuluu)(report, entity);
        entity = 'image';
        entity = tangon.bind(zuuluu)(report, entity, michal);
        return entity;
    };
    zuuluu['useImage'] = report;
    report = function(argFoo) { // Original name: useApplicationId
        tangon = _closure1_slot21;
        zuuluu = undefined;
        michal = argFoo;
        entity = function(argFoo) {
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                michal = argFoo;
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00032_ip = 20; continue _fun00031 }
 14:
                entity = michal.application_id;
 20:
                return entity;
            }
        };
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['useApplicationId'] = report;
    report = function(argFoo, argBar) { // Original name: useRoleIcon
        report = argFoo;
        oscard = _closure1_slot1;
        tangon = _closure1_slot3;
        zuuluu = 12;
        zuuluu = tangon[zuuluu];
        tangon = undefined;
        oscard = oscard.bind(tangon)(zuuluu);
        zuuluu = argBar;
        option = oscard.bind(tangon)(zuuluu, report);
        var _closure2_slot0 = option;
        zuuluu = _closure1_slot20;
        golfie = _closure1_slot6;
        oscard = golfie.useMemo;
        michal = new Array(1);
        michal[0] = option;
        entity = function() {
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                entity = {};
                michal = _closure2_slot0;
                tangon = null;
                zuuluu = tangon == michal;
                oscard = undefined;
                if(zuuluu) { _fun00034_ip = 29; continue _fun00033 }
 20:
                zuuluu = _closure2_slot0;
                oscard = zuuluu.icon;
 29:
                golfie = tangon != oscard;
                zuuluu = undefined;
                if(!golfie) { _fun00034_ip = 41; continue _fun00033 }
 38:
                zuuluu = oscard;
 41:
                entity['icon'] = zuuluu;
                zuuluu = _closure2_slot0;
                oscard = tangon == zuuluu;
                zuuluu = undefined;
                if(oscard) { _fun00034_ip = 68; continue _fun00033 }
 58:
                report = _closure2_slot0;
                zuuluu = report.unicodeEmoji;
 68:
                tangon = tangon != zuuluu;
                michal = undefined;
                if(!tangon) { _fun00034_ip = 80; continue _fun00033 }
 77:
                michal = zuuluu;
 80:
                entity['unicodeEmoji'] = michal;
                return entity;
            }
        };
        michal = oscard.bind(golfie)(entity, michal);
        entity = 'roleIcon';
        entity = zuuluu.bind(tangon)(report, entity, michal);
        return entity;
    };
    zuuluu['useRoleIcon'] = report;
    report = function(argFoo, argBar) { // Original name: useRole
        report = argFoo;
        var _closure2_slot0 = report;
        tangon = _closure1_slot1;
        oscard = _closure1_slot3;
        zuuluu = 12;
        zuuluu = oscard[zuuluu];
        oscard = undefined;
        tangon = tangon.bind(oscard)(zuuluu);
        zuuluu = argBar;
        golfie = tangon.bind(oscard)(zuuluu, report);
        var _closure2_slot1 = golfie;
        tangon = _closure1_slot10;
        zuuluu = function(argFoo) {
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                entity = argFoo;
                michal = entity.listings;
                entity = _closure2_slot0;
                michal = michal[entity];
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00036_ip = 37; continue _fun00035 }
 31:
                entity = michal.roleColor;
 37:
                return entity;
            }
        };
        report = tangon.bind(oscard)(zuuluu);
        var _closure2_slot2 = report;
        tangon = _closure1_slot10;
        zuuluu = function(argFoo) {
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                entity = argFoo;
                michal = entity.listings;
                entity = _closure2_slot0;
                michal = michal[entity];
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00038_ip = 37; continue _fun00037 }
 31:
                entity = michal.roleIcon;
 37:
                return entity;
            }
        };
        oscard = tangon.bind(oscard)(zuuluu);
        var _closure2_slot3 = oscard;
        tangon = _closure1_slot6;
        zuuluu = tangon.useMemo;
        michal = new Array(3);
        michal[0] = golfie;
        michal[1] = oscard;
        michal[2] = report;
        entity = function() {
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                entity = {};
                zuuluu = _closure2_slot1;
                oscard = null;
                if(!(oscard == zuuluu)) { _fun00040_ip = 48; continue _fun00039 }
 15:
                report = _closure1_slot0;
                tangon = _closure1_slot3;
                zuuluu = 13;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                zuuluu = zuuluu.DEFAULT_PREVIEW_ROLE;
                _fun00040_ip = 52; continue _fun00039;
 48:
                zuuluu = _closure2_slot1;
 52:
                offset = entity;
                verify = zuuluu;
                zuuluu = copyDataProperties(offset, verify);
                zuuluu = _closure2_slot3;
                report = undefined;
                if(!(report !== zuuluu)) { _fun00040_ip = 130; continue _fun00039 }
 72:
                zuuluu = _closure2_slot3;
                golfie = zuuluu.icon;
                option = oscard != golfie;
                zuuluu = '';
                tangon = zuuluu;
                if(!option) { _fun00040_ip = 98; continue _fun00039 }
 95:
                tangon = golfie;
 98:
                entity['icon'] = tangon;
                tangon = _closure2_slot3;
                tangon = tangon.unicodeEmoji;
                oscard = oscard != tangon;
                if(!oscard) { _fun00040_ip = 124; continue _fun00039 }
 121:
                zuuluu = tangon;
 124:
                entity['unicodeEmoji'] = zuuluu;
 130:
                zuuluu = _closure2_slot2;
                if(!(report !== zuuluu)) { _fun00040_ip = 188; continue _fun00039 }
 138:
                tangon = _closure2_slot2;
                entity['color'] = tangon;
                zuuluu = _closure1_slot0;
                oscard = _closure1_slot3;
                michal = 14;
                michal = oscard[michal];
                zuuluu = zuuluu.bind(report)(michal);
                michal = zuuluu.int2hex;
                michal = michal.bind(zuuluu)(tangon);
                entity['colorString'] = michal;
 188:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useRole'] = report;
    report = function(argFoo, argBar) { // Original name: useRoleColor
        report = argFoo;
        oscard = _closure1_slot1;
        tangon = _closure1_slot3;
        zuuluu = 12;
        zuuluu = tangon[zuuluu];
        tangon = undefined;
        oscard = oscard.bind(tangon)(zuuluu);
        zuuluu = argBar;
        option = oscard.bind(tangon)(zuuluu, report);
        var _closure2_slot0 = option;
        zuuluu = _closure1_slot20;
        golfie = _closure1_slot6;
        oscard = golfie.useMemo;
        michal = new Array(1);
        michal[0] = option;
        entity = function() {
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                entity = _closure2_slot0;
                michal = null;
                tangon = michal == entity;
                entity = undefined;
                if(tangon) { _fun00042_ip = 27; continue _fun00041 }
 18:
                zuuluu = _closure2_slot0;
                entity = zuuluu.color;
 27:
                if(!(michal == entity)) { _fun00042_ip = 38; continue _fun00041 }
 31:
                entity = _closure1_slot13;
 38:
                return entity;
            }
        };
        michal = oscard.bind(golfie)(entity, michal);
        entity = 'roleColor';
        entity = zuuluu.bind(tangon)(report, entity, michal);
        return entity;
    };
    zuuluu['useRoleColor'] = report;
    report = function(argFoo, argBar) { // Original name: useChannelAccessFormat
        report = argFoo;
        oscard = _closure1_slot1;
        tangon = _closure1_slot3;
        zuuluu = 12;
        zuuluu = tangon[zuuluu];
        tangon = undefined;
        oscard = oscard.bind(tangon)(zuuluu);
        zuuluu = argBar;
        option = oscard.bind(tangon)(zuuluu, report);
        var _closure2_slot0 = option;
        zuuluu = _closure1_slot20;
        golfie = _closure1_slot6;
        oscard = golfie.useMemo;
        michal = new Array(1);
        michal[0] = option;
        entity = function() {
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                zuuluu = _closure2_slot0;
                michal = null;
                if(!(michal != zuuluu)) { _fun00044_ip = 76; continue _fun00043 }
 13:
                report = _closure1_slot0;
                tangon = _closure1_slot3;
                zuuluu = 15;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                tangon = report.bind(zuuluu)(tangon);
                zuuluu = tangon.isAllChannelsRole;
                entity = _closure2_slot0;
                entity = zuuluu.bind(tangon)(entity);
                michal = _closure1_slot9;
                if(entity) { _fun00044_ip = 68; continue _fun00043 }
 60:
                entity = michal.SOME_CHANNELS_ACCESS;
                _fun00044_ip = 74; continue _fun00043;
 68:
                entity = michal.ALL_CHANNELS_ACCESS;
 74:
                _fun00044_ip = 89; continue _fun00043;
 76:
                michal = _closure1_slot9;
                entity = michal.SOME_CHANNELS_ACCESS;
 89:
                return entity;
            }
        };
        michal = oscard.bind(golfie)(entity, michal);
        entity = 'channelAccessFormat';
        entity = zuuluu.bind(tangon)(report, entity, michal);
        return entity;
    };
    zuuluu['useChannelAccessFormat'] = report;
    report = function(argFoo) { // Original name: useChannelBenefits
        report = argFoo;
        tangon = _closure1_slot20;
        michal = _closure1_slot21;
        zuuluu = undefined;
        entity = function(argFoo) {
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                entity = argFoo;
                michal = null;
                if(!(michal != entity)) { _fun00046_ip = 64; continue _fun00045 }
 9:
                entity = entity.role_benefits;
                zuuluu = entity.benefits;
                michal = zuuluu.filter;
                report = _closure1_slot0;
                tangon = _closure1_slot3;
                entity = 16;
                tangon = tangon[entity];
                entity = undefined;
                entity = report.bind(entity)(tangon);
                entity = entity.isChannelBenefit;
                entity = michal.bind(zuuluu)(entity);
                _fun00046_ip = 71; continue _fun00045;
 64:
                entity = _closure1_slot15;
 71:
                return entity;
            }
        };
        michal = michal.bind(zuuluu)(report, entity);
        entity = 'channelBenefits';
        entity = tangon.bind(zuuluu)(report, entity, michal);
        return entity;
    };
    zuuluu['useChannelBenefits'] = report;
    report = function(argFoo) { // Original name: useIntangibleBenefits
        report = argFoo;
        tangon = _closure1_slot20;
        michal = _closure1_slot21;
        zuuluu = undefined;
        entity = function(argFoo) {
            _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                entity = argFoo;
                michal = null;
                if(!(michal != entity)) { _fun00048_ip = 64; continue _fun00047 }
 9:
                entity = entity.role_benefits;
                zuuluu = entity.benefits;
                michal = zuuluu.filter;
                report = _closure1_slot0;
                tangon = _closure1_slot3;
                entity = 16;
                tangon = tangon[entity];
                entity = undefined;
                entity = report.bind(entity)(tangon);
                entity = entity.isIntangibleBenefit;
                entity = michal.bind(zuuluu)(entity);
                _fun00048_ip = 71; continue _fun00047;
 64:
                entity = _closure1_slot16;
 71:
                return entity;
            }
        };
        michal = michal.bind(zuuluu)(report, entity);
        entity = 'intangibleBenefits';
        entity = tangon.bind(zuuluu)(report, entity, michal);
        return entity;
    };
    zuuluu['useIntangibleBenefits'] = report;
    report = function(argFoo, argBar) { // Original name: useTierEmojiIds
        report = argFoo;
        zuuluu = argBar;
        var _closure2_slot0 = zuuluu;
        golfie = _closure1_slot1;
        verify = _closure1_slot3;
        tangon = 12;
        oscard = verify[tangon];
        tangon = undefined;
        oscard = golfie.bind(tangon)(oscard);
        option = oscard.bind(tangon)(zuuluu, report);
        var _closure2_slot1 = option;
        golfie = _closure1_slot0;
        oscard = 9;
        oscard = verify[oscard];
        offset = golfie.bind(tangon)(oscard);
        verify = offset.useStateFromStoresArray;
        oscard = _closure1_slot7;
        golfie = new Array(1);
        golfie[0] = oscard;
        oscard = new Array(1);
        oscard[0] = zuuluu;
        zuuluu = function() {
            zuuluu = _closure1_slot7;
            michal = zuuluu.getGuildEmoji;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        verify = verify.bind(offset)(golfie, zuuluu, oscard);
        var _closure2_slot2 = verify;
        zuuluu = _closure1_slot20;
        golfie = _closure1_slot6;
        oscard = golfie.useMemo;
        michal = new Array(2);
        michal[0] = verify;
        michal[1] = option;
        entity = function() {
            _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                zuuluu = _closure2_slot1;
                michal = null;
                if(!(michal != zuuluu)) { _fun00050_ip = 43; continue _fun00049 }
 13:
                tangon = _closure1_slot22;
                zuuluu = _closure2_slot2;
                entity = _closure2_slot1;
                michal = entity.id;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal);
                _fun00050_ip = 50; continue _fun00049;
 43:
                entity = _closure1_slot17;
 50:
                return entity;
            }
        };
        michal = oscard.bind(golfie)(entity, michal);
        entity = 'tierEmojiIds';
        entity = zuuluu.bind(tangon)(report, entity, michal);
        return entity;
    };
    zuuluu['useTierEmojiIds'] = report;
    report = function(argFoo) { // Original name: useTrialInterval
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot3;
            entity = 17;
            entity = golfie[entity];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.useSubscriptionTrial;
            entity = entity.bind(zuuluu)(report);
            oscard = _closure1_slot1;
            zuuluu = 18;
            zuuluu = golfie[zuuluu];
            oscard = oscard.bind(tangon)(zuuluu);
            zuuluu = null;
            option = zuuluu == entity;
            golfie = undefined;
            if(option) { _fun00052_ip = 74; continue _fun00051 }
 66:
            golfie = entity.active_trial;
 74:
            option = zuuluu != golfie;
            entity = null;
            if(!option) { _fun00052_ip = 86; continue _fun00051 }
 83:
            entity = golfie;
 86:
            entity = oscard.bind(tangon)(entity);
            entity = entity.selectedOption;
            michal = _closure1_slot20;
            oscard = zuuluu != entity;
            zuuluu = null;
            if(!oscard) { _fun00052_ip = 113; continue _fun00051 }
 110:
            zuuluu = entity;
 113:
            entity = 'trialInterval';
            entity = michal.bind(tangon)(report, entity, zuuluu);
            return entity;
        }
    };
    zuuluu['useTrialInterval'] = report;
    report = function(argFoo) { // Original name: useTrialLimit
        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot3;
            michal = 17;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.useSubscriptionTrial;
            oscard = michal.bind(zuuluu)(report);
            zuuluu = _closure1_slot20;
            michal = null;
            golfie = michal == oscard;
            entity = undefined;
            if(golfie) { _fun00054_ip = 60; continue _fun00053 }
 54:
            entity = oscard.max_num_active_trial_users;
 60:
            oscard = michal != entity;
            michal = null;
            if(!oscard) { _fun00054_ip = 72; continue _fun00053 }
 69:
            michal = entity;
 72:
            entity = 'trialLimit';
            entity = zuuluu.bind(tangon)(report, entity, michal);
            return entity;
        }
    };
    zuuluu['useTrialLimit'] = report;
    report = function(argFoo) { // Original name: useHasChanges
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot10;
        michal = undefined;
        entity = function(argFoo) {
            entity = argFoo;
            michal = entity.listings;
            entity = _closure2_slot0;
            michal = michal[entity];
            entity = undefined;
            entity = entity !== michal;
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['useHasChanges'] = report;
    report = function(argFoo) { // Original name: useHasChangesForEditStateIds
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot10;
        michal = undefined;
        entity = function(argFoo) {
            _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                report = argFoo;
                michal = _closure1_slot18;
                entity = _closure2_slot0;
                tangon = undefined;
                zuuluu = michal.bind(tangon)(entity);
                michal = zuuluu.bind(tangon)();
                entity = michal.done;
                if(entity) { _fun00056_ip = 76; continue _fun00055 }
 36:
                oscard = michal.value;
                entity = report.listings;
                entity = entity[oscard];
                if(!(tangon === entity)) { _fun00056_ip = 72; continue _fun00055 }
 55:
                oscard = zuuluu.bind(tangon)();
                entity = oscard.done;
                michal = oscard;
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
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['useHasChangesForEditStateIds'] = report;
    report = function(argFoo) { // Original name: useSubscriptionPlan
        report = argFoo;
        tangon = _closure1_slot21;
        golfie = undefined;
        zuuluu = function(argFoo) {
            _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                michal = argFoo;
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00058_ip = 26; continue _fun00057 }
 14:
                zuuluu = michal.subscription_plans;
                michal = 0;
                entity = zuuluu[michal];
 26:
                return entity;
            }
        };
        oscard = tangon.bind(golfie)(report, zuuluu);
        var _closure2_slot0 = oscard;
        tangon = _closure1_slot20;
        zuuluu = 'priceTier';
        report = tangon.bind(golfie)(report, zuuluu, golfie);
        tangon = _closure1_slot5;
        zuuluu = 1;
        tangon = tangon.bind(golfie)(report, zuuluu);
        zuuluu = 0;
        report = tangon[zuuluu];
        var _closure2_slot1 = report;
        tangon = _closure1_slot6;
        zuuluu = tangon.useMemo;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                entity = {};
                zuuluu = _closure2_slot1;
                michal = null;
                if(!(michal == zuuluu)) { _fun00060_ip = 40; continue _fun00059 }
 15:
                zuuluu = _closure2_slot0;
                zuuluu = michal == zuuluu;
                report = undefined;
                if(zuuluu) { _fun00060_ip = 38; continue _fun00059 }
 28:
                zuuluu = _closure2_slot0;
                report = zuuluu.price;
 38:
                _fun00060_ip = 44; continue _fun00059;
 40:
                report = _closure2_slot1;
 44:
                oscard = michal != report;
                zuuluu = 0;
                if(!oscard) { _fun00060_ip = 56; continue _fun00059 }
 53:
                zuuluu = report;
 56:
                entity['price'] = zuuluu;
                zuuluu = _closure2_slot0;
                oscard = michal == zuuluu;
                report = undefined;
                if(oscard) { _fun00060_ip = 84; continue _fun00059 }
 74:
                oscard = _closure2_slot0;
                report = oscard.currency;
 84:
                if(!(michal == report)) { _fun00060_ip = 101; continue _fun00059 }
 88:
                oscard = _closure1_slot12;
                report = oscard.USD;
 101:
                entity['currency'] = report;
                report = _closure2_slot0;
                oscard = michal == report;
                report = undefined;
                if(oscard) { _fun00060_ip = 129; continue _fun00059 }
 119:
                oscard = _closure2_slot0;
                report = oscard.interval;
 129:
                if(!(michal == report)) { _fun00060_ip = 146; continue _fun00059 }
 133:
                oscard = _closure1_slot14;
                report = oscard.MONTH;
 146:
                entity['interval'] = report;
                report = _closure2_slot0;
                report = michal == report;
                oscard = undefined;
                if(report) { _fun00060_ip = 174; continue _fun00059 }
 164:
                report = _closure2_slot0;
                oscard = report.interval_count;
 174:
                golfie = michal != oscard;
                report = 1;
                if(!golfie) { _fun00060_ip = 187; continue _fun00059 }
 184:
                report = oscard;
 187:
                entity['interval_count'] = report;
                report = _closure2_slot0;
                report = michal == report;
                zuuluu = undefined;
                if(report) { _fun00060_ip = 214; continue _fun00059 }
 205:
                tangon = _closure2_slot0;
                zuuluu = tangon.id;
 214:
                tangon = michal != zuuluu;
                michal = '';
                if(!tangon) { _fun00060_ip = 228; continue _fun00059 }
 225:
                michal = zuuluu;
 228:
                entity['id'] = michal;
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(entity, michal);
        entity = new Array(1);
        entity[0] = michal;
        return entity;
    };
    zuuluu['useSubscriptionPlan'] = report;
    zuuluu['clearEditState'] = tangon;
    tangon = function() { // Original name: useCreateOrUpdateListingFromEditState
        tangon = _closure1_slot6;
        zuuluu = tangon.useState;
        michal = false;
        zuuluu = zuuluu.bind(tangon)(michal);
        verify = _closure1_slot5;
        michal = undefined;
        option = 2;
        oscard = verify.bind(michal)(zuuluu, option);
        zuuluu = 0;
        tangon = oscard[zuuluu];
        golfie = 1;
        oscard = oscard[golfie];
        var _closure2_slot0 = oscard;
        offset = _closure1_slot6;
        oscard = offset.useState;
        oscard = oscard.bind(offset)();
        oscard = verify.bind(michal)(oscard, option);
        zuuluu = oscard[zuuluu];
        oscard = oscard[golfie];
        var _closure2_slot1 = oscard;
        oscard = _closure1_slot6;
        report = oscard.useCallback;
        entity = function() {
            tangon = _closure1_slot4;
            zuuluu = undefined;
            michal = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                        StartGenerator();
                        michal = argFoo;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                        if(report) { _fun00062_ip = 936; continue _fun00061 }
 15:
                        romeon = michal.guildId;
                        kiloes = michal.editStateId;
                        zuuluu = michal.groupListingId;
                        yankee = michal.onBeforeDispatchNewListing;
                        backup = michal.onAfterDispatchNewListing;
                        oscard = undefined;
                        verify = undefined;
                        sizing = undefined;
                        foxtra = undefined;
                        SaveGenerator(address=56);
 54:
                        return oscard;
 56:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(report) { _fun00062_ip = 933; continue _fun00061 }
 65:
                        output = kiloes;
                        verify = output;
                        option = _closure1_slot8;
                        report = option.getSubscriptionListing;
                        sizing = report.bind(option)(output);
 89: // try_start_0 // try_start_2
                        output = _closure2_slot0;
                        option = true;
                        output = output.bind(oscard)(option);
                        output = _closure2_slot1;
                        output = output.bind(oscard)(oscard);
                        update = null;
                        if(!(update == sizing)) { _fun00062_ip = 231; continue _fun00061 }
 118:
                        sizing = {};
                        output = romeon;
                        sizing['guildId'] = output;
                        output = verify;
                        sizing['editStateId'] = output;
                        output = zuuluu;
                        sizing['groupListingId'] = output;
                        sizing['onBeforeDispatchNewListing'] = yankee;
                        yankee = function() { // Original name: createListingFromEditState
                            entity = undefined;
                            tangon = _closure1_slot25;
                            zuuluu = tangon.apply;
                            entity = arguments;
                            michal = entity;
                            entity = this;
                            entity = zuuluu.bind(tangon)(entity, michal);
                            return entity;
                        };
                        yankee = yankee.bind(oscard)(sizing);
                        SaveGenerator(address=164);
 162:
                        return yankee;
 164:
                        ResumeGenerator(result_out_reg=10, return_bool_out_reg=15);
                        if(sizing) { _fun00062_ip = 217; continue _fun00061 }
 170:
                        foxtra = yankee;
                        output = kiloes;
                        sizing = yankee.id;
                        verify = sizing;
                        kiloes = function(argFoo, argBar) { // Original name: moveEditState
                            entity = argFoo;
                            var _closure6_slot0 = entity;
                            entity = argBar;
                            var _closure6_slot1 = entity;
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot3;
                            entity = 19;
                            zuuluu = zuuluu[entity];
                            entity = undefined;
                            tangon = tangon.bind(entity)(zuuluu);
                            zuuluu = tangon.batchUpdates;
                            michal = function() {
                                zuuluu = _closure1_slot10;
                                michal = zuuluu.setState;
                                entity = function(argFoo) {
                                    zuuluu = argFoo;
                                    entity = {};
                                    michal = {};
                                    oscard = zuuluu.listings;
                                    golfie = michal;
                                    tangon = copyDataProperties(golfie, oscard);
                                    report = _closure6_slot1;
                                    zuuluu = zuuluu.listings;
                                    tangon = _closure6_slot0;
                                    zuuluu = zuuluu[tangon];
                                    michal[report] = zuuluu;
                                    zuuluu = undefined;
                                    michal[tangon] = zuuluu;
                                    entity['listings'] = michal;
                                    return entity;
                                };
                                entity = michal.bind(zuuluu)(entity);
                                entity = undefined;
                                return entity;
                            };
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        };
                        kiloes = kiloes.bind(oscard)(output, sizing);
                        kiloes = backup;
                        if(!(update != kiloes)) { _fun00062_ip = 781; continue _fun00061 }
 207:
                        foxtra = backup.bind(oscard)(foxtra);
                        _fun00062_ip = 781; continue _fun00061;
 217: // try_end0 // try_end2
                        backup = _closure2_slot0;
                        foxtra = false;
                        foxtra = backup.bind(oscard)(foxtra);
                        return yankee;
 231: // try_start_1 // try_start_3
                        foxtra = _closure1_slot1;
                        kiloes = _closure1_slot3;
                        yankee = 20;
                        backup = kiloes[yankee];
                        output = foxtra.bind(oscard)(backup);
                        backup = zuuluu;
                        sizing = update != backup;
                        zuuluu = 'groupListingId is null';
                        zuuluu = output.bind(oscard)(sizing, zuuluu);
                        zuuluu = {};
                        sizing = romeon;
                        zuuluu['guildId'] = sizing;
                        sizing = verify;
                        zuuluu['editStateId'] = sizing;
                        zuuluu['groupListingId'] = backup;
                        result = zuuluu.guildId;
                        sizing = zuuluu.editStateId;
                        output = zuuluu.groupListingId;
                        backup = _closure1_slot8;
                        zuuluu = backup.getSubscriptionListing;
                        zuuluu = zuuluu.bind(backup)(sizing);
                        backup = kiloes[yankee];
                        source = foxtra.bind(oscard)(backup);
                        echoed = update != zuuluu;
                        backup = 'listing doesnt exist';
                        backup = source.bind(oscard)(echoed, backup);
                        echoed = _closure1_slot10;
                        backup = echoed.getState;
                        backup = backup.bind(echoed)();
                        backup = backup.listings;
                        backup = backup[sizing];
                        yankee = kiloes[yankee];
                        kiloes = foxtra.bind(oscard)(yankee);
                        foxtra = update != backup;
                        yankee = 'edit state does not exist';
                        yankee = kiloes.bind(oscard)(foxtra, yankee);
                        vacuum = backup.name;
                        source = backup.description;
                        yankee = backup.channelBenefits;
                        echoed = backup.intangibleBenefits;
                        ctrled = backup.priceTier;
                        foxtra = backup.image;
                        backup = backup.channelAccessFormat;
                        kiloes = {};
                        sequen = zuuluu.name;
                        if(!(vacuum !== sequen)) { _fun00062_ip = 455; continue _fun00061 }
 449:
                        kiloes['name'] = vacuum;
 455:
                        vacuum = zuuluu.description;
                        if(!(source !== vacuum)) { _fun00062_ip = 470; continue _fun00061 }
 464:
                        kiloes['description'] = source;
 470:
                        vacuum = zuuluu.subscription_plans;
                        source = 0;
                        sequen = vacuum[source];
                        config = update == sequen;
                        vacuum = undefined;
                        if(config) { _fun00062_ip = 497; continue _fun00061 }
 491:
                        vacuum = sequen.price;
 497:
                        if(!(ctrled !== vacuum)) { _fun00062_ip = 507; continue _fun00061 }
 501:
                        kiloes['priceTier'] = ctrled;
 507:
                        if(!(update != foxtra)) { _fun00062_ip = 517; continue _fun00061 }
 511:
                        kiloes['image'] = foxtra;
 517:
                        if(!(update != backup)) { _fun00062_ip = 541; continue _fun00061 }
 521:
                        foxtra = _closure1_slot9;
                        foxtra = foxtra.ALL_CHANNELS_ACCESS;
                        foxtra = backup === foxtra;
                        kiloes['can_access_all_channels'] = foxtra;
 541:
                        if(!(update == yankee)) { _fun00062_ip = 552; continue _fun00061 }
 545:
                        if(!(update != echoed)) { _fun00062_ip = 686; continue _fun00061 }
 552:
                        foxtra = zuuluu.role_benefits;
                        vacuum = foxtra.benefits;
                        ctrled = vacuum.filter;
                        sequen = _closure1_slot0;
                        config = _closure1_slot3;
                        foxtra = 16;
                        backup = config[foxtra];
                        backup = sequen.bind(oscard)(backup);
                        backup = backup.isChannelBenefit;
                        backup = ctrled.bind(vacuum)(backup);
                        ctrled = zuuluu.role_benefits;
                        vacuum = ctrled.benefits;
                        ctrled = vacuum.filter;
                        foxtra = config[foxtra];
                        foxtra = sequen.bind(oscard)(foxtra);
                        foxtra = foxtra.isIntangibleBenefit;
                        foxtra = ctrled.bind(vacuum)(foxtra);
                        if(!(update != yankee)) { _fun00062_ip = 644; continue _fun00061 }
 641:
                        backup = yankee;
 644:
                        yankee = new Array(0);
                        papara = yankee;
                        cntext = backup;
                        record = 0;
                        backup = arraySpread(papara, cntext, record);
                        if(!(update != echoed)) { _fun00062_ip = 667; continue _fun00061 }
 664:
                        foxtra = echoed;
 667:
                        papara = yankee;
                        cntext = foxtra;
                        record = backup;
                        foxtra = arraySpread(papara, cntext, record);
                        kiloes['benefits'] = yankee;
 686:
                        foxtra = _closure1_slot0;
                        backup = _closure1_slot3;
                        yankee = 23;
                        yankee = backup[yankee];
                        foxtra = foxtra.bind(oscard)(yankee);
                        yankee = foxtra.isEmpty;
                        yankee = yankee.bind(foxtra)(kiloes);
                        if(yankee) { _fun00062_ip = 771; continue _fun00061 }
 720:
                        foxtra = _closure1_slot2;
                        backup = _closure1_slot3;
                        yankee = 22;
                        yankee = backup[yankee];
                        backup = foxtra.bind(oscard)(yankee);
                        foxtra = backup.updateSubscriptionListing;
                        yankee = {};
                        yankee['guildId'] = result;
                        yankee['groupListingId'] = output;
                        yankee['listingId'] = sizing;
                        yankee['data'] = kiloes;
                        zuuluu = foxtra.bind(backup)(yankee);
 771:
                        SaveGenerator(address=775);
 773:
                        return zuuluu;
 775:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=10);
                        if(yankee) { _fun00062_ip = 854; continue _fun00061 }
 781:
                        yankee = {};
                        yankee['guildId'] = romeon;
                        romeon = verify;
                        yankee['editStateId'] = romeon;
                        golfie = function() { // Original name: updateListingPeripheralsFromEditState
                            entity = undefined;
                            tangon = _closure1_slot24;
                            zuuluu = tangon.apply;
                            entity = arguments;
                            michal = entity;
                            entity = this;
                            entity = zuuluu.bind(tangon)(entity, michal);
                            return entity;
                        };
                        golfie = golfie.bind(oscard)(yankee);
                        SaveGenerator(address=811);
 809:
                        return golfie;
 811:
                        ResumeGenerator(result_out_reg=6, return_bool_out_reg=10);
                        if(yankee) { _fun00062_ip = 840; continue _fun00061 }
 817:
                        offset = _closure1_slot23;
                        verify = offset.bind(oscard)(verify);
 826: // try_end1 // try_end3
                        offset = _closure2_slot0;
                        verify = false;
                        verify = offset.bind(oscard)(verify);
                        return option;
 840:
                        verify = _closure2_slot0;
                        option = false;
                        option = verify.bind(oscard)(option);
                        return golfie;
 854:
                        golfie = _closure2_slot0;
                        report = false;
                        report = golfie.bind(oscard)(report);
                        return zuuluu;
 868: // try_start_4 // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=4);
                        tangon = report;
                        zuuluu = 'getAnyErrorMessage';
                        zuuluu = zuuluu in report;
                        if(zuuluu) { _fun00062_ip = 889; continue _fun00061 }
 884:
                        zuuluu = tangon;
                        throw zuuluu;
 889:
                        report = _closure2_slot1;
                        tangon = report.bind(oscard)(tangon);
 901: // try_end4
                        tangon = _closure2_slot0;
                        zuuluu = false;
                        zuuluu = tangon.bind(oscard)(zuuluu);
                        return oscard;
 915: // catch_target2 // catch_target3 // catch_target4
                        CatchBlockStart(arg_register=2);
                        report = _closure2_slot0;
                        tangon = false;
                        tangon = report.bind(oscard)(tangon);
                        throw zuuluu;
 933:
                        return michal;
 936:
                        return entity;
                    }
                };
                michal = entity.next;
                michal = michal.bind(entity)();
                return entity;
            };
            michal = tangon.bind(zuuluu)(michal);
            var _closure3_slot0 = michal;
            entity = function() {
                entity = undefined;
                tangon = _closure3_slot0;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            return entity;
        };
        michal = entity.bind(michal)();
        entity = new Array(0);
        michal = report.bind(oscard)(michal, entity);
        entity = {};
        entity['loading'] = tangon;
        entity['error'] = zuuluu;
        entity['handleCreateOrUpdateFromEditState'] = michal;
        return entity;
    };
    zuuluu['useCreateOrUpdateListingFromEditState'] = tangon;
    michal = function(argFoo, argBar) { // Original name: useEditStateIds
        _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
            golfie = argBar;
            oscard = arguments[2];
            var _closure2_slot0 = golfie;
            option = undefined;
            if(!(oscard === option)) { _fun00064_ip = 30; continue _fun00063 }
 18:
            entity = {};
            zuuluu = false;
            entity['includeSoftDeleted'] = zuuluu;
            oscard = entity;
 30:
            var _closure2_slot1 = option;
            var _closure2_slot2 = option;
            var _closure2_slot3 = option;
            var _closure2_slot4 = option;
            tangon = _closure1_slot0;
            report = _closure1_slot3;
            entity = 17;
            entity = report[entity];
            report = tangon.bind(option)(entity);
            tangon = report.useSubscriptionListingsForGroup;
            entity = argFoo;
            report = tangon.bind(report)(entity, oscard);
            _closure2_slot1 = report;
            tangon = _closure1_slot10;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.editStateIdsForGroup;
                entity = _closure2_slot0;
                entity = michal[entity];
                return entity;
            };
            yankee = tangon.bind(option)(entity);
            _closure2_slot2 = yankee;
            tangon = _closure1_slot10;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.setEditStateIdsForGroup;
                return entity;
            };
            oscard = tangon.bind(option)(entity);
            _closure2_slot3 = oscard;
            tangon = _closure1_slot10;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.setListing;
                return entity;
            };
            tangon = tangon.bind(option)(entity);
            _closure2_slot4 = tangon;
            entity = {};
            offset = _closure1_slot6;
            verify = offset.useMemo;
            option = new Array(2);
            option[0] = yankee;
            option[1] = report;
            report = function() {
                _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.map;
                    entity = function(argFoo) {
                        entity = argFoo;
                        entity = entity.id;
                        return entity;
                    };
                    golfie = michal.bind(zuuluu)(entity);
                    entity = new Array(0);
                    oscard = 0;
                    option = entity;
                    zuuluu = arraySpread(option, golfie, oscard);
                    report = _closure2_slot2;
                    michal = null;
                    if(!(michal == report)) { _fun00066_ip = 55; continue _fun00065 }
 49:
                    michal = new Array(0);
                    _fun00066_ip = 59; continue _fun00065;
 55:
                    michal = _closure2_slot2;
 59:
                    option = entity;
                    golfie = michal;
                    oscard = zuuluu;
                    michal = arraySpread(option, golfie, oscard);
                    return entity;
                }
            };
            report = verify.bind(offset)(report, option);
            entity['editStateIds'] = report;
            offset = _closure1_slot6;
            verify = offset.useCallback;
            option = new Array(2);
            option[0] = golfie;
            option[1] = oscard;
            report = function() {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot3;
                entity = 26;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.v4;
                zuuluu = zuuluu.bind(tangon)();
                var _closure3_slot0 = zuuluu;
                tangon = _closure2_slot3;
                zuuluu = _closure2_slot0;
                michal = function(argFoo) {
                    _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
                        zuuluu = argFoo;
                        entity = null;
                        if(!(entity == zuuluu)) { _fun00068_ip = 13; continue _fun00067 }
 9:
                        zuuluu = new Array(0);
 13:
                        entity = new Array(1);
                        tangon = 0;
                        oscard = entity;
                        report = zuuluu;
                        zuuluu = arraySpread(oscard, report, tangon);
                        michal = _closure3_slot0;
                        entity[zuuluu] = michal;
                        michal = 1;
                        michal = zuuluu + michal;
                        return entity;
                    }
                };
                michal = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            report = verify.bind(offset)(report, option);
            entity['addNewEditStateId'] = report;
            verify = _closure1_slot6;
            option = verify.useCallback;
            report = new Array(3);
            report[0] = golfie;
            report[1] = oscard;
            report[2] = tangon;
            tangon = function(argFoo) {
                zuuluu = argFoo;
                var _closure3_slot0 = zuuluu;
                tangon = _closure1_slot0;
                report = _closure1_slot3;
                entity = 26;
                entity = report[entity];
                golfie = undefined;
                tangon = tangon.bind(golfie)(entity);
                entity = tangon.v4;
                entity = entity.bind(tangon)();
                var _closure3_slot1 = entity;
                oscard = _closure2_slot3;
                report = _closure2_slot0;
                tangon = function(argFoo) {
                    _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
                        zuuluu = argFoo;
                        entity = null;
                        if(!(entity == zuuluu)) { _fun00070_ip = 13; continue _fun00069 }
 9:
                        zuuluu = new Array(0);
 13:
                        entity = new Array(1);
                        tangon = 0;
                        oscard = entity;
                        report = zuuluu;
                        zuuluu = arraySpread(oscard, report, tangon);
                        michal = _closure3_slot1;
                        entity[zuuluu] = michal;
                        michal = 1;
                        michal = zuuluu + michal;
                        return entity;
                    }
                };
                tangon = oscard.bind(golfie)(report, tangon);
                tangon = zuuluu.listings;
                zuuluu = tangon.forEach;
                michal = function(argFoo) {
                    entity = argFoo;
                    var _closure4_slot0 = entity;
                    tangon = _closure2_slot4;
                    zuuluu = _closure3_slot1;
                    entity = undefined;
                    michal = function() {
                        entity = {};
                        michal = _closure4_slot0;
                        zuuluu = michal.name;
                        entity['name'] = zuuluu;
                        zuuluu = michal.description;
                        entity['description'] = zuuluu;
                        zuuluu = michal.price_tier;
                        entity['priceTier'] = zuuluu;
                        zuuluu = michal.image;
                        entity['image'] = zuuluu;
                        zuuluu = michal.additional_perks;
                        entity['intangibleBenefits'] = zuuluu;
                        report = michal.channels;
                        tangon = report.map;
                        zuuluu = function(argFoo) {
                            michal = argFoo;
                            entity = {};
                            zuuluu = michal.id;
                            entity['ref_id'] = zuuluu;
                            zuuluu = _closure1_slot11;
                            zuuluu = zuuluu.CHANNEL;
                            entity['ref_type'] = zuuluu;
                            zuuluu = michal.description;
                            entity['description'] = zuuluu;
                            zuuluu = michal.name;
                            entity['name'] = zuuluu;
                            michal = michal.emoji_name;
                            entity['emoji_name'] = michal;
                            return entity;
                        };
                        zuuluu = tangon.bind(report)(zuuluu);
                        entity['channelBenefits'] = zuuluu;
                        zuuluu = {};
                        tangon = undefined;
                        zuuluu['unicodeEmoji'] = tangon;
                        tangon = michal.image;
                        zuuluu['icon'] = tangon;
                        entity['roleIcon'] = zuuluu;
                        michal = michal.role_color;
                        entity['roleColor'] = michal;
                        michal = _closure3_slot0;
                        michal = michal.category;
                        entity['usedTemplate'] = michal;
                        return entity;
                    };
                    michal = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            tangon = option.bind(verify)(tangon, report);
            entity['addNewEditStateFromTemplate'] = tangon;
            report = _closure1_slot6;
            tangon = report.useCallback;
            zuuluu = new Array(2);
            zuuluu[0] = golfie;
            zuuluu[1] = oscard;
            michal = function(argFoo) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                tangon = _closure2_slot3;
                zuuluu = _closure2_slot0;
                entity = undefined;
                michal = function(argFoo) {
                    _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
                        zuuluu = argFoo;
                        entity = null;
                        if(!(entity == zuuluu)) { _fun00072_ip = 13; continue _fun00071 }
 9:
                        zuuluu = new Array(0);
 13:
                        michal = zuuluu.filter;
                        entity = function(argFoo) {
                            michal = _closure3_slot0;
                            entity = argFoo;
                            entity = entity !== michal;
                            return entity;
                        };
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    }
                };
                michal = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            michal = tangon.bind(report)(michal, zuuluu);
            entity['removeEditStateId'] = michal;
            return entity;
        }
    };
    zuuluu['useEditStateIds'] = michal;
    return entity;
})();