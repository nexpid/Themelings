// app/actions/InviteSuggestionsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
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
    tango = report.bind(entity)(tango);
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/InviteSuggestionsActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: loadInviteSuggestions
        mike = argFoo;
        zulu = mike.omitUserIds;
        var _closure2_slot0 = zulu;
        zulu = mike.guild;
        var _closure2_slot1 = zulu;
        zulu = mike.channel;
        var _closure2_slot2 = zulu;
        zulu = mike.applicationId;
        var _closure2_slot3 = zulu;
        mike = mike.inviteTargetType;
        var _closure2_slot4 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 1;
        zulu = zulu[mike];
        mike = undefined;
        zulu = tango.bind(mike)(zulu);
        mike = zulu.fetchUserAffinities;
        zulu = mike.bind(zulu)();
        mike = zulu.then;
        entity = function() {
            _fun78948: for(var _fun78948_ip = 0; ; ) switch(_fun78948_ip) {
 0:
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 2;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'LOAD_INVITE_SUGGESTIONS';
                mike['type'] = report;
                golf = _closure2_slot0;
                oscar = null;
                if(!(oscar == golf)) { _fun78948_ip = 85; continue _fun78948 }
 55:
                oscar = global;
                oscar = oscar.Set;
                golf = oscar.prototype;
                golf = Object.create(golf, {constructor: {value: oscar}});
                verify = golf;
                oscar = new verify[oscar](options);
                oscar = oscar instanceof Object ? oscar : golf;
                _fun78948_ip = 89; continue _fun78948;
 85:
                oscar = _closure2_slot0;
 89:
                mike['omitUserIds'] = oscar;
                oscar = _closure2_slot1;
                mike['guild'] = oscar;
                oscar = _closure2_slot2;
                mike['channel'] = oscar;
                oscar = _closure2_slot3;
                mike['applicationId'] = oscar;
                report = _closure2_slot4;
                mike['inviteTargetType'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['loadInviteSuggestions'] = tango;
    mike = function(argFoo) { // Original name: searchInviteSuggestions
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'INVITE_SUGGESTIONS_SEARCH';
        mike['type'] = report;
        report = argFoo;
        mike['query'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['searchInviteSuggestions'] = mike;
    return entity;
})();