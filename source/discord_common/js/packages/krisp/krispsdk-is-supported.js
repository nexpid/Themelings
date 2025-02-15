// discord_common/js/packages/krisp/krispsdk-is-supported.js
module.exports = (function(_, argBar, __, ___, argGrault, ____, argPlugh) {
    mike = {};
    zulu = function() { // Original name: isSafari
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = global;
            tango = mike.navigator;
            zulu = null;
            oscar = zulu == tango;
            entity = undefined;
            if(oscar) { _fun00002_ip = 25; continue _fun00001 }
 19:
            entity = tango.vendor;
 25:
            if(!entity) { _fun00002_ip = 82; continue _fun00001 }
 28:
            oscar = mike.navigator;
            golf = zulu == oscar;
            tango = undefined;
            if(golf) { _fun00002_ip = 72; continue _fun00001 }
 43:
            oscar = oscar.vendor;
            zulu = zulu == oscar;
            tango = undefined;
            if(zulu) { _fun00002_ip = 72; continue _fun00001 }
 58:
            report = oscar.indexOf;
            zulu = 'Apple';
            tango = report.bind(oscar)(zulu);
 72:
            zulu = -1;
            entity = tango > zulu;
 82:
            if(!entity) { _fun00002_ip = 97; continue _fun00001 }
 85:
            zulu = mike.navigator;
            entity = zulu.userAgent;
 97:
            if(!entity) { _fun00002_ip = 138; continue _fun00001 }
 100:
            zulu = mike.navigator;
            report = zulu.userAgent;
            tango = report.indexOf;
            zulu = 'CriOS';
            tango = tango.bind(report)(zulu);
            zulu = -1;
            entity = zulu == tango;
 138:
            if(!entity) { _fun00002_ip = 179; continue _fun00001 }
 141:
            mike = mike.navigator;
            tango = mike.userAgent;
            zulu = tango.indexOf;
            mike = 'FxiOS';
            zulu = zulu.bind(tango)(mike);
            mike = -1;
            entity = mike == zulu;
 179:
            return entity;
        }
    };
    mike['isSafari'] = zulu;
    zulu = function() { // Original name: isMobile
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = global;
            mike = entity.navigator;
            mike = mike.userAgent;
            if(mike) { _fun00004_ip = 43; continue _fun00003 }
 17:
            tango = entity.navigator;
            zulu = null;
            report = zulu == tango;
            zulu = undefined;
            if(report) { _fun00004_ip = 40; continue _fun00003 }
 34:
            zulu = tango.vendor;
 40:
            mike = zulu;
 43:
            if(mike) { _fun00004_ip = 72; continue _fun00003 }
 46:
            zulu = entity.window;
            entity = null;
            tango = entity == zulu;
            entity = undefined;
            if(tango) { _fun00004_ip = 69; continue _fun00003 }
 63:
            entity = zulu.opera;
 69:
            mike = entity;
 72:
            zulu = /iPhone|iPad|iPod|Android|IEMobile|Windows Phone|BlackBerry|webOS|Opera Mini|Nexus 7|Nexus 10|KFAPWI/i;
            entity = zulu.test;
            entity = entity.bind(zulu)(mike);
            golf = mike;
            if(entity) { _fun00004_ip = 126; continue _fun00003 }
 102:
            zulu = /(android|bb\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
            mike = zulu.test;
            entity = mike.bind(zulu)(golf);
 126:
            if(entity) { _fun00004_ip = 170; continue _fun00003 }
 129:
            tango = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
            zulu = tango.test;
            oscar = golf.substr;
            report = 0;
            mike = 4;
            mike = oscar.bind(golf)(report, mike);
            entity = zulu.bind(tango)(mike);
 170:
            return entity;
        }
    };
    mike['isMobile'] = zulu;
    var _closure1_slot0 = mike;
    mike = function() {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = _closure1_slot0;
            entity = mike.isSafari;
            zulu = undefined;
            entity = entity.bind(zulu)();
            entity = !entity;
            if(!entity) { _fun00006_ip = 38; continue _fun00005 }
 25:
            mike = mike.isMobile;
            mike = mike.bind(zulu)();
            entity = !mike;
 38:
            return entity;
        }
    };
    entity = argGrault;
    entity['exports'] = mike;
    mike = argPlugh;
    entity = 0;
    zulu = mike[entity];
    mike = argBar;
    entity = undefined;
    tango = mike.bind(entity)(zulu);
    zulu = tango.fileFinishedImporting;
    mike = '../discord_common/js/packages/krisp/krispsdk-is-supported.js';
    mike = zulu.bind(tango)(mike);
    return entity;
})();