// app/actions/RelationshipActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    tango = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = tango;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golf;
    entity = function(argFoo) { // Original name: showAlert
        report = _closure1_slot0;
        tango = _closure1_slot3;
        entity = 4;
        zulu = tango[entity];
        entity = undefined;
        report = report.bind(entity)(zulu);
        zulu = report.closeContextMenu;
        zulu = zulu.bind(report)();
        zulu = _closure1_slot1;
        mike = 5;
        mike = tango[mike];
        tango = zulu.bind(entity)(mike);
        zulu = tango.show;
        mike = argFoo;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: handleRelationshipAddError
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            tango = argBar;
            offset = argBaz;
            verify = entity.status;
            mike = entity.body;
            report = mike;
            if(!report) { _fun00002_ip = 30; continue _fun00001 }
 25:
            report = mike.code;
 30:
            mike = 429;
            if(!(mike !== verify)) { _fun00002_ip = 623; continue _fun00001 }
 43:
            mike = 403;
            if(!(mike === verify)) { _fun00002_ip = 73; continue _fun00001 }
 53:
            zulu = _closure1_slot7;
            zulu = zulu.EMAIL_VERIFICATION_REQUIRED;
            if(!(report !== zulu)) { _fun00002_ip = 435; continue _fun00001 }
 73:
            oscar = _closure1_slot7;
            oscar = oscar.USER_QUARANTINED;
            if(!(report !== oscar)) { _fun00002_ip = 378; continue _fun00001 }
 93:
            options = _closure1_slot0;
            golf = _closure1_slot3;
            oscar = 9;
            oscar = golf[oscar];
            golf = undefined;
            options = options.bind(golf)(oscar);
            oscar = options.isLimitedAccessErrorCode;
            oscar = oscar.bind(options)(verify, report);
            if(oscar) { _fun00002_ip = 812; continue _fun00001 }
 133:
            oscar = _closure1_slot10;
            oscar = oscar.SHOW_ALWAYS;
            if(!(tango === oscar)) { _fun00002_ip = 812; continue _fun00001 }
 150:
            oscar = null;
            if(!(oscar == offset)) { _fun00002_ip = 213; continue _fun00001 }
 156:
            yankee = _closure1_slot0;
            romeo = _closure1_slot3;
            oscar = 7;
            options = romeo[oscar];
            options = yankee.bind(golf)(options);
            verify = options.intl;
            options = verify.string;
            oscar = romeo[oscar];
            oscar = yankee.bind(golf)(oscar);
            oscar = oscar.t;
            oscar = oscar.paDJBA;
            verify = options.bind(verify)(oscar);
            _fun00002_ip = 250; continue _fun00001;
 213:
            options = _closure1_slot0;
            yankee = _closure1_slot3;
            oscar = 10;
            oscar = yankee[oscar];
            options = options.bind(golf)(oscar);
            oscar = options.humanizeAbortCode;
            if(report) { _fun00002_ip = 244; continue _fun00001 }
 242:
            report = 0;
 244:
            verify = oscar.bind(options)(report, offset);
 250:
            oscar = _closure1_slot12;
            report = {};
            yankee = _closure1_slot0;
            romeo = _closure1_slot3;
            options = 7;
            offset = romeo[options];
            offset = yankee.bind(golf)(offset);
            backup = offset.intl;
            foxtrot = backup.string;
            offset = romeo[options];
            offset = yankee.bind(golf)(offset);
            offset = offset.t;
            offset = offset.6moJ8v;
            offset = foxtrot.bind(backup)(offset);
            report['title'] = offset;
            report['body'] = verify;
            verify = romeo[options];
            verify = yankee.bind(golf)(verify);
            offset = verify.intl;
            verify = offset.string;
            options = romeo[options];
            options = yankee.bind(golf)(options);
            options = options.t;
            options = options.BddRzc;
            options = verify.bind(offset)(options);
            report['confirmText'] = options;
            report = oscar.bind(golf)(report);
            _fun00002_ip = 812; continue _fun00001;
 378:
            options = _closure1_slot0;
            golf = _closure1_slot3;
            report = 4;
            oscar = golf[report];
            report = undefined;
            options = options.bind(report)(oscar);
            oscar = options.closeContextMenu;
            oscar = oscar.bind(options)();
            oscar = _closure1_slot1;
            zulu = 6;
            zulu = golf[zulu];
            zulu = oscar.bind(report)(zulu);
            zulu = zulu.bind(report)();
            _fun00002_ip = 812; continue _fun00001;
 435:
            report = _closure1_slot12;
            zulu = {};
            verify = _closure1_slot0;
            offset = _closure1_slot3;
            oscar = 7;
            golf = offset[oscar];
            mike = undefined;
            golf = verify.bind(mike)(golf);
            yankee = golf.intl;
            options = yankee.string;
            golf = offset[oscar];
            golf = verify.bind(mike)(golf);
            golf = golf.t;
            golf = golf.Gqf33N;
            golf = options.bind(yankee)(golf);
            zulu['title'] = golf;
            golf = offset[oscar];
            golf = verify.bind(mike)(golf);
            yankee = golf.intl;
            options = yankee.string;
            golf = offset[oscar];
            golf = verify.bind(mike)(golf);
            golf = golf.t;
            golf = golf.GHOBd3;
            golf = options.bind(yankee)(golf);
            zulu['body'] = golf;
            golf = offset[oscar];
            golf = verify.bind(mike)(golf);
            options = golf.intl;
            golf = options.string;
            oscar = offset[oscar];
            oscar = verify.bind(mike)(oscar);
            oscar = oscar.t;
            oscar = oscar.HbTSEx;
            oscar = golf.bind(options)(oscar);
            zulu['confirmText'] = oscar;
            oscar = function() { // Original name: onConfirm
                zulu = _closure1_slot2;
                mike = _closure1_slot3;
                entity = 8;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.openClaimAccountModal;
                mike = mike.bind(zulu)();
                return entity;
            };
            zulu['onConfirm'] = oscar;
            mike = report.bind(mike)(zulu);
            _fun00002_ip = 812; continue _fun00001;
 623:
            zulu = _closure1_slot10;
            zulu = zulu.SHOW_ALWAYS;
            if(!(tango === zulu)) { _fun00002_ip = 812; continue _fun00001 }
 643:
            tango = _closure1_slot12;
            zulu = {};
            options = _closure1_slot0;
            verify = _closure1_slot3;
            report = 7;
            oscar = verify[report];
            mike = undefined;
            oscar = options.bind(mike)(oscar);
            offset = oscar.intl;
            golf = offset.string;
            oscar = verify[report];
            oscar = options.bind(mike)(oscar);
            oscar = oscar.t;
            oscar = oscar.3D5eo6;
            oscar = golf.bind(offset)(oscar);
            zulu['title'] = oscar;
            oscar = verify[report];
            oscar = options.bind(mike)(oscar);
            offset = oscar.intl;
            golf = offset.string;
            oscar = verify[report];
            oscar = options.bind(mike)(oscar);
            oscar = oscar.t;
            oscar = oscar.TuJriI;
            oscar = golf.bind(offset)(oscar);
            zulu['body'] = oscar;
            oscar = verify[report];
            oscar = options.bind(mike)(oscar);
            golf = oscar.intl;
            oscar = golf.string;
            report = verify[report];
            report = options.bind(mike)(report);
            report = report.t;
            report = report.DppXIy;
            report = oscar.bind(golf)(report);
            zulu['confirmText'] = report;
            mike = tango.bind(mike)(zulu);
 812:
            throw entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    verify = 0;
    mike = golf[verify];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot4 = mike;
    options = 1;
    mike = golf[options];
    mike = tango.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 2;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    tango = mike.Endpoints;
    var _closure1_slot6 = tango;
    tango = mike.AbortCodes;
    var _closure1_slot7 = tango;
    mike = mike.RelationshipTypes;
    var _closure1_slot8 = mike;
    mike = 3;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.ClearFriendRequestFilters;
    var _closure1_slot9 = mike;
    mike = {};
    mike['SHOW_ALWAYS'] = verify;
    tango = 'SHOW_ALWAYS';
    mike[verify] = tango;
    mike['SHOW_ONLY_IF_ACTION_NEEDED'] = options;
    tango = 'SHOW_ONLY_IF_ACTION_NEEDED';
    mike[options] = tango;
    var _closure1_slot10 = mike;
    tango = {};
    options = function(argFoo) { // Original name: sendRequest
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            tango = mike.discordTag;
            var _closure2_slot0 = tango;
            report = mike.context;
            golf = mike.captchaPayload;
            mike = mike.errorUxConfig;
            offset = undefined;
            if(!(mike === offset)) { _fun00004_ip = 51; continue _fun00003 }
 38:
            zulu = _closure1_slot10;
            mike = zulu.SHOW_ALWAYS;
 51:
            var _closure2_slot1 = mike;
            zulu = tango.split;
            mike = '#';
            tango = zulu.bind(tango)(mike);
            zulu = _closure1_slot4;
            mike = 2;
            zulu = zulu.bind(offset)(tango, mike);
            mike = 0;
            options = zulu[mike];
            mike = 1;
            verify = zulu[mike];
            zulu = _closure1_slot0;
            tango = _closure1_slot3;
            mike = 11;
            mike = tango[mike];
            mike = zulu.bind(offset)(mike);
            tango = mike.HTTP;
            zulu = tango.post;
            mike = {};
            yankee = _closure1_slot6;
            oscar = yankee.USER_RELATIONSHIPS;
            oscar = oscar.bind(yankee)();
            mike['url'] = oscar;
            oscar = {};
            oscar['username'] = options;
            options = global;
            options = options.parseInt;
            options = options.bind(offset)(verify);
            oscar['discriminator'] = options;
            foxtrot = oscar;
            romeo = golf;
            golf = copyDataProperties(foxtrot, romeo);
            mike['body'] = oscar;
            mike['context'] = report;
            report = true;
            mike['oldFormErrors'] = report;
            report = false;
            mike['rejectWithError'] = report;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.catch;
            entity = function(argFoo) {
                report = _closure1_slot13;
                tango = _closure2_slot1;
                zulu = _closure2_slot0;
                entity = undefined;
                mike = argFoo;
                mike = report.bind(entity)(mike, tango, zulu);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    tango['sendRequest'] = options;
    options = function(argFoo, argBar) { // Original name: addRelationship
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = argFoo;
            mike = arguments[2];
            romeo = zulu.userId;
            report = zulu.context;
            offset = zulu.type;
            verify = zulu.friendToken;
            options = zulu.fromFriendSuggestion;
            golf = zulu.captchaPayload;
            zulu = argBar;
            var _closure2_slot0 = zulu;
            tango = undefined;
            if(!(mike === tango)) { _fun00006_ip = 67; continue _fun00005 }
 54:
            zulu = _closure1_slot10;
            mike = zulu.SHOW_ALWAYS;
 67:
            var _closure2_slot1 = mike;
            var _closure2_slot2 = tango;
            zulu = _closure1_slot5;
            mike = zulu.getUser;
            mike = mike.bind(zulu)(romeo);
            _closure2_slot2 = mike;
            zulu = _closure1_slot0;
            yankee = _closure1_slot3;
            mike = 11;
            mike = yankee[mike];
            mike = zulu.bind(tango)(mike);
            tango = mike.HTTP;
            zulu = tango.put;
            mike = {};
            yankee = _closure1_slot6;
            oscar = yankee.USER_RELATIONSHIP;
            oscar = oscar.bind(yankee)(romeo);
            mike['url'] = oscar;
            oscar = {};
            oscar['type'] = offset;
            oscar['friend_token'] = verify;
            oscar['from_friend_suggestion'] = options;
            backup = oscar;
            foxtrot = golf;
            golf = copyDataProperties(backup, foxtrot);
            mike['body'] = oscar;
            mike['context'] = report;
            report = true;
            mike['oldFormErrors'] = report;
            report = false;
            mike['rejectWithError'] = report;
            tango = zulu.bind(tango)(mike);
            zulu = tango.then;
            mike = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zulu = _closure2_slot0;
                    mike = null;
                    if(!(mike != zulu)) { _fun00008_ip = 23; continue _fun00007 }
 13:
                    mike = _closure2_slot0;
                    entity = undefined;
                    entity = mike.bind(entity)();
 23:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.catch;
            entity = function(argFoo) {
                report = _closure1_slot13;
                tango = _closure2_slot1;
                oscar = _closure1_slot1;
                zulu = _closure1_slot3;
                entity = 12;
                zulu = zulu[entity];
                entity = undefined;
                oscar = oscar.bind(entity)(zulu);
                zulu = oscar.getUserTag;
                mike = _closure2_slot2;
                zulu = zulu.bind(oscar)(mike);
                mike = argFoo;
                mike = report.bind(entity)(mike, tango, zulu);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    tango['addRelationship'] = options;
    options = function(argFoo) { // Original name: acceptFriendRequest
        tango = _closure1_slot11;
        zulu = tango.addRelationship;
        mike = argFoo;
        entity = function() {
            golf = _closure1_slot0;
            options = _closure1_slot3;
            entity = 13;
            mike = options[entity];
            entity = undefined;
            mike = golf.bind(entity)(mike);
            tango = mike.AccessibilityAnnouncer;
            zulu = tango.announce;
            mike = 7;
            report = options[mike];
            report = golf.bind(entity)(report);
            oscar = report.intl;
            report = oscar.string;
            mike = options[mike];
            mike = golf.bind(entity)(mike);
            mike = mike.t;
            mike = mike.3goNa2;
            mike = report.bind(oscar)(mike);
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    tango['acceptFriendRequest'] = options;
    options = function(argFoo, argBar) { // Original name: cancelFriendRequest
        report = _closure1_slot11;
        tango = report.removeRelationship;
        zulu = argFoo;
        mike = argBar;
        entity = function() {
            golf = _closure1_slot0;
            options = _closure1_slot3;
            entity = 13;
            mike = options[entity];
            entity = undefined;
            mike = golf.bind(entity)(mike);
            tango = mike.AccessibilityAnnouncer;
            zulu = tango.announce;
            mike = 7;
            report = options[mike];
            report = golf.bind(entity)(report);
            oscar = report.intl;
            report = oscar.string;
            mike = options[mike];
            mike = golf.bind(entity)(mike);
            mike = mike.t;
            mike = mike.pLUaxc;
            mike = report.bind(oscar)(mike);
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = tango.bind(report)(zulu, mike, entity);
        return entity;
    };
    tango['cancelFriendRequest'] = options;
    options = function(argFoo, argBar) { // Original name: removeFriend
        report = _closure1_slot11;
        tango = report.removeRelationship;
        zulu = argFoo;
        mike = argBar;
        entity = function() {
            golf = _closure1_slot0;
            options = _closure1_slot3;
            entity = 13;
            mike = options[entity];
            entity = undefined;
            mike = golf.bind(entity)(mike);
            tango = mike.AccessibilityAnnouncer;
            zulu = tango.announce;
            mike = 7;
            report = options[mike];
            report = golf.bind(entity)(report);
            oscar = report.intl;
            report = oscar.string;
            mike = options[mike];
            mike = golf.bind(entity)(mike);
            mike = mike.t;
            mike = mike.vGSLa2;
            mike = report.bind(oscar)(mike);
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = tango.bind(report)(zulu, mike, entity);
        entity = undefined;
        return entity;
    };
    tango['removeFriend'] = options;
    options = function(argFoo, argBar) { // Original name: unblockUser
        report = _closure1_slot11;
        tango = report.removeRelationship;
        zulu = argFoo;
        mike = argBar;
        entity = function() {
            golf = _closure1_slot0;
            options = _closure1_slot3;
            entity = 13;
            mike = options[entity];
            entity = undefined;
            mike = golf.bind(entity)(mike);
            tango = mike.AccessibilityAnnouncer;
            zulu = tango.announce;
            mike = 7;
            report = options[mike];
            report = golf.bind(entity)(report);
            oscar = report.intl;
            report = oscar.string;
            mike = options[mike];
            mike = golf.bind(entity)(mike);
            mike = mike.t;
            mike = mike.9t1au7;
            mike = report.bind(oscar)(mike);
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = tango.bind(report)(zulu, mike, entity);
        return entity;
    };
    tango['unblockUser'] = options;
    options = function(argFoo, argBar, argBaz) { // Original name: removeRelationship
        mike = argBaz;
        var _closure2_slot0 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot3;
        mike = 11;
        zulu = zulu[mike];
        mike = undefined;
        mike = tango.bind(mike)(zulu);
        tango = mike.HTTP;
        zulu = tango.del;
        mike = {};
        golf = _closure1_slot6;
        oscar = golf.USER_RELATIONSHIP;
        report = argFoo;
        report = oscar.bind(golf)(report);
        mike['url'] = report;
        report = argBar;
        mike['context'] = report;
        report = true;
        mike['oldFormErrors'] = report;
        report = false;
        mike['rejectWithError'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = function() {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zulu = _closure2_slot0;
                mike = null;
                if(!(mike != zulu)) { _fun00010_ip = 23; continue _fun00009 }
 13:
                mike = _closure2_slot0;
                entity = undefined;
                entity = mike.bind(entity)();
 23:
                entity = undefined;
                return entity;
            }
        };
        zulu = zulu.bind(tango)(mike);
        mike = zulu.catch;
        entity = function() {
            golf = _closure1_slot0;
            options = _closure1_slot3;
            entity = 13;
            mike = options[entity];
            entity = undefined;
            mike = golf.bind(entity)(mike);
            tango = mike.AccessibilityAnnouncer;
            zulu = tango.announce;
            mike = 7;
            report = options[mike];
            report = golf.bind(entity)(report);
            oscar = report.intl;
            report = oscar.string;
            mike = options[mike];
            mike = golf.bind(entity)(mike);
            mike = mike.t;
            mike = mike.n6Jo3N;
            mike = report.bind(oscar)(mike);
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['removeRelationship'] = options;
    options = function(argFoo, argBar) { // Original name: updateRelationship
        zulu = _closure1_slot0;
        mike = _closure1_slot3;
        entity = 11;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.patch;
        entity = {};
        oscar = _closure1_slot6;
        report = oscar.USER_RELATIONSHIP;
        tango = argFoo;
        tango = report.bind(oscar)(tango);
        entity['url'] = tango;
        tango = {};
        report = argBar;
        tango['nickname'] = report;
        entity['body'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['updateRelationship'] = options;
    options = function() { // Original name: fetchRelationships
        tango = _closure1_slot0;
        zulu = _closure1_slot3;
        entity = 11;
        zulu = zulu[entity];
        entity = undefined;
        zulu = tango.bind(entity)(zulu);
        report = zulu.HTTP;
        tango = report.get;
        zulu = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
        golf = _closure1_slot6;
        oscar = golf.USER_RELATIONSHIPS;
        oscar = oscar.bind(golf)();
        zulu['url'] = oscar;
        report = tango.bind(report)(zulu);
        tango = report.then;
        zulu = function(argFoo) {
            zulu = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 14;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            tango = 'LOAD_RELATIONSHIPS_SUCCESS';
            entity['type'] = tango;
            tango = argFoo;
            tango = tango.body;
            entity['relationships'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 14;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            tango = 'LOAD_RELATIONSHIPS_FAILURE';
            entity['type'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    tango['fetchRelationships'] = options;
    options = function(argFoo) { // Original name: confirmClearPendingRelationships
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 15;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = argFoo;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango['confirmClearPendingRelationships'] = options;
    options = function() { // Original name: clearPendingRelationships
        tango = _closure1_slot0;
        zulu = _closure1_slot3;
        mike = 11;
        zulu = zulu[mike];
        mike = undefined;
        mike = tango.bind(mike)(zulu);
        tango = mike.HTTP;
        zulu = tango.del;
        mike = {};
        golf = _closure1_slot6;
        report = golf.USER_RELATIONSHIPS;
        report = report.bind(golf)();
        mike['url'] = report;
        report = {};
        oscar = _closure1_slot8;
        oscar = oscar.PENDING_INCOMING;
        report['relationship_type'] = oscar;
        mike['query'] = report;
        report = false;
        mike['rejectWithError'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 14;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'RELATIONSHIP_PENDING_INCOMING_REMOVED';
            mike['type'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        zulu = zulu.bind(tango)(mike);
        mike = zulu.catch;
        entity = function() {
            golf = _closure1_slot0;
            options = _closure1_slot3;
            entity = 13;
            mike = options[entity];
            entity = undefined;
            mike = golf.bind(entity)(mike);
            tango = mike.AccessibilityAnnouncer;
            zulu = tango.announce;
            mike = 7;
            report = options[mike];
            report = golf.bind(entity)(report);
            oscar = report.intl;
            report = oscar.string;
            mike = options[mike];
            mike = golf.bind(entity)(mike);
            mike = mike.t;
            mike = mike.n6Jo3N;
            mike = report.bind(oscar)(mike);
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['clearPendingRelationships'] = options;
    options = function() { // Original name: clearPendingSpamAndIgnored
        tango = _closure1_slot0;
        zulu = _closure1_slot3;
        mike = 11;
        zulu = zulu[mike];
        mike = undefined;
        mike = tango.bind(mike)(zulu);
        tango = mike.HTTP;
        zulu = tango.del;
        mike = {};
        golf = _closure1_slot6;
        report = golf.USER_RELATIONSHIPS;
        report = report.bind(golf)();
        mike['url'] = report;
        report = {};
        golf = _closure1_slot8;
        golf = golf.PENDING_INCOMING;
        report['relationship_type'] = golf;
        mike['query'] = report;
        report = {};
        golf = _closure1_slot9;
        options = golf.SPAM;
        oscar = new Array(2);
        oscar[0] = options;
        golf = golf.IGNORED;
        oscar[1] = golf;
        report['filters'] = oscar;
        mike['body'] = report;
        report = false;
        mike['rejectWithError'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 14;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'RELATIONSHIP_PENDING_INCOMING_REMOVED';
            mike['type'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        zulu = zulu.bind(tango)(mike);
        mike = zulu.catch;
        entity = function() {
            golf = _closure1_slot0;
            options = _closure1_slot3;
            entity = 13;
            mike = options[entity];
            entity = undefined;
            mike = golf.bind(entity)(mike);
            tango = mike.AccessibilityAnnouncer;
            zulu = tango.announce;
            mike = 7;
            report = options[mike];
            report = golf.bind(entity)(report);
            oscar = report.intl;
            report = oscar.string;
            mike = options[mike];
            mike = golf.bind(entity)(mike);
            mike = mike.t;
            mike = mike.n6Jo3N;
            mike = report.bind(oscar)(mike);
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['clearPendingSpamAndIgnored'] = options;
    options = function(argFoo, argBar, argBaz) { // Original name: ignoreUser
        golf = argFoo;
        var _closure2_slot0 = golf;
        mike = argBaz;
        var _closure2_slot1 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot3;
        mike = 11;
        zulu = zulu[mike];
        mike = undefined;
        mike = tango.bind(mike)(zulu);
        tango = mike.HTTP;
        zulu = tango.put;
        mike = {};
        oscar = _closure1_slot6;
        report = oscar.IGNORE_USER;
        report = report.bind(oscar)(golf);
        mike['url'] = report;
        report = {};
        oscar = argBar;
        report['location'] = oscar;
        mike['context'] = report;
        report = false;
        mike['rejectWithError'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = function() {
            tango = _closure1_slot1;
            options = _closure1_slot3;
            entity = 16;
            zulu = options[entity];
            entity = undefined;
            oscar = tango.bind(entity)(zulu);
            report = oscar.showIgnoreSuccessToast;
            tango = _closure2_slot0;
            zulu = _closure2_slot1;
            zulu = report.bind(oscar)(tango, zulu);
            golf = _closure1_slot0;
            mike = 13;
            mike = options[mike];
            mike = golf.bind(entity)(mike);
            tango = mike.AccessibilityAnnouncer;
            zulu = tango.announce;
            mike = 7;
            report = options[mike];
            report = golf.bind(entity)(report);
            oscar = report.intl;
            report = oscar.string;
            mike = options[mike];
            mike = golf.bind(entity)(mike);
            mike = mike.t;
            mike = mike.Us93CQ;
            mike = report.bind(oscar)(mike);
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        zulu = zulu.bind(tango)(mike);
        mike = zulu.catch;
        entity = function() {
            tango = _closure1_slot1;
            options = _closure1_slot3;
            entity = 16;
            zulu = options[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.showFailedToast;
            zulu = zulu.bind(tango)();
            golf = _closure1_slot0;
            mike = 13;
            mike = options[mike];
            mike = golf.bind(entity)(mike);
            tango = mike.AccessibilityAnnouncer;
            zulu = tango.announce;
            mike = 7;
            report = options[mike];
            report = golf.bind(entity)(report);
            oscar = report.intl;
            report = oscar.string;
            mike = options[mike];
            mike = golf.bind(entity)(mike);
            mike = mike.t;
            mike = mike.n6Jo3N;
            mike = report.bind(oscar)(mike);
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['ignoreUser'] = options;
    options = function(argFoo, argBar, argBaz) { // Original name: unignoreUser
        golf = argFoo;
        var _closure2_slot0 = golf;
        mike = argBaz;
        var _closure2_slot1 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot3;
        mike = 11;
        zulu = zulu[mike];
        mike = undefined;
        mike = tango.bind(mike)(zulu);
        tango = mike.HTTP;
        zulu = tango.del;
        mike = {};
        oscar = _closure1_slot6;
        report = oscar.IGNORE_USER;
        report = report.bind(oscar)(golf);
        mike['url'] = report;
        report = {};
        oscar = argBar;
        report['location'] = oscar;
        mike['context'] = report;
        report = false;
        mike['rejectWithError'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = function() {
            tango = _closure1_slot1;
            options = _closure1_slot3;
            entity = 16;
            zulu = options[entity];
            entity = undefined;
            oscar = tango.bind(entity)(zulu);
            report = oscar.showUnignoreSuccessToast;
            tango = _closure2_slot0;
            zulu = _closure2_slot1;
            zulu = report.bind(oscar)(tango, zulu);
            golf = _closure1_slot0;
            mike = 13;
            mike = options[mike];
            mike = golf.bind(entity)(mike);
            tango = mike.AccessibilityAnnouncer;
            zulu = tango.announce;
            mike = 7;
            report = options[mike];
            report = golf.bind(entity)(report);
            oscar = report.intl;
            report = oscar.string;
            mike = options[mike];
            mike = golf.bind(entity)(mike);
            mike = mike.t;
            mike = mike.QlH5w8;
            mike = report.bind(oscar)(mike);
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        zulu = zulu.bind(tango)(mike);
        mike = zulu.catch;
        entity = function() {
            tango = _closure1_slot1;
            options = _closure1_slot3;
            entity = 16;
            zulu = options[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.showFailedToast;
            zulu = zulu.bind(tango)();
            golf = _closure1_slot0;
            mike = 13;
            mike = options[mike];
            mike = golf.bind(entity)(mike);
            tango = mike.AccessibilityAnnouncer;
            zulu = tango.announce;
            mike = 7;
            report = options[mike];
            report = golf.bind(entity)(report);
            oscar = report.intl;
            report = oscar.string;
            mike = options[mike];
            mike = golf.bind(entity)(mike);
            mike = mike.t;
            mike = mike.n6Jo3N;
            mike = report.bind(oscar)(mike);
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['unignoreUser'] = options;
    var _closure1_slot11 = tango;
    report = 17;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'actions/RelationshipActionCreators.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['RelationshipErrorUXConfig'] = mike;
    return entity;
})();