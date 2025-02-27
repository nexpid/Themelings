// app/modules/channel/native/components/CreateChannelTypeDescription.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildProfileFetchStatus;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelTypes;
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot6 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/channel/native/components/CreateChannelTypeDescription.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: CreateChannelTypeDescription
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            verify = michal.guildId;
            tangon = michal.channelType;
            golfie = _closure1_slot0;
            yankee = _closure1_slot1;
            michal = 5;
            michal = yankee[michal];
            report = undefined;
            zuuluu = golfie.bind(report)(michal);
            michal = zuuluu.useGuildProfile;
            michal = michal.bind(zuuluu)(verify);
            zuuluu = michal.guildProfile;
            option = michal.fetchGuildProfile;
            var _closure2_slot0 = option;
            offset = michal.fetchStatus;
            michal = 6;
            michal = yankee[michal];
            yankee = golfie.bind(report)(michal);
            golfie = yankee.useIsGuildSettingsFoundationExperimentEnabled;
            michal = {'guildId': null, 'location': 'channel_create', 'autoTrackExposure': true};
            michal['guildId'] = verify;
            golfie = golfie.bind(yankee)(michal);
            michal = _closure1_slot4;
            michal = michal.FETCHED;
            offset = offset !== michal;
            michal = !offset;
            if(offset) { _fun00002_ip = 136; continue _fun00001 }
 133:
            michal = golfie;
 136:
            if(!michal) { _fun00002_ip = 192; continue _fun00001 }
 139:
            golfie = null;
            offset = golfie == zuuluu;
            golfie = undefined;
            if(offset) { _fun00002_ip = 156; continue _fun00001 }
 150:
            golfie = zuuluu.visibility;
 156:
            offset = _closure1_slot0;
            yankee = _closure1_slot1;
            zuuluu = 7;
            zuuluu = yankee[zuuluu];
            zuuluu = offset.bind(report)(zuuluu);
            zuuluu = zuuluu.GuildProfileVisibility;
            zuuluu = zuuluu.PUBLIC;
            michal = golfie !== zuuluu;
 192:
            if(!michal) { _fun00002_ip = 209; continue _fun00001 }
 195:
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.GUILD_ANNOUNCEMENT;
            michal = tangon === zuuluu;
 209:
            golfie = _closure1_slot2;
            tangon = golfie.useEffect;
            zuuluu = new Array(2);
            zuuluu[0] = verify;
            zuuluu[1] = option;
            entity = function() {
                michal = _closure2_slot0;
                entity = undefined;
                michal = michal.bind(entity)();
                return entity;
            };
            entity = tangon.bind(golfie)(entity, zuuluu);
            entity = null;
            if(!michal) { _fun00002_ip = 364; continue _fun00001 }
 246:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot3;
            michal = {};
            yankee = _closure1_slot0;
            romeon = _closure1_slot1;
            oscard = 8;
            oscard = romeon[oscard];
            oscard = yankee.bind(report)(oscard);
            golfie = oscard.Text;
            oscard = {'variant': 'text-sm/normal', 'color': 'text-secondary'};
            option = 9;
            verify = romeon[option];
            verify = yankee.bind(report)(verify);
            offset = verify.intl;
            verify = offset.string;
            option = romeon[option];
            option = yankee.bind(report)(option);
            option = option.t;
            option = option.2Ab4IS;
            option = verify.bind(offset)(option);
            oscard['children'] = option;
            oscard = tangon.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 364:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();