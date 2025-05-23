// app/modules/guild_settings/native/GuildSettingsModalLobbiesLinked.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: SyncingToGamesItem
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            tangon = entity.applicationId;
            option = entity.channels;
            var _closure2_slot0 = option;
            entity = entity.isOnlySection;
            var _closure2_slot1 = entity;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 3;
            entity = golfie[entity];
            report = undefined;
            verify = zuuluu.bind(report)(entity);
            entity = verify.useNavigation;
            entity = entity.bind(verify)();
            var _closure2_slot2 = entity;
            entity = 4;
            entity = golfie[entity];
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.useGetOrFetchApplication;
            verify = entity.bind(zuuluu)(tangon);
            tangon = option.length;
            golfie = null;
            zuuluu = 0;
            entity = null;
            if(!(zuuluu !== tangon)) { _fun00002_ip = 184; continue _fun00001 }
 107:
            tangon = _closure1_slot4;
            zuuluu = _closure1_slot0;
            offset = _closure1_slot2;
            michal = 5;
            michal = offset[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.FormSection;
            michal = {};
            offset = golfie == verify;
            golfie = undefined;
            if(offset) { _fun00002_ip = 153; continue _fun00001 }
 148:
            golfie = verify.name;
 153:
            michal['title'] = golfie;
            golfie = option.map;
            oscard = function(argFoo) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                report = _closure1_slot4;
                option = _closure1_slot0;
                offset = _closure1_slot2;
                golfie = 5;
                michal = offset[golfie];
                tangon = undefined;
                michal = option.bind(tangon)(michal);
                zuuluu = michal.FormRow;
                michal = {};
                yankee = entity.name;
                michal['label'] = yankee;
                yankee = 6;
                yankee = offset[yankee];
                romeon = option.bind(tangon)(yankee);
                yankee = romeon.getChannelIconComponent;
                yankee = yankee.bind(romeon)(entity);
                michal['leading'] = yankee;
                verify = _closure1_slot4;
                golfie = offset[golfie];
                golfie = option.bind(tangon)(golfie);
                golfie = golfie.FormRow;
                option = golfie.Arrow;
                golfie = {};
                golfie = verify.bind(tangon)(option, golfie);
                michal['trailing'] = golfie;
                oscard = function() { // Original name: onPress
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        tangon = _closure2_slot2;
                        zuuluu = tangon.push;
                        entity = _closure1_slot3;
                        michal = entity.EDIT_LINKED_LOBBY;
                        entity = {};
                        report = _closure3_slot0;
                        entity['channel'] = report;
                        option = _closure2_slot1;
                        golfie = 1;
                        report = golfie;
                        if(!option) { _fun00004_ip = 70; continue _fun00003 }
 51:
                        oscard = _closure2_slot0;
                        oscard = oscard.length;
                        report = golfie;
                        if(!(report === oscard)) { _fun00004_ip = 70; continue _fun00003 }
 67:
                        report = 2;
 70:
                        entity['numScreensToPop'] = report;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        entity = undefined;
                        return entity;
                    }
                };
                michal['onPress'] = oscard;
                entity = entity.id;
                entity = report.bind(tangon)(zuuluu, michal, entity);
                return entity;
            };
            oscard = golfie.bind(option)(oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 184:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildSettingsSections;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot4 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot5 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_settings/native/GuildSettingsModalLobbiesLinked.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: GuildSettingsModalLobbiesLinked
        entity = argFoo;
        romeon = entity.contentContainerStyle;
        zuuluu = entity.guildId;
        golfie = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 7;
        entity = verify[entity];
        tangon = undefined;
        michal = golfie.bind(tangon)(entity);
        entity = michal.useChannelsAllowedToUnlink;
        report = entity.bind(michal)(zuuluu);
        michal = _closure1_slot1;
        entity = 8;
        entity = verify[entity];
        zuuluu = michal.bind(tangon)(entity);
        michal = zuuluu.groupBy;
        entity = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                michal = entity.linkedLobby;
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00006_ip = 26; continue _fun00005 }
 20:
                entity = michal.application_id;
 26:
                return entity;
            }
        };
        zuuluu = michal.bind(zuuluu)(report, entity);
        var _closure2_slot0 = zuuluu;
        entity = global;
        michal = entity.Object;
        entity = michal.keys;
        foxtra = entity.bind(michal)(zuuluu);
        var _closure2_slot1 = foxtra;
        zuuluu = _closure1_slot5;
        entity = 9;
        entity = verify[entity];
        entity = golfie.bind(tangon)(entity);
        michal = entity.RedesignCompat;
        entity = {};
        offset = _closure1_slot4;
        report = 5;
        report = verify[report];
        report = golfie.bind(tangon)(report);
        option = report.Form;
        report = {};
        report['contentContainerStyle'] = romeon;
        romeon = foxtra.map;
        yankee = function(argFoo) {
            report = argFoo;
            tangon = _closure1_slot4;
            zuuluu = _closure1_slot6;
            michal = {};
            michal['applicationId'] = report;
            oscard = _closure2_slot0;
            oscard = oscard[report];
            michal['channels'] = oscard;
            entity = _closure2_slot1;
            oscard = entity.length;
            entity = 1;
            entity = entity === oscard;
            michal['isOnlySection'] = entity;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal, report);
            return entity;
        };
        yankee = romeon.bind(foxtra)(yankee);
        report['children'] = yankee;
        option = offset.bind(tangon)(option, report);
        report = new Array(2);
        report[0] = option;
        option = _closure1_slot4;
        oscard = 10;
        oscard = verify[oscard];
        oscard = golfie.bind(tangon)(oscard);
        golfie = oscard.NavScrim;
        oscard = {};
        oscard = option.bind(tangon)(golfie, oscard);
        report[1] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();