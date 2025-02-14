// app/modules/links/LinkAnalyticsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun67448: for(var _fun67448_ip = 0; ; ) switch(_fun67448_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun67448_ip = 46; continue _fun67448 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun67448_ip = 55; continue _fun67448 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun67448_ip = 345; continue _fun67448 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun67448_ip = 323; continue _fun67448 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun67448_ip = 283; continue _fun67448 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun67448_ip = 270; continue _fun67448 }
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
            if(!golf) { _fun67448_ip = 163; continue _fun67448 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun67448_ip = 179; continue _fun67448 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun67448_ip = 249; continue _fun67448 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun67448_ip = 249; continue _fun67448 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun67448_ip = 234; continue _fun67448 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun67448_ip = 247; continue _fun67448 }
 234:
            verify = _closure1_slot7;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun67448_ip = 265; continue _fun67448;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun67448_ip = 283; continue _fun67448;
 270:
            golf = _closure1_slot7;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun67448_ip = 323; continue _fun67448 }
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
            if(!tango) { _fun67448_ip = 330; continue _fun67448 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun67449: for(var _fun67449_ip = 0; ; ) switch(_fun67449_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun67449_ip = 56; continue _fun67449 }
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
                    _fun67449_ip = 67; continue _fun67449;
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
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun67450: for(var _fun67450_ip = 0; ; ) switch(_fun67450_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun67450_ip = 23; continue _fun67450 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun67450_ip = 33; continue _fun67450 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun67450_ip = 70; continue _fun67450 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun67450_ip = 55; continue _fun67450 }
 70:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo) { // Original name: getDiscordLinkTypeFromMetadata
        _fun67451: for(var _fun67451_ip = 0; ; ) switch(_fun67451_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildId;
            mike = null;
            if(!(mike != zulu)) { _fun67451_ip = 32; continue _fun67451 }
 14:
            zulu = entity.channelId;
            if(!(mike != zulu)) { _fun67451_ip = 32; continue _fun67451 }
 23:
            zulu = entity.messageId;
            if(!(mike == zulu)) { _fun67451_ip = 80; continue _fun67451 }
 32:
            zulu = entity.guildId;
            if(!(mike != zulu)) { _fun67451_ip = 50; continue _fun67451 }
 41:
            entity = entity.channelId;
            if(!(mike == entity)) { _fun67451_ip = 65; continue _fun67451 }
 50:
            entity = _closure1_slot4;
            entity = entity.UNKNOWN;
            _fun67451_ip = 78; continue _fun67451;
 65:
            mike = _closure1_slot4;
            entity = mike.CHANNEL;
 78:
            _fun67451_ip = 93; continue _fun67451;
 80:
            mike = _closure1_slot4;
            entity = mike.MESSAGE;
 93:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo, argBar) { // Original name: getDiscordLinkType
        _fun67452: for(var _fun67452_ip = 0; ; ) switch(_fun67452_ip) {
 0:
            verify = argFoo;
            zulu = argBar;
            options = null;
            if(!(options == zulu)) { _fun67452_ip = 16; continue _fun67452 }
 12:
            if(!(options != verify)) { _fun67452_ip = 113; continue _fun67452 }
 16:
            if(!(options != zulu)) { _fun67452_ip = 36; continue _fun67452 }
 20:
            mike = _closure1_slot8;
            entity = undefined;
            entity = mike.bind(entity)(zulu);
            _fun67452_ip = 111; continue _fun67452;
 36:
            tango = _closure1_slot6;
            mike = _closure1_slot5;
            golf = undefined;
            oscar = tango.bind(golf)(mike);
            tango = oscar.bind(golf)();
            mike = tango.done;
            report = tango;
            if(mike) { _fun67452_ip = 98; continue _fun67452 }
 69:
            mike = report.value;
            mike = mike.bind(golf)(verify);
            if(!(options == mike)) { _fun67452_ip = 108; continue _fun67452 }
 83:
            offset = oscar.bind(golf)();
            tango = offset.done;
            report = offset;
            if(!tango) { _fun67452_ip = 69; continue _fun67452 }
 98:
            zulu = _closure1_slot4;
            mike = zulu.UNKNOWN;
 108:
            entity = mike;
 111:
            _fun67452_ip = 126; continue _fun67452;
 113:
            mike = _closure1_slot4;
            entity = mike.UNKNOWN;
 126:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    mike = mike.AnalyticEvents;
    var _closure1_slot3 = mike;
    mike = {};
    golf = 'Discord Message Link';
    mike['MESSAGE'] = golf;
    golf = 'Discord Channel Link';
    mike['CHANNEL'] = golf;
    golf = 'Discord Server Invite';
    mike['SERVER_INVITE'] = golf;
    golf = 'Discord Gift Link';
    mike['GIFT'] = golf;
    golf = 'Unknown';
    mike['UNKNOWN'] = golf;
    golf = 'Discord Discovery Link';
    mike['DISCOVERY'] = golf;
    var _closure1_slot4 = mike;
    mike = new Array(3);
    golf = function(argFoo) {
        _fun67453: for(var _fun67453_ip = 0; ; ) switch(_fun67453_ip) {
 0:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 1;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.isInvite;
            entity = argFoo;
            zulu = zulu.bind(tango)(entity);
            entity = null;
            if(!zulu) { _fun67453_ip = 54; continue _fun67453 }
 44:
            mike = _closure1_slot4;
            entity = mike.SERVER_INVITE;
 54:
            return entity;
        }
    };
    mike[0] = golf;
    golf = function(argFoo) {
        _fun67454: for(var _fun67454_ip = 0; ; ) switch(_fun67454_ip) {
 0:
            mike = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 2;
            entity = tango[entity];
            report = undefined;
            tango = mike.bind(report)(entity);
            mike = tango.safeParseWithQuery;
            entity = argFoo;
            mike = mike.bind(tango)(entity);
            entity = null;
            if(!(entity != mike)) { _fun67454_ip = 131; continue _fun67454 }
 45:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 3;
            tango = golf[tango];
            oscar = oscar.bind(report)(tango);
            tango = oscar.tryParseChannelPath;
            mike = mike.path;
            oscar = tango.bind(oscar)(mike);
            tango = entity == oscar;
            mike = null;
            if(tango) { _fun67454_ip = 129; continue _fun67454 }
 91:
            tango = _closure1_slot8;
            zulu = {};
            golf = oscar.guildId;
            zulu['guildId'] = golf;
            golf = oscar.channelId;
            zulu['channelId'] = golf;
            oscar = oscar.messageId;
            zulu['messageId'] = oscar;
            mike = tango.bind(report)(zulu);
 129:
            return mike;
 131:
            return entity;
        }
    };
    mike[1] = golf;
    golf = function(argFoo) {
        _fun67455: for(var _fun67455_ip = 0; ; ) switch(_fun67455_ip) {
 0:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 1;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.isDiscoveryLink;
            entity = argFoo;
            zulu = zulu.bind(tango)(entity);
            entity = null;
            if(!zulu) { _fun67455_ip = 54; continue _fun67455 }
 44:
            mike = _closure1_slot4;
            entity = mike.DISCOVERY;
 54:
            return entity;
        }
    };
    mike[2] = golf;
    var _closure1_slot5 = mike;
    mike = {};
    golf = function(argFoo) { // Original name: trackDiscordLinkClicked
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.track;
        mike = _closure1_slot3;
        zulu = mike.LINK_CLICKED;
        mike = {};
        golf = true;
        mike['is_discord_link'] = golf;
        golf = _closure1_slot8;
        oscar = argFoo;
        oscar = golf.bind(entity)(oscar);
        mike['discord_link_type'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    mike['trackDiscordLinkClicked'] = golf;
    golf = function(argFoo, argBar) { // Original name: trackLinkClicked
        _fun67457: for(var _fun67457_ip = 0; ; ) switch(_fun67457_ip) {
 0:
            verify = argFoo;
            options = argBar;
            report = null;
            if(!(report == verify)) { _fun67457_ip = 16; continue _fun67457 }
 12:
            if(!(report != options)) { _fun67457_ip = 130; continue _fun67457 }
 16:
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 2;
            entity = zulu[entity];
            golf = undefined;
            zulu = mike.bind(golf)(entity);
            mike = zulu.isDiscordUrl;
            entity = true;
            offset = mike.bind(zulu)(verify, entity);
            if(offset) { _fun67457_ip = 62; continue _fun67457 }
 58:
            offset = report != options;
 62:
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 4;
            entity = zulu[entity];
            tango = mike.bind(golf)(entity);
            zulu = tango.track;
            entity = _closure1_slot3;
            mike = entity.LINK_CLICKED;
            entity = {};
            entity['is_discord_link'] = offset;
            report = null;
            if(!offset) { _fun67457_ip = 119; continue _fun67457 }
 109:
            oscar = _closure1_slot9;
            report = oscar.bind(golf)(verify, options);
 119:
            entity['discord_link_type'] = report;
            entity = zulu.bind(tango)(mike, entity);
 130:
            entity = undefined;
            return entity;
        }
    };
    mike['trackLinkClicked'] = golf;
    tango = function(argFoo) { // Original name: trackAnnouncementMessageLinkClicked
        entity = argFoo;
        offset = entity.messageId;
        verify = entity.channelId;
        options = entity.guildId;
        golf = entity.sourceChannelId;
        oscar = entity.sourceGuildId;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 4;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot3;
        zulu = mike.ANNOUNCEMENT_MESSAGE_LINK_CLICKED;
        mike = {};
        mike['message_id'] = offset;
        mike['channel_id'] = verify;
        mike['guild_id'] = options;
        mike['source_channel_id'] = golf;
        mike['source_guild_id'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    mike['trackAnnouncementMessageLinkClicked'] = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/links/LinkAnalyticsUtils.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();