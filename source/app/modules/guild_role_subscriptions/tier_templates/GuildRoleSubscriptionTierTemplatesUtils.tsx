// app/modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun96869: for(var _fun96869_ip = 0; ; ) switch(_fun96869_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun96869_ip = 46; continue _fun96869 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun96869_ip = 55; continue _fun96869 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun96869_ip = 345; continue _fun96869 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun96869_ip = 323; continue _fun96869 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun96869_ip = 283; continue _fun96869 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun96869_ip = 270; continue _fun96869 }
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
            if(!golf) { _fun96869_ip = 163; continue _fun96869 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun96869_ip = 179; continue _fun96869 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun96869_ip = 249; continue _fun96869 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun96869_ip = 249; continue _fun96869 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun96869_ip = 234; continue _fun96869 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun96869_ip = 247; continue _fun96869 }
 234:
            verify = _closure1_slot12;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun96869_ip = 265; continue _fun96869;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun96869_ip = 283; continue _fun96869;
 270:
            golf = _closure1_slot12;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun96869_ip = 323; continue _fun96869 }
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
            if(!tango) { _fun96869_ip = 330; continue _fun96869 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun96870: for(var _fun96870_ip = 0; ; ) switch(_fun96870_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun96870_ip = 56; continue _fun96870 }
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
                    _fun96870_ip = 67; continue _fun96870;
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
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun96871: for(var _fun96871_ip = 0; ; ) switch(_fun96871_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun96871_ip = 23; continue _fun96871 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun96871_ip = 33; continue _fun96871 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun96871_ip = 70; continue _fun96871 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun96871_ip = 55; continue _fun96871 }
 70:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: getUsedTemplateChannelsForGuild
        _fun96872: for(var _fun96872_ip = 0; ; ) switch(_fun96872_ip) {
 0:
            verify = argFoo;
            zulu = _closure1_slot6;
            mike = zulu.getState;
            mike = mike.bind(zulu)();
            mike = mike.editStateIdsForGroup;
            tango = mike[verify];
            zulu = _closure1_slot6;
            mike = zulu.getState;
            mike = mike.bind(zulu)();
            mike = mike.listings;
            var _closure2_slot0 = mike;
            mike = global;
            mike = mike.Set;
            zulu = mike.prototype;
            zulu = Object.create(zulu, {constructor: {value: mike}});
            backup = zulu;
            mike = new backup[mike](foxtrot);
            zulu = mike instanceof Object ? mike : zulu;
            var _closure2_slot1 = zulu;
            golf = null;
            if(!(golf != tango)) { _fun96872_ip = 111; continue _fun96872 }
 94:
            mike = tango.forEach;
            entity = function(argFoo) {
                _fun96873: for(var _fun96873_ip = 0; ; ) switch(_fun96873_ip) {
 0:
                    mike = _closure2_slot0;
                    entity = argFoo;
                    zulu = mike[entity];
                    mike = null;
                    report = mike == zulu;
                    entity = undefined;
                    tango = undefined;
                    if(report) { _fun96873_ip = 33; continue _fun96873 }
 27:
                    tango = zulu.channelBenefits;
 33:
                    if(!(mike != tango)) { _fun96873_ip = 56; continue _fun96873 }
 37:
                    zulu = tango.forEach;
                    mike = function(argFoo) {
                        _fun96874: for(var _fun96874_ip = 0; ; ) switch(_fun96874_ip) {
 0:
                            entity = argFoo;
                            tango = _closure1_slot7;
                            zulu = tango.getChannel;
                            mike = entity.ref_id;
                            zulu = zulu.bind(tango)(mike);
                            mike = null;
                            if(!(mike != zulu)) { _fun96874_ip = 55; continue _fun96874 }
 32:
                            zulu = _closure2_slot1;
                            mike = zulu.add;
                            entity = entity.ref_id;
                            entity = mike.bind(zulu)(entity);
 55:
                            entity = undefined;
                            return entity;
                        }
                    };
                    mike = zulu.bind(tango)(mike);
 56:
                    return entity;
                }
            };
            entity = mike.bind(tango)(entity);
 111:
            entity = new Array(0);
            mike = _closure1_slot11;
            oscar = undefined;
            report = mike.bind(oscar)(zulu);
            zulu = report.bind(oscar)();
            mike = zulu.done;
            tango = 'guild_id';
            if(mike) { _fun96872_ip = 201; continue _fun96872 }
 142:
            yankee = zulu.value;
            offset = _closure1_slot7;
            mike = offset.getChannel;
            offset = mike.bind(offset)(yankee);
            if(!(golf != offset)) { _fun96872_ip = 186; continue _fun96872 }
 165:
            mike = offset.set;
            offset = mike.bind(offset)(tango, verify);
            mike = entity.push;
            mike = mike.bind(entity)(offset);
 186:
            offset = report.bind(oscar)();
            mike = offset.done;
            zulu = offset;
            if(!mike) { _fun96872_ip = 142; continue _fun96872 }
 201:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _createChannelsFromTemplateTierBenefits
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun96877: for(var _fun96877_ip = 0; ; ) switch(_fun96877_ip) {
 0:
                    StartGenerator();
                    oscar = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun96877_ip = 121; continue _fun96877 }
 12:
                    mike = argFoo;
                    var _closure4_slot0 = mike;
                    var _closure4_slot1 = oscar;
                    report = new Array(0);
                    var _closure4_slot2 = report;
                    mike = new Array(0);
                    var _closure4_slot3 = mike;
                    tango = oscar.forEach;
                    mike = function(argFoo) {
                        _fun96878: for(var _fun96878_ip = 0; ; ) switch(_fun96878_ip) {
 0:
                            tango = _closure1_slot7;
                            zulu = tango.getChannel;
                            entity = argFoo;
                            entity = entity.ref_id;
                            zulu = zulu.bind(tango)(entity);
                            entity = null;
                            if(!(entity != zulu)) { _fun96878_ip = 118; continue _fun96878 }
 32:
                            report = _closure4_slot2;
                            tango = report.push;
                            golf = _closure1_slot1;
                            oscar = _closure1_slot2;
                            mike = 10;
                            oscar = oscar[mike];
                            mike = undefined;
                            offset = golf.bind(mike)(oscar);
                            verify = offset.createRoleSubscriptionTemplateChannel;
                            backup = _closure4_slot0;
                            foxtrot = zulu.name;
                            romeo = zulu.type;
                            yankee = zulu.topic;
                            kilo = offset;
                            mike = kilo[verify](backup, foxtrot, romeo, yankee, offset);
                            mike = tango.bind(report)(mike);
                            mike = _closure4_slot3;
                            entity = mike.push;
                            entity = entity.bind(mike)(zulu);
 118:
                            entity = undefined;
                            return entity;
                        }
                    };
                    mike = tango.bind(oscar)(mike);
                    tango = report.length;
                    mike = 0;
                    if(!(mike !== tango)) { _fun96877_ip = 113; continue _fun96877 }
 67:
                    mike = global;
                    tango = mike.Promise;
                    mike = tango.allSettled;
                    mike = mike.bind(tango)(report);
                    SaveGenerator(address=90);
 88:
                    return mike;
 90:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun96877_ip = 118; continue _fun96877 }
 96:
                    tango = mike.forEach;
                    zulu = function(argFoo, argBar) {
                        _fun96879: for(var _fun96879_ip = 0; ; ) switch(_fun96879_ip) {
 0:
                            mike = argFoo;
                            report = _closure4_slot3;
                            tango = argBar;
                            tango = report[tango];
                            tango = tango.id;
                            var _closure5_slot0 = tango;
                            report = mike.status;
                            tango = 'fulfilled';
                            if(!(tango !== report)) { _fun96879_ip = 120; continue _fun96879 }
 43:
                            tango = _closure4_slot1;
                            report = null;
                            if(!(report != tango)) { _fun96879_ip = 212; continue _fun96879 }
 56:
                            golf = _closure4_slot1;
                            oscar = golf.findIndex;
                            tango = function(argFoo) {
                                entity = argFoo;
                                mike = entity.ref_id;
                                entity = _closure5_slot0;
                                entity = mike === entity;
                                return entity;
                            };
                            golf = oscar.bind(golf)(tango);
                            tango = -1;
                            if(!(tango !== golf)) { _fun96879_ip = 212; continue _fun96879 }
 91:
                            tango = _closure4_slot1;
                            if(!(report != tango)) { _fun96879_ip = 212; continue _fun96879 }
 99:
                            oscar = _closure4_slot1;
                            report = oscar.splice;
                            tango = 1;
                            tango = report.bind(oscar)(golf, tango);
                            _fun96879_ip = 212; continue _fun96879;
 120:
                            mike = mike.value;
                            mike = mike.body;
                            var _closure5_slot1 = mike;
                            report = _closure1_slot6;
                            tango = report.getState;
                            tango = tango.bind(report)();
                            tango = tango.editStateIdsForGroup;
                            zulu = _closure4_slot0;
                            zulu = tango[zulu];
                            tango = _closure1_slot6;
                            mike = tango.getState;
                            mike = mike.bind(tango)();
                            mike = mike.listings;
                            var _closure5_slot2 = mike;
                            mike = null;
                            if(!(mike != zulu)) { _fun96879_ip = 212; continue _fun96879 }
 195:
                            mike = zulu.forEach;
                            entity = function(argFoo) {
                                _fun96880: for(var _fun96880_ip = 0; ; ) switch(_fun96880_ip) {
 0:
                                    mike = _closure5_slot2;
                                    entity = argFoo;
                                    zulu = mike[entity];
                                    mike = null;
                                    report = mike == zulu;
                                    entity = undefined;
                                    tango = undefined;
                                    if(report) { _fun96880_ip = 33; continue _fun96880 }
 27:
                                    tango = zulu.channelBenefits;
 33:
                                    if(!(mike != tango)) { _fun96880_ip = 56; continue _fun96880 }
 37:
                                    zulu = tango.forEach;
                                    mike = function(argFoo) {
                                        _fun96881: for(var _fun96881_ip = 0; ; ) switch(_fun96881_ip) {
 0:
                                            mike = argFoo;
                                            tango = mike.ref_id;
                                            zulu = _closure5_slot0;
                                            if(!(tango === zulu)) { _fun96881_ip = 35; continue _fun96881 }
 20:
                                            entity = _closure5_slot1;
                                            entity = entity.id;
                                            mike['ref_id'] = entity;
 35:
                                            entity = undefined;
                                            return entity;
                                        }
                                    };
                                    mike = zulu.bind(tango)(mike);
 56:
                                    return entity;
                                }
                            };
                            entity = mike.bind(zulu)(entity);
 212:
                            entity = undefined;
                            return entity;
                        }
                    };
                    zulu = tango.bind(mike)(zulu);
 113:
                    zulu = undefined;
                    return zulu;
 118:
                    return mike;
 121:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot14 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot14 = entity;
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
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.useEditStateStore;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildFeatures;
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelFlags;
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    golf = golf.bind(entity)(tango);
    tango = golf.shim;
    tango = tango.bind(golf)();
    tango = {};
    var _closure1_slot10 = tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useChannelWithTemplateFallback
        _fun96883: for(var _fun96883_ip = 0; ; ) switch(_fun96883_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 8;
            mike = golf[tango];
            report = undefined;
            offset = oscar.bind(report)(mike);
            verify = offset.useStateFromStores;
            mike = _closure1_slot4;
            options = new Array(1);
            options[0] = mike;
            mike = function() {
                zulu = _closure1_slot4;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = verify.bind(offset)(options, mike);
            tango = golf[tango];
            report = oscar.bind(report)(tango);
            tango = report.useStateFromStores;
            oscar = _closure1_slot7;
            zulu = new Array(1);
            zulu[0] = oscar;
            entity = function() {
                zulu = _closure1_slot7;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = tango.bind(report)(zulu, entity);
            zulu = null;
            if(!(zulu != mike)) { _fun96883_ip = 112; continue _fun96883 }
 109:
            entity = mike;
 112:
            return entity;
        }
    };
    zulu['useChannelWithTemplateFallback'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: useSuggestedUnusedPrices
        _fun96886: for(var _fun96886_ip = 0; ; ) switch(_fun96886_ip) {
 0:
            oscar = argBar;
            mike = argBaz;
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            golf = _closure1_slot0;
            report = _closure1_slot2;
            tango = 8;
            report = report[tango];
            tango = undefined;
            verify = golf.bind(tango)(report);
            options = verify.useStateFromStores;
            report = _closure1_slot5;
            golf = new Array(1);
            golf[0] = report;
            report = function() {
                zulu = _closure1_slot5;
                mike = zulu.getSubscriptionListingsForGuild;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            options = options.bind(verify)(golf, report);
            golf = _closure1_slot6;
            report = function(argFoo) {
                entity = argFoo;
                mike = entity.editStateIdsForGroup;
                entity = _closure2_slot0;
                entity = mike[entity];
                return entity;
            };
            golf = golf.bind(tango)(report);
            report = _closure1_slot6;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.listings;
                return entity;
            };
            zulu = report.bind(tango)(zulu);
            var _closure2_slot1 = zulu;
            if(!(tango !== mike)) { _fun96886_ip = 341; continue _fun96886 }
 113:
            if(!(tango !== oscar)) { _fun96886_ip = 341; continue _fun96886 }
 120:
            report = options.filter;
            zulu = function(argFoo) {
                _fun96890: for(var _fun96890_ip = 0; ; ) switch(_fun96890_ip) {
 0:
                    mike = argFoo;
                    entity = mike.soft_deleted;
                    entity = !entity;
                    if(!entity) { _fun96890_ip = 24; continue _fun96890 }
 15:
                    mike = mike.archived;
                    entity = !mike;
 24:
                    return entity;
                }
            };
            options = report.bind(options)(zulu);
            report = options.map;
            zulu = function(argFoo) {
                entity = argFoo;
                mike = entity.subscription_plans;
                entity = 0;
                entity = mike[entity];
                entity = entity.price;
                return entity;
            };
            report = report.bind(options)(zulu);
            zulu = new Array(0);
            var _closure2_slot2 = zulu;
            if(!(tango !== golf)) { _fun96886_ip = 183; continue _fun96886 }
 166:
            tango = golf.forEach;
            entity = function(argFoo) {
                _fun96892: for(var _fun96892_ip = 0; ; ) switch(_fun96892_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = argFoo;
                    report = zulu[entity];
                    zulu = null;
                    oscar = zulu == report;
                    entity = undefined;
                    tango = undefined;
                    if(oscar) { _fun96892_ip = 33; continue _fun96892 }
 27:
                    tango = report.priceTier;
 33:
                    if(!(zulu != tango)) { _fun96892_ip = 51; continue _fun96892 }
 37:
                    zulu = _closure2_slot2;
                    mike = zulu.push;
                    mike = mike.bind(zulu)(tango);
 51:
                    return entity;
                }
            };
            entity = tango.bind(golf)(entity);
 183:
            entity = global;
            tango = entity.Set;
            entity = zulu.concat;
            yankee = entity.bind(zulu)(report);
            zulu = tango.prototype;
            zulu = Object.create(zulu, {constructor: {value: tango}});
            romeo = zulu;
            entity = new romeo[tango](yankee, offset);
            report = entity instanceof Object ? entity : zulu;
            entity = report.has;
            entity = entity.bind(report)(mike);
            if(entity) { _fun96886_ip = 238; continue _fun96886 }
 234:
            entity = null;
            return entity;
 238:
            entity = oscar.indexOf;
            zulu = entity.bind(oscar)(mike);
            entity = -1;
            if(!(entity !== zulu)) { _fun96886_ip = 337; continue _fun96886 }
 258:
            entity = new Array(0);
            mike = 1;
            tango = zulu + mike;
            mike = oscar.length;
            zulu = 3;
            if(!(tango < mike)) { _fun96886_ip = 333; continue _fun96886 }
 281:
            golf = report.has;
            mike = oscar[tango];
            mike = golf.bind(report)(mike);
            if(mike) { _fun96886_ip = 312; continue _fun96886 }
 298:
            golf = entity.push;
            mike = oscar[tango];
            mike = golf.bind(entity)(mike);
 312:
            mike = entity.length;
            if(!(zulu !== mike)) { _fun96886_ip = 335; continue _fun96886 }
 321:
            tango = tango + 1;
            mike = oscar.length;
            if(tango < mike) { _fun96886_ip = 281; continue _fun96886 }
 333:
            return entity;
 335:
            return entity;
 337:
            entity = null;
            return entity;
 341:
            entity = null;
            return entity;
        }
    };
    zulu['useSuggestedUnusedPrices'] = tango;
    tango = function(argFoo) { // Original name: announceCreateTemplateChannels
        zulu = argFoo;
        tango = _closure1_slot13;
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        mike = _closure1_slot10;
        mike[zulu] = tango;
        zulu = tango.forEach;
        mike = function(argFoo) {
            report = argFoo;
            tango = report.set;
            mike = _closure1_slot9;
            zulu = mike.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL;
            mike = 'flags';
            report = tango.bind(report)(mike, zulu);
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'CHANNEL_CREATE';
            mike['type'] = oscar;
            mike['channel'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['announceCreateTemplateChannels'] = tango;
    tango = function(argFoo) { // Original name: announceDeleteTemplateChannels
        _fun96895: for(var _fun96895_ip = 0; ; ) switch(_fun96895_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot10;
            zulu = mike[tango];
            mike = null;
            if(!(mike == zulu)) { _fun96895_ip = 31; continue _fun96895 }
 20:
            mike = _closure1_slot13;
            entity = undefined;
            zulu = mike.bind(entity)(tango);
 31:
            mike = zulu.forEach;
            entity = function(argFoo) {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 9;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'CHANNEL_DELETE';
                mike['type'] = report;
                report = argFoo;
                mike['channel'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        }
    };
    zulu['announceDeleteTemplateChannels'] = tango;
    tango = function() { // Original name: createChannelsFromTemplateTierBenefits
        entity = undefined;
        tango = _closure1_slot14;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['createChannelsFromTemplateTierBenefits'] = tango;
    tango = function(argFoo, argBar) { // Original name: getTemplateTierCreationAnalyticsContext
        _fun96898: for(var _fun96898_ip = 0; ; ) switch(_fun96898_ip) {
 0:
            zulu = _closure1_slot6;
            mike = zulu.getState;
            mike = mike.bind(zulu)();
            zulu = mike.listings;
            mike = argFoo;
            report = zulu[mike];
            golf = null;
            mike = golf == report;
            tango = undefined;
            if(mike) { _fun96898_ip = 47; continue _fun96898 }
 41:
            tango = report.usedTemplate;
 47:
            if(!(golf != tango)) { _fun96898_ip = 658; continue _fun96898 }
 54:
            zulu = _closure1_slot7;
            mike = zulu.getTemplateWithCategory;
            entity = argBar;
            mike = mike.bind(zulu)(entity, tango);
            if(!(golf != mike)) { _fun96898_ip = 642; continue _fun96898 }
 82:
            entity = mike.listings;
            tango = 0;
            zulu = entity[tango];
            entity = golf == report;
            oscar = undefined;
            if(entity) { _fun96898_ip = 108; continue _fun96898 }
 103:
            oscar = report.name;
 108:
            entity = zulu.name;
            if(!(oscar === entity)) { _fun96898_ip = 621; continue _fun96898 }
 120:
            entity = golf == report;
            oscar = undefined;
            if(entity) { _fun96898_ip = 134; continue _fun96898 }
 129:
            oscar = report.description;
 134:
            entity = zulu.description;
            if(!(oscar === entity)) { _fun96898_ip = 621; continue _fun96898 }
 146:
            entity = golf == report;
            oscar = undefined;
            if(entity) { _fun96898_ip = 161; continue _fun96898 }
 155:
            oscar = report.priceTier;
 161:
            entity = zulu.price_tier;
            if(!(oscar === entity)) { _fun96898_ip = 621; continue _fun96898 }
 174:
            entity = golf == report;
            oscar = undefined;
            if(entity) { _fun96898_ip = 189; continue _fun96898 }
 183:
            oscar = report.image;
 189:
            entity = zulu.image;
            if(!(oscar === entity)) { _fun96898_ip = 621; continue _fun96898 }
 202:
            entity = golf == report;
            oscar = undefined;
            if(entity) { _fun96898_ip = 217; continue _fun96898 }
 211:
            oscar = report.roleColor;
 217:
            entity = zulu.role_color;
            if(!(oscar === entity)) { _fun96898_ip = 621; continue _fun96898 }
 230:
            entity = golf == report;
            oscar = undefined;
            if(entity) { _fun96898_ip = 259; continue _fun96898 }
 239:
            entity = report.channelBenefits;
            verify = golf == entity;
            oscar = undefined;
            if(verify) { _fun96898_ip = 259; continue _fun96898 }
 254:
            oscar = entity.length;
 259:
            entity = zulu.channels;
            entity = entity.length;
            if(!(oscar === entity)) { _fun96898_ip = 600; continue _fun96898 }
 277:
            entity = golf == report;
            oscar = undefined;
            if(entity) { _fun96898_ip = 306; continue _fun96898 }
 286:
            entity = report.intangibleBenefits;
            golf = golf == entity;
            oscar = undefined;
            if(golf) { _fun96898_ip = 306; continue _fun96898 }
 301:
            oscar = entity.length;
 306:
            entity = zulu.additional_perks;
            entity = entity.length;
            if(!(oscar === entity)) { _fun96898_ip = 600; continue _fun96898 }
 324:
            entity = zulu.channels;
            entity = entity.length;
            entity = tango < entity;
            oscar = 0;
            if(!entity) { _fun96898_ip = 435; continue _fun96898 }
 344:
            entity = report.channelBenefits;
            golf = entity[oscar];
            entity = zulu.channels;
            entity = entity[oscar];
            verify = golf.name;
            options = entity.name;
            if(!(verify === options)) { _fun96898_ip = 579; continue _fun96898 }
 381:
            verify = golf.description;
            options = entity.description;
            if(!(verify === options)) { _fun96898_ip = 579; continue _fun96898 }
 398:
            golf = golf.emoji_name;
            entity = entity.emoji_name;
            if(!(golf === entity)) { _fun96898_ip = 579; continue _fun96898 }
 417:
            oscar = oscar + 1;
            entity = zulu.channels;
            entity = entity.length;
            if(oscar < entity) { _fun96898_ip = 344; continue _fun96898 }
 435:
            entity = zulu.additional_perks;
            entity = entity.length;
            entity = tango < entity;
            tango = 0;
            if(!entity) { _fun96898_ip = 537; continue _fun96898 }
 455:
            entity = report.intangibleBenefits;
            oscar = entity[tango];
            entity = zulu.additional_perks;
            entity = entity[tango];
            options = oscar.name;
            golf = entity.name;
            if(!(options === golf)) { _fun96898_ip = 558; continue _fun96898 }
 489:
            options = oscar.description;
            golf = entity.description;
            if(!(options === golf)) { _fun96898_ip = 558; continue _fun96898 }
 503:
            oscar = oscar.emoji_name;
            entity = entity.emoji_name;
            if(!(oscar === entity)) { _fun96898_ip = 558; continue _fun96898 }
 519:
            tango = tango + 1;
            entity = zulu.additional_perks;
            entity = entity.length;
            if(tango < entity) { _fun96898_ip = 455; continue _fun96898 }
 537:
            entity = {};
            zulu = mike.category;
            entity['templateCategory'] = zulu;
            zulu = false;
            entity['hasChangeFromTemplate'] = zulu;
            return entity;
 558:
            entity = {};
            zulu = mike.category;
            entity['templateCategory'] = zulu;
            zulu = true;
            entity['hasChangeFromTemplate'] = zulu;
            return entity;
 579:
            entity = {};
            zulu = mike.category;
            entity['templateCategory'] = zulu;
            zulu = true;
            entity['hasChangeFromTemplate'] = zulu;
            return entity;
 600:
            entity = {};
            zulu = mike.category;
            entity['templateCategory'] = zulu;
            zulu = true;
            entity['hasChangeFromTemplate'] = zulu;
            return entity;
 621:
            entity = {};
            mike = mike.category;
            entity['templateCategory'] = mike;
            mike = true;
            entity['hasChangeFromTemplate'] = mike;
            return entity;
 642:
            entity = {'templateCategory': null, 'hasChangeFromTemplate': null};
            return entity;
 658:
            entity = {'templateCategory': null, 'hasChangeFromTemplate': null};
            return entity;
        }
    };
    zulu['getTemplateTierCreationAnalyticsContext'] = tango;
    mike = function(argFoo) { // Original name: isEligibleForNewBadge
        _fun96899: for(var _fun96899_ip = 0; ; ) switch(_fun96899_ip) {
 0:
            mike = argFoo;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            entity = 11;
            entity = report[entity];
            report = undefined;
            tango = tango.bind(report)(entity);
            entity = tango.canManageGuildRoleSubscriptions;
            entity = entity.bind(tango)(mike);
            if(!entity) { _fun96899_ip = 63; continue _fun96899 }
 42:
            oscar = mike.hasFeature;
            tango = _closure1_slot8;
            tango = tango.ROLE_SUBSCRIPTIONS_ENABLED;
            entity = oscar.bind(mike)(tango);
 63:
            if(!entity) { _fun96899_ip = 96; continue _fun96899 }
 66:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 12;
            tango = golf[tango];
            oscar = oscar.bind(report)(tango);
            tango = oscar.isUserEligibleForTierTemplates;
            entity = tango.bind(oscar)();
 96:
            if(!entity) { _fun96899_ip = 135; continue _fun96899 }
 99:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 12;
            zulu = oscar[zulu];
            tango = tango.bind(report)(zulu);
            zulu = tango.isGuildEligibleForTierTemplates;
            mike = mike.id;
            entity = zulu.bind(tango)(mike);
 135:
            return entity;
        }
    };
    zulu['isEligibleForNewBadge'] = mike;
    return entity;
})();