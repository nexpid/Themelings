// app/modules/guild_automod/AutomodFeedback.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    verify = argBar;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = options;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, mike);
    golf = {};
    entity = 'BUG';
    golf['BUG'] = entity;
    entity = 'ALLOWED';
    golf['ALLOWED'] = entity;
    entity = 'MENTION_RAID_REMOVE_RESTRICTION';
    golf['MENTION_RAID_REMOVE_RESTRICTION'] = entity;
    var _closure1_slot2 = golf;
    oscar = {};
    entity = 'JOIN_RAID';
    oscar['JOIN_RAID'] = entity;
    mike = 'MENTION_RAID';
    oscar['MENTION_RAID'] = mike;
    report = {};
    mike = 'LEGITIMATE_ACTIVITY';
    report['LEGITIMATE_ACTIVITY'] = mike;
    mike = 'LEGITIMATE_ACCOUNTS';
    report['LEGITIMATE_ACCOUNTS'] = mike;
    mike = 'LEGITIMATE_DMS';
    report['LEGITIMATE_DMS'] = mike;
    offset = 'DM_SPAM';
    report['DM_SPAM'] = offset;
    report['JOIN_RAID'] = entity;
    entity = 'OTHER';
    report['OTHER'] = entity;
    var _closure1_slot3 = report;
    mike = {};
    mike['DM_SPAM'] = offset;
    offset = 'MENTION_SPAM';
    mike['MENTION_SPAM'] = offset;
    offset = 'CHANNEL_SPAM';
    mike['CHANNEL_SPAM'] = offset;
    offset = 'SUS_NEW_MEMBERS';
    mike['SUS_NEW_MEMBERS'] = offset;
    offset = 'CHANGING_SETTINGS';
    mike['CHANGING_SETTINGS'] = offset;
    mike['OTHER'] = entity;
    entity = 1;
    options = options[entity];
    entity = undefined;
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'modules/guild_automod/AutomodFeedback.tsx';
    options = verify.bind(offset)(options);
    zulu['Feedback'] = golf;
    golf = function() { // Original name: generateFeedbackOptions
        mike = {};
        options = _closure1_slot0;
        verify = _closure1_slot1;
        tango = 0;
        zulu = verify[tango];
        golf = undefined;
        zulu = options.bind(golf)(zulu);
        oscar = zulu.intl;
        report = oscar.string;
        zulu = verify[tango];
        zulu = options.bind(golf)(zulu);
        zulu = zulu.t;
        zulu = zulu.+MbOX1;
        zulu = report.bind(oscar)(zulu);
        mike['name'] = zulu;
        zulu = _closure1_slot2;
        entity = zulu.BUG;
        mike['value'] = entity;
        entity = new Array(2);
        entity[0] = mike;
        mike = {};
        report = verify[tango];
        report = options.bind(golf)(report);
        oscar = report.intl;
        report = oscar.string;
        tango = verify[tango];
        tango = options.bind(golf)(tango);
        tango = tango.t;
        tango = tango.CRsCRE;
        tango = report.bind(oscar)(tango);
        mike['name'] = tango;
        zulu = zulu.ALLOWED;
        mike['value'] = zulu;
        entity[1] = mike;
        return entity;
    };
    zulu['generateFeedbackOptions'] = golf;
    zulu['RaidAlertType'] = oscar;
    zulu['RaidResolutionType'] = report;
    tango = function(argFoo) { // Original name: getMostImportantRaidResolutionType
        _fun59642: for(var _fun59642_ip = 0; ; ) switch(_fun59642_ip) {
 0:
            tango = argFoo;
            zulu = tango.includes;
            entity = _closure1_slot3;
            entity = entity.LEGITIMATE_ACTIVITY;
            entity = zulu.bind(tango)(entity);
            if(entity) { _fun59642_ip = 107; continue _fun59642 }
 29:
            zulu = tango.includes;
            entity = _closure1_slot3;
            entity = entity.DM_SPAM;
            entity = zulu.bind(tango)(entity);
            if(entity) { _fun59642_ip = 95; continue _fun59642 }
 52:
            zulu = tango.includes;
            entity = _closure1_slot3;
            entity = entity.JOIN_RAID;
            entity = zulu.bind(tango)(entity);
            zulu = _closure1_slot3;
            if(entity) { _fun59642_ip = 87; continue _fun59642 }
 79:
            entity = zulu.OTHER;
            _fun59642_ip = 93; continue _fun59642;
 87:
            entity = zulu.JOIN_RAID;
 93:
            _fun59642_ip = 105; continue _fun59642;
 95:
            zulu = _closure1_slot3;
            entity = zulu.DM_SPAM;
 105:
            _fun59642_ip = 117; continue _fun59642;
 107:
            mike = _closure1_slot3;
            entity = mike.LEGITIMATE_ACTIVITY;
 117:
            return entity;
        }
    };
    zulu['getMostImportantRaidResolutionType'] = tango;
    zulu['RaidLockdownFeedbackType'] = mike;
    return entity;
})();