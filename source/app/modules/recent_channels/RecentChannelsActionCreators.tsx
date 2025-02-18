// app/modules/recent_channels/RecentChannelsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _bulkClearRecents
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 195; continue _fun00001 }
 13:
                    report = _closure1_slot0;
                    option = _closure1_slot2;
                    michal = 2;
                    oscard = option[michal];
                    zuuluu = undefined;
                    golfie = report.bind(zuuluu)(oscard);
                    oscard = golfie.updateUserGuildSettings;
                    michal = option[michal];
                    michal = report.bind(zuuluu)(michal);
                    michal = michal.UserSettingsDelay;
                    report = michal.INFREQUENT_USER_ACTION;
                    michal = function(argFoo) {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 3;
                        michal = michal[entity];
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        zuuluu = entity.Timestamp;
                        michal = zuuluu.fromDate;
                        entity = global;
                        entity = entity.Date;
                        tangon = entity.prototype;
                        tangon = Object.create(tangon, {constructor: {value: entity}});
                        oscard = tangon;
                        entity = new oscard[entity](report);
                        entity = entity instanceof Object ? entity : tangon;
                        michal = michal.bind(zuuluu)(entity);
                        entity = argFoo;
                        entity['guildRecentsDismissedAt'] = michal;
                        entity = true;
                        return entity;
                    };
                    michal = oscard.bind(golfie)(offset, michal, report);
                    SaveGenerator(address=85);
 83:
                    return michal;
 85:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 192; continue _fun00001 }
 91:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 4;
                    report = golfie[report];
                    verify = oscard.bind(zuuluu)(report);
                    option = verify.dispatch;
                    report = {};
                    yankee = 'BULK_CLEAR_RECENTS';
                    report['type'] = yankee;
                    report['guildId'] = offset;
                    offset = argBar;
                    report['channelIds'] = offset;
                    report = option.bind(verify)(report);
                    report = 5;
                    report = golfie[report];
                    golfie = oscard.bind(zuuluu)(report);
                    oscard = golfie.track;
                    tangon = _closure1_slot4;
                    report = tangon.CHANNEL_LIST_UPDATED;
                    tangon = {};
                    option = 'recents_dismissed';
                    tangon['action_type'] = option;
                    tangon = oscard.bind(golfie)(report, tangon);
                    return zuuluu;
 192:
                    return michal;
 195:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot5 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot4 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/recent_channels/RecentChannelsActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: bulkClearRecents
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['bulkClearRecents'] = michal;
    return entity;
})();