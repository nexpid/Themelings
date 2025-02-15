// app/modules/forums/ForumPostRecentMessageStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun87270: for(var _fun87270_ip = 0; ; ) switch(_fun87270_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot12;
            entity = entity.bind(zulu)();
            if(entity) { _fun87270_ip = 51; continue _fun87270 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun87270_ip = 92; continue _fun87270;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun87270_ip = 71; continue _fun87270 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun87271: for(var _fun87271_ip = 0; ; ) switch(_fun87271_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun87271_ip = 76; continue _fun87271;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot12 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: isValidMessage
        _fun87274: for(var _fun87274_ip = 0; ; ) switch(_fun87274_ip) {
 0:
            entity = argFoo;
            report = _closure1_slot8;
            tango = report.getChannel;
            oscar = null;
            options = oscar == entity;
            golf = undefined;
            zulu = undefined;
            if(options) { _fun87274_ip = 33; continue _fun87274 }
 28:
            zulu = entity.channel_id;
 33:
            zulu = tango.bind(report)(zulu);
            if(!(oscar != zulu)) { _fun87274_ip = 154; continue _fun87274 }
 42:
            tango = zulu.isForumPost;
            tango = tango.bind(zulu)();
            if(!tango) { _fun87274_ip = 154; continue _fun87274 }
 55:
            tango = _closure1_slot10;
            zulu = zulu.id;
            report = tango[zulu];
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 7;
            mike = tango[mike];
            tango = zulu.bind(golf)(mike);
            zulu = tango.compare;
            options = oscar == entity;
            mike = undefined;
            if(options) { _fun87274_ip = 108; continue _fun87274 }
 103:
            mike = entity.id;
 108:
            options = oscar == report;
            entity = undefined;
            if(options) { _fun87274_ip = 136; continue _fun87274 }
 117:
            report = report.message;
            oscar = oscar == report;
            entity = undefined;
            if(oscar) { _fun87274_ip = 136; continue _fun87274 }
 131:
            entity = report.id;
 136:
            mike = zulu.bind(tango)(mike, entity);
            entity = -1;
            entity = mike > entity;
            return entity;
 154:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo, argBar) { // Original name: set
        _fun87275: for(var _fun87275_ip = 0; ; ) switch(_fun87275_ip) {
 0:
            tango = argBar;
            mike = null;
            entity = mike == tango;
            if(entity) { _fun87275_ip = 48; continue _fun87275 }
 12:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 8;
            zulu = zulu[entity];
            entity = undefined;
            zulu = report.bind(entity)(zulu);
            entity = zulu.createMessageRecord;
            mike = entity.bind(zulu)(tango);
 48:
            tango = _closure1_slot10;
            zulu = {};
            entity = true;
            zulu['loaded'] = entity;
            zulu['message'] = mike;
            mike = argFoo;
            tango[mike] = zulu;
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: getMessageState
        mike = _closure1_slot10;
        entity = argFoo;
        entity = mike[entity];
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: getMessage
        _fun87277: for(var _fun87277_ip = 0; ; ) switch(_fun87277_ip) {
 0:
            zulu = _closure1_slot15;
            entity = undefined;
            mike = argFoo;
            mike = zulu.bind(entity)(mike);
            zulu = null;
            zulu = zulu == mike;
            if(zulu) { _fun87277_ip = 31; continue _fun87277 }
 26:
            entity = mike.message;
 31:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    tango = function(argFoo) { // Original name: handleLoadThreadsSuccess
        _fun87278: for(var _fun87278_ip = 0; ; ) switch(_fun87278_ip) {
 0:
            mike = argFoo;
            report = mike.threads;
            tango = mike.mostRecentMessages;
            zulu = report.forEach;
            mike = function(argFoo) {
                tango = _closure1_slot14;
                entity = argFoo;
                zulu = entity.id;
                mike = undefined;
                entity = null;
                entity = tango.bind(mike)(zulu, entity);
                entity = true;
                return entity;
            };
            mike = zulu.bind(report)(mike);
            mike = null;
            if(!(mike != tango)) { _fun87278_ip = 98; continue _fun87278 }
 40:
            zulu = tango.filter;
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            mike = 9;
            report = report[mike];
            mike = undefined;
            mike = oscar.bind(mike)(report);
            mike = mike.isNotNullish;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.forEach;
            entity = function(argFoo) {
                tango = argFoo;
                zulu = _closure1_slot14;
                mike = tango.channel_id;
                entity = undefined;
                mike = zulu.bind(entity)(mike, tango);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
 98:
            entity = undefined;
            return entity;
        }
    };
    entity = global;
    offset = entity.Object;
    options = offset.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(offset)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = {};
    var _closure1_slot10 = mike;
    mike = 10;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: ForumPostRecentMessageStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot11;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tango = this;
            zulu = tango.waitFor;
            mike = _closure1_slot8;
            entity = _closure1_slot9;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = 'getMessageState';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun87284: for(var _fun87284_ip = 0; ; ) switch(_fun87284_ip) {
 0:
                mike = argFoo;
                zulu = _closure1_slot10;
                zulu = mike in zulu;
                if(zulu) { _fun87284_ip = 35; continue _fun87284 }
 17:
                tango = _closure1_slot10;
                zulu = {'loaded': false, 'message': null};
                tango[mike] = zulu;
 35:
                entity = _closure1_slot10;
                entity = entity[mike];
                return entity;
            }
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'ForumPostRecentMessageStore';
    options['displayName'] = mike;
    mike = 11;
    mike = oscar[mike];
    foxtrot = golf.bind(entity)(mike);
    mike = {};
    offset = function() { // Original name: handleConnectionOpen
        entity = {};
        _closure1_slot10 = entity;
        entity = undefined;
        return entity;
    };
    mike['CONNECTION_OPEN'] = offset;
    offset = function(argFoo) { // Original name: handleMessageCreate
        _fun87286: for(var _fun87286_ip = 0; ; ) switch(_fun87286_ip) {
 0:
            tango = argFoo;
            entity = tango.isPushNotification;
            entity = !entity;
            if(!entity) { _fun87286_ip = 157; continue _fun87286 }
 18:
            oscar = _closure1_slot13;
            mike = tango.message;
            zulu = undefined;
            oscar = oscar.bind(zulu)(mike);
            mike = !oscar;
            mike = !mike;
            if(!oscar) { _fun87286_ip = 154; continue _fun87286 }
 46:
            oscar = tango.message;
            golf = oscar.channel_id;
            options = _closure1_slot1;
            verify = _closure1_slot2;
            oscar = 7;
            oscar = verify[oscar];
            verify = options.bind(zulu)(oscar);
            options = verify.castMessageIdAsChannelId;
            oscar = tango.message;
            oscar = oscar.id;
            oscar = options.bind(verify)(oscar);
            if(!(golf !== oscar)) { _fun87286_ip = 130; continue _fun87286 }
 101:
            options = _closure1_slot14;
            oscar = tango.message;
            golf = oscar.channel_id;
            oscar = tango.message;
            oscar = options.bind(zulu)(golf, oscar);
            mike = undefined;
            _fun87286_ip = 154; continue _fun87286;
 130:
            oscar = _closure1_slot14;
            tango = tango.message;
            report = tango.channel_id;
            tango = null;
            tango = oscar.bind(zulu)(report, tango);
            mike = undefined;
 154:
            entity = mike;
 157:
            return entity;
        }
    };
    mike['MESSAGE_CREATE'] = offset;
    offset = function(argFoo) { // Original name: handleMessageUpdate
        _fun87287: for(var _fun87287_ip = 0; ; ) switch(_fun87287_ip) {
 0:
            zulu = argFoo;
            mike = _closure1_slot13;
            entity = zulu.message;
            yankee = undefined;
            mike = mike.bind(yankee)(entity);
            entity = !mike;
            entity = !entity;
            if(!mike) { _fun87287_ip = 178; continue _fun87287 }
 34:
            mike = zulu.message;
            tango = mike.channel_id;
            mike = zulu.message;
            mike = mike.id;
            mike = tango !== mike;
            if(!mike) { _fun87287_ip = 175; continue _fun87287 }
 61:
            tango = zulu.message;
            oscar = tango.channel_id;
            offset = zulu.message;
            zulu = _closure1_slot15;
            options = zulu.bind(yankee)(oscar);
            zulu = _closure1_slot16;
            verify = zulu.bind(yankee)(oscar);
            tango = null;
            zulu = tango != options;
            if(!zulu) { _fun87287_ip = 107; continue _fun87287 }
 103:
            zulu = tango != verify;
 107:
            if(!zulu) { _fun87287_ip = 173; continue _fun87287 }
 110:
            report = _closure1_slot10;
            tango = {};
            backup = tango;
            foxtrot = options;
            options = copyDataProperties(backup, foxtrot);
            options = _closure1_slot0;
            romeo = _closure1_slot2;
            golf = 8;
            golf = romeo[golf];
            options = options.bind(yankee)(golf);
            golf = options.updateMessageRecord;
            options = golf.bind(options)(verify, offset);
            golf = 'message';
            tango[golf] = options;
            report[oscar] = tango;
            zulu = true;
 173:
            mike = undefined;
 175:
            entity = mike;
 178:
            return entity;
        }
    };
    mike['MESSAGE_UPDATE'] = offset;
    offset = function(argFoo) { // Original name: handleMessageDelete
        _fun87288: for(var _fun87288_ip = 0; ; ) switch(_fun87288_ip) {
 0:
            entity = argFoo;
            zulu = entity.channelId;
            tango = entity.id;
            report = _closure1_slot16;
            entity = undefined;
            report = report.bind(entity)(zulu);
            oscar = null;
            oscar = oscar == report;
            if(oscar) { _fun87288_ip = 41; continue _fun87288 }
 36:
            entity = report.id;
 41:
            entity = entity === tango;
            if(!entity) { _fun87288_ip = 58; continue _fun87288 }
 48:
            mike = _closure1_slot10;
            mike = delete mike[zulu];
            entity = true;
 58:
            return entity;
        }
    };
    mike['MESSAGE_DELETE'] = offset;
    verify = function(argFoo) { // Original name: handlePostChannelLoadData
        _fun87289: for(var _fun87289_ip = 0; ; ) switch(_fun87289_ip) {
 0:
            entity = argFoo;
            options = entity.threads;
            oscar = options;
            entity = undefined;
            for(zulu in oscar)
 25:
            {
 34:
                yankee = zulu;
                offset = _closure1_slot14;
                verify = options[yankee];
                verify = verify.most_recent_message;
                verify = offset.bind(entity)(yankee, verify);
                _fun87289_ip = 25; continue _fun87289;
            }
 59:
            return entity;
        }
    };
    mike['LOAD_FORUM_POSTS'] = verify;
    mike['LOAD_ARCHIVED_THREADS_SUCCESS'] = tango;
    mike['LOAD_THREADS_SUCCESS'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    backup = tango;
    romeo = mike;
    mike = new backup[options](foxtrot, romeo, yankee);
    mike = mike instanceof Object ? mike : tango;
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/forums/ForumPostRecentMessageStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();