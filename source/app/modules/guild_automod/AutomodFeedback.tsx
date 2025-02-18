// app/modules/guild_automod/AutomodFeedback.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    verify = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = option;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, michal);
    golfie = {};
    entity = 'BUG';
    golfie['BUG'] = entity;
    entity = 'ALLOWED';
    golfie['ALLOWED'] = entity;
    entity = 'MENTION_RAID_REMOVE_RESTRICTION';
    golfie['MENTION_RAID_REMOVE_RESTRICTION'] = entity;
    var _closure1_slot2 = golfie;
    oscard = {};
    entity = 'JOIN_RAID';
    oscard['JOIN_RAID'] = entity;
    michal = 'MENTION_RAID';
    oscard['MENTION_RAID'] = michal;
    report = {};
    michal = 'LEGITIMATE_ACTIVITY';
    report['LEGITIMATE_ACTIVITY'] = michal;
    michal = 'LEGITIMATE_ACCOUNTS';
    report['LEGITIMATE_ACCOUNTS'] = michal;
    michal = 'LEGITIMATE_DMS';
    report['LEGITIMATE_DMS'] = michal;
    offset = 'DM_SPAM';
    report['DM_SPAM'] = offset;
    report['JOIN_RAID'] = entity;
    entity = 'OTHER';
    report['OTHER'] = entity;
    var _closure1_slot3 = report;
    michal = {};
    michal['DM_SPAM'] = offset;
    offset = 'MENTION_SPAM';
    michal['MENTION_SPAM'] = offset;
    offset = 'CHANNEL_SPAM';
    michal['CHANNEL_SPAM'] = offset;
    offset = 'SUS_NEW_MEMBERS';
    michal['SUS_NEW_MEMBERS'] = offset;
    offset = 'CHANGING_SETTINGS';
    michal['CHANGING_SETTINGS'] = offset;
    michal['OTHER'] = entity;
    entity = 1;
    option = option[entity];
    entity = undefined;
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/guild_automod/AutomodFeedback.tsx';
    option = verify.bind(offset)(option);
    zuuluu['Feedback'] = golfie;
    golfie = function() { // Original name: generateFeedbackOptions
        michal = {};
        option = _closure1_slot0;
        verify = _closure1_slot1;
        tangon = 0;
        zuuluu = verify[tangon];
        golfie = undefined;
        zuuluu = option.bind(golfie)(zuuluu);
        oscard = zuuluu.intl;
        report = oscard.string;
        zuuluu = verify[tangon];
        zuuluu = option.bind(golfie)(zuuluu);
        zuuluu = zuuluu.t;
        zuuluu = zuuluu.+MbOX1;
        zuuluu = report.bind(oscard)(zuuluu);
        michal['name'] = zuuluu;
        zuuluu = _closure1_slot2;
        entity = zuuluu.BUG;
        michal['value'] = entity;
        entity = new Array(2);
        entity[0] = michal;
        michal = {};
        report = verify[tangon];
        report = option.bind(golfie)(report);
        oscard = report.intl;
        report = oscard.string;
        tangon = verify[tangon];
        tangon = option.bind(golfie)(tangon);
        tangon = tangon.t;
        tangon = tangon.CRsCRE;
        tangon = report.bind(oscard)(tangon);
        michal['name'] = tangon;
        zuuluu = zuuluu.ALLOWED;
        michal['value'] = zuuluu;
        entity[1] = michal;
        return entity;
    };
    zuuluu['generateFeedbackOptions'] = golfie;
    zuuluu['RaidAlertType'] = oscard;
    zuuluu['RaidResolutionType'] = report;
    tangon = function(argFoo) { // Original name: getMostImportantRaidResolutionType
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            zuuluu = tangon.includes;
            entity = _closure1_slot3;
            entity = entity.LEGITIMATE_ACTIVITY;
            entity = zuuluu.bind(tangon)(entity);
            if(entity) { _fun00002_ip = 107; continue _fun00001 }
 29:
            zuuluu = tangon.includes;
            entity = _closure1_slot3;
            entity = entity.DM_SPAM;
            entity = zuuluu.bind(tangon)(entity);
            if(entity) { _fun00002_ip = 95; continue _fun00001 }
 52:
            zuuluu = tangon.includes;
            entity = _closure1_slot3;
            entity = entity.JOIN_RAID;
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = _closure1_slot3;
            if(entity) { _fun00002_ip = 87; continue _fun00001 }
 79:
            entity = zuuluu.OTHER;
            _fun00002_ip = 93; continue _fun00001;
 87:
            entity = zuuluu.JOIN_RAID;
 93:
            _fun00002_ip = 105; continue _fun00001;
 95:
            zuuluu = _closure1_slot3;
            entity = zuuluu.DM_SPAM;
 105:
            _fun00002_ip = 117; continue _fun00001;
 107:
            michal = _closure1_slot3;
            entity = michal.LEGITIMATE_ACTIVITY;
 117:
            return entity;
        }
    };
    zuuluu['getMostImportantRaidResolutionType'] = tangon;
    zuuluu['RaidLockdownFeedbackType'] = michal;
    return entity;
})();