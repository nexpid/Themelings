// app/modules/app_database/modules/Channels.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun60743: for(var _fun60743_ip = 0; ; ) switch(_fun60743_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun60743_ip = 46; continue _fun60743 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun60743_ip = 55; continue _fun60743 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun60743_ip = 343; continue _fun60743 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun60743_ip = 323; continue _fun60743 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun60743_ip = 283; continue _fun60743 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun60743_ip = 270; continue _fun60743 }
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
            if(!golf) { _fun60743_ip = 163; continue _fun60743 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun60743_ip = 179; continue _fun60743 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun60743_ip = 249; continue _fun60743 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun60743_ip = 249; continue _fun60743 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun60743_ip = 234; continue _fun60743 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun60743_ip = 247; continue _fun60743 }
 234:
            verify = _closure1_slot8;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun60743_ip = 265; continue _fun60743;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun60743_ip = 283; continue _fun60743;
 270:
            golf = _closure1_slot8;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun60743_ip = 323; continue _fun60743 }
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
            if(!tango) { _fun60743_ip = 330; continue _fun60743 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun60744: for(var _fun60744_ip = 0; ; ) switch(_fun60744_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun60744_ip = 56; continue _fun60744 }
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
                    _fun60744_ip = 67; continue _fun60744;
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
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun60745: for(var _fun60745_ip = 0; ; ) switch(_fun60745_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun60745_ip = 23; continue _fun60745 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun60745_ip = 33; continue _fun60745 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun60745_ip = 70; continue _fun60745 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun60745_ip = 55; continue _fun60745 }
 70:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.createChannelRecordFromServer;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    mike = function() {
        tango = _closure1_slot3;
        zulu = function() { // Original name: Channels
            zulu = this;
            var _closure3_slot0 = zulu;
            report = _closure1_slot2;
            mike = _closure2_slot0;
            entity = undefined;
            mike = report.bind(entity)(zulu, mike);
            mike = new Array(0);
            zulu['privateChannels'] = mike;
            mike = {};
            report = function(argFoo, argBar) { // Original name: BACKGROUND_SYNC
                tango = _closure3_slot0;
                zulu = tango.handleBackgroundSync;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['BACKGROUND_SYNC'] = report;
            report = function(argFoo, argBar) { // Original name: CHANNEL_CREATE
                tango = _closure3_slot0;
                zulu = tango.putOne;
                entity = argFoo;
                mike = entity.channel;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['CHANNEL_CREATE'] = report;
            report = function(argFoo, argBar) { // Original name: CHANNEL_DELETE
                entity = argFoo;
                report = _closure3_slot0;
                tango = report.deleteOne;
                mike = entity.channel;
                zulu = mike.guild_id;
                entity = entity.channel;
                mike = entity.id;
                entity = argBar;
                entity = tango.bind(report)(zulu, mike, entity);
                return entity;
            };
            mike['CHANNEL_DELETE'] = report;
            report = function(argFoo, argBar) { // Original name: CHANNEL_RECIPIENT_ADD
                tango = _closure3_slot0;
                zulu = tango.handleChannelRecipientAdd;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['CHANNEL_RECIPIENT_ADD'] = report;
            report = function(argFoo, argBar) { // Original name: CHANNEL_RECIPIENT_REMOVE
                tango = _closure3_slot0;
                zulu = tango.handleChannelRecipientRemove;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['CHANNEL_RECIPIENT_REMOVE'] = report;
            report = function(argFoo, argBar) { // Original name: CHANNEL_UPDATES
                tango = _closure3_slot0;
                zulu = tango.putMany;
                entity = argFoo;
                mike = entity.channels;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['CHANNEL_UPDATES'] = report;
            report = function(argFoo, argBar) { // Original name: CONNECTION_OPEN_SUPPLEMENTAL
                tango = _closure3_slot0;
                zulu = tango.handleConnectionOpenSupplemental;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['CONNECTION_OPEN_SUPPLEMENTAL'] = report;
            report = function(argFoo, argBar) { // Original name: CONNECTION_OPEN
                tango = _closure3_slot0;
                zulu = tango.handleConnectionOpen;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['CONNECTION_OPEN'] = report;
            report = function(argFoo, argBar) { // Original name: GUILD_CREATE
                tango = _closure3_slot0;
                zulu = tango.handleGuildCreate;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['GUILD_CREATE'] = report;
            tango = function(argFoo, argBar) { // Original name: GUILD_DELETE
                tango = _closure3_slot0;
                zulu = tango.handleGuildDelete;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['GUILD_DELETE'] = tango;
            zulu['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'handleBackgroundSync';
        entity['key'] = mike;
        mike = function(argFoo, argBar) { // Original name: value
            _fun60758: for(var _fun60758_ip = 0; ; ) switch(_fun60758_ip) {
 0:
                mike = argBar;
                var _closure3_slot0 = mike;
                mike = this;
                var _closure3_slot1 = mike;
                report = function(argFoo) { // Original name: _loop
                    _fun60759: for(var _fun60759_ip = 0; ; ) switch(_fun60759_ip) {
 0:
                        mike = argFoo;
                        var _closure4_slot0 = mike;
                        golf = function(argFoo) { // Original name: asRecord
                            tango = _closure1_slot4;
                            entity = _closure4_slot0;
                            zulu = entity.id;
                            mike = undefined;
                            entity = argFoo;
                            entity = tango.bind(mike)(entity, zulu);
                            return entity;
                        };
                        zulu = mike.data_mode;
                        entity = 'unavailable';
                        if(!(entity !== zulu)) { _fun60759_ip = 198; continue _fun60759 }
 31:
                        entity = 'partial';
                        if(!(entity !== zulu)) { _fun60759_ip = 91; continue _fun60759 }
 39:
                        options = _closure3_slot1;
                        oscar = options.handleGuildSynchronize;
                        report = mike.id;
                        tango = mike.channels;
                        zulu = tango.map;
                        yankee = zulu.bind(tango)(golf);
                        verify = _closure3_slot0;
                        offset = null;
                        foxtrot = options;
                        romeo = report;
                        entity = foxtrot[oscar](romeo, yankee, offset, verify, options);
                        _fun60759_ip = 198; continue _fun60759;
 91:
                        oscar = {};
                        entity = mike.partial_updates;
                        tango = entity.channels;
                        report = null;
                        zulu = report == tango;
                        entity = undefined;
                        if(zulu) { _fun60759_ip = 126; continue _fun60759 }
 116:
                        zulu = tango.map;
                        entity = zulu.bind(tango)(golf);
 126:
                        if(!(report == entity)) { _fun60759_ip = 134; continue _fun60759 }
 130:
                        entity = new Array(0);
 134:
                        oscar['writes'] = entity;
                        entity = mike.partial_updates;
                        entity = entity.deleted_channel_ids;
                        if(!(report == entity)) { _fun60759_ip = 159; continue _fun60759 }
 155:
                        entity = new Array(0);
 159:
                        oscar['deletes'] = entity;
                        tango = _closure3_slot1;
                        zulu = tango.handleGuildSynchronize;
                        romeo = mike.id;
                        verify = _closure3_slot0;
                        foxtrot = tango;
                        yankee = null;
                        offset = oscar;
                        entity = foxtrot[zulu](romeo, yankee, offset, verify, options);
 198:
                        entity = undefined;
                        return entity;
                    }
                };
                zulu = _closure1_slot7;
                entity = argFoo;
                mike = entity.guilds;
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.bind(entity)();
                mike = zulu.done;
                if(mike) { _fun60758_ip = 81; continue _fun60758 }
 56:
                mike = zulu.value;
                mike = report.bind(entity)(mike);
                oscar = tango.bind(entity)();
                mike = oscar.done;
                zulu = oscar;
                if(!mike) { _fun60758_ip = 56; continue _fun60758 }
 81:
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(14);
        mike[0] = entity;
        entity = {};
        oscar = 'handleConnectionOpen';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: handleConnectionOpen
            _fun60761: for(var _fun60761_ip = 0; ; ) switch(_fun60761_ip) {
 0:
                mike = argFoo;
                golf = argBar;
                zulu = this;
                report = _closure1_slot7;
                tango = mike.guilds;
                entity = undefined;
                oscar = report.bind(entity)(tango);
                report = oscar.bind(entity)();
                tango = report.done;
                if(tango) { _fun60761_ip = 94; continue _fun60761 }
 41:
                tango = report.value;
                offset = zulu.handleGuildSynchronize;
                backup = tango.id;
                foxtrot = tango.channels;
                romeo = tango.channelUpdates;
                kilo = zulu;
                yankee = golf;
                tango = kilo[offset](backup, foxtrot, romeo, yankee, offset);
                options = oscar.bind(entity)();
                tango = options.done;
                report = options;
                if(!tango) { _fun60761_ip = 41; continue _fun60761 }
 94:
                mike = mike.initialPrivateChannels;
                zulu['privateChannels'] = mike;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'handleConnectionOpenSupplemental';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: handleConnectionOpenSupplemental
            mike = this;
            report = mike.replace;
            golf = mike.privateChannels;
            tango = new Array(0);
            oscar = 0;
            options = tango;
            oscar = arraySpread(options, golf, oscar);
            entity = argFoo;
            golf = entity.lazyPrivateChannels;
            options = tango;
            entity = arraySpread(options, golf, oscar);
            zulu = null;
            entity = argBar;
            entity = report.bind(mike)(zulu, tango, entity);
            entity = new Array(0);
            mike['privateChannels'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'handleChannelRecipientAdd';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: handleChannelRecipientAdd
            _fun60763: for(var _fun60763_ip = 0; ; ) switch(_fun60763_ip) {
 0:
                entity = argFoo;
                tango = this;
                oscar = _closure1_slot6;
                report = oscar.getChannel;
                zulu = entity.channelId;
                golf = report.bind(oscar)(zulu);
                zulu = _closure1_slot5;
                mike = zulu.getId;
                oscar = mike.bind(zulu)();
                mike = null;
                mike = mike != golf;
                if(!mike) { _fun60763_ip = 61; continue _fun60763 }
 51:
                zulu = golf.isPrivate;
                mike = zulu.bind(golf)();
 61:
                if(!mike) { _fun60763_ip = 108; continue _fun60763 }
 64:
                zulu = tango.putOne;
                report = golf.addRecipient;
                mike = entity.user;
                mike = mike.id;
                entity = entity.nick;
                mike = report.bind(golf)(mike, entity, oscar);
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
 108:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'handleChannelRecipientRemove';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: handleChannelRecipientRemove
            _fun60764: for(var _fun60764_ip = 0; ; ) switch(_fun60764_ip) {
 0:
                entity = argFoo;
                tango = this;
                report = _closure1_slot6;
                zulu = report.getChannel;
                mike = entity.channelId;
                report = zulu.bind(report)(mike);
                mike = null;
                mike = mike != report;
                if(!mike) { _fun60764_ip = 47; continue _fun60764 }
 37:
                zulu = report.isPrivate;
                mike = zulu.bind(report)();
 47:
                if(!mike) { _fun60764_ip = 86; continue _fun60764 }
 50:
                zulu = tango.putOne;
                mike = report.removeRecipient;
                entity = entity.user;
                entity = entity.id;
                mike = mike.bind(report)(entity);
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
 86:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'handleGuildCreate';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: handleGuildCreate
            entity = argFoo;
            oscar = this;
            report = oscar.handleGuildSynchronize;
            mike = entity.guild;
            offset = mike.id;
            mike = entity.guild;
            verify = mike.channels;
            entity = entity.guild;
            options = entity.channelUpdates;
            golf = argBar;
            yankee = oscar;
            entity = yankee[report](offset, verify, options, golf, oscar);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'handleGuildDelete';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: handleGuildDelete
            tango = this;
            zulu = tango.deleteMany;
            entity = argFoo;
            entity = entity.guild;
            mike = entity.id;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'resetInMemoryState';
        entity['key'] = oscar;
        oscar = function() { // Original name: resetInMemoryState
            mike = new Array(0);
            entity = this;
            entity['privateChannels'] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'handleGuildSynchronize';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz, argCorge) { // Original name: handleGuildSynchronize
            _fun60768: for(var _fun60768_ip = 0; ; ) switch(_fun60768_ip) {
 0:
                oscar = argFoo;
                report = argBar;
                entity = argBaz;
                golf = argCorge;
                tango = this;
                mike = null;
                if(!(mike != report)) { _fun60768_ip = 33; continue _fun60768 }
 21:
                zulu = tango.replace;
                zulu = zulu.bind(tango)(oscar, report, golf);
 33:
                if(!(mike != entity)) { _fun60768_ip = 149; continue _fun60768 }
 37:
                tango = _closure1_slot0;
                report = _closure1_slot1;
                zulu = 5;
                zulu = report[zulu];
                report = undefined;
                tango = tango.bind(report)(zulu);
                zulu = tango.channelsTransaction;
                tango = zulu.bind(tango)(golf);
                golf = tango.putAll;
                zulu = entity.writes;
                zulu = golf.bind(tango)(oscar, zulu);
                mike = _closure1_slot7;
                entity = entity.deletes;
                zulu = mike.bind(report)(entity);
                mike = zulu.bind(report)();
                entity = mike.done;
                if(entity) { _fun60768_ip = 149; continue _fun60768 }
 118:
                golf = mike.value;
                entity = tango.delete;
                entity = entity.bind(tango)(oscar, golf);
                golf = zulu.bind(report)();
                entity = golf.done;
                mike = golf;
                if(!entity) { _fun60768_ip = 118; continue _fun60768 }
 149:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'putOne';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: putOne
            report = argFoo;
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.channelsTransaction;
            mike = argBar;
            tango = zulu.bind(tango)(mike);
            zulu = tango.put;
            mike = report.guild_id;
            mike = zulu.bind(tango)(mike, report);
            return entity;
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'putMany';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: putMany
            _fun60770: for(var _fun60770_ip = 0; ; ) switch(_fun60770_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.channelsTransaction;
                zulu = argBar;
                report = tango.bind(report)(zulu);
                zulu = _closure1_slot7;
                mike = argFoo;
                tango = zulu.bind(entity)(mike);
                zulu = tango.bind(entity)();
                mike = zulu.done;
                if(mike) { _fun60770_ip = 100; continue _fun60770 }
 63:
                golf = zulu.value;
                oscar = report.put;
                mike = golf.guild_id;
                mike = oscar.bind(report)(mike, golf);
                oscar = tango.bind(entity)();
                mike = oscar.done;
                zulu = oscar;
                if(!mike) { _fun60770_ip = 63; continue _fun60770 }
 100:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[10] = entity;
        entity = {};
        oscar = 'replace';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: replace
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.channelsTransaction;
            mike = argBaz;
            report = zulu.bind(tango)(mike);
            tango = report.replaceAll;
            zulu = argFoo;
            mike = argBar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[11] = entity;
        entity = {};
        oscar = 'deleteOne';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: deleteOne
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.channelsTransaction;
            mike = argBaz;
            report = zulu.bind(tango)(mike);
            tango = report.delete;
            zulu = argFoo;
            mike = argBar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[12] = entity;
        entity = {};
        oscar = 'deleteMany';
        entity['key'] = oscar;
        report = function(argFoo, argBar) { // Original name: deleteMany
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.channelsTransaction;
            mike = argBar;
            tango = zulu.bind(tango)(mike);
            zulu = tango.delete;
            mike = argFoo;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['value'] = report;
        mike[13] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_database/modules/Channels.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();