import 'leaflet';
import 'leaflet.markercluster';
import 'heatmap.js';
import HeatmapOverlay from 'leaflet-heatmap';
import Cookies from 'js-cookie';
import noUiSlider from 'nouislider';
import wNumb from 'wnumb';
import { DateTime as luxonDateTime, Settings as luxonSettings } from 'luxon';
window.Highcharts = Highcharts;
window.axios = axios;
import './chart.js';
// data
const past = [[-1, 138, 164, 140, 157, 105, 91, 144, 74, 93, 93, 160, 98, 94, 110, 153, 124, 79], [-1, 137, 124, 161, 170, 105, 98, 150, 75, 119, 92, 150, 103, 99, 114, 158, 144, 84], [-1, 102, 122, 164, 168, 111, 142, 155, 77, 148, 94, 141, 110, 100, 111, 162, 136, 88], [-1, 100, 130, 157, 173, 110, 105, 160, 77, 114, 112, 160, 107, 97, 115, 162, 143, 93], [-1, 107, 130, 154, 170, 113, 115, 161, 77, 114, 111, 149, 110, 93, 117, 164, 141, 101], [-1, 105, 130, 154, -1, 114, 119, 158, 75, 146, 110, 151, 105, 90, 118, 162, 135, 100], [-1, 100, 123, 141, -1, 110, 122, 158, 75, 144, 108, 153, 101, 88, 118, 155, 135, 96], [-1, 100, 120, 131, 178, 115, 71, 153, 76, 94, 103, 157, 101, 89, 117, 153, 133, 96], [-1, 102, 122, 152, 184, 116, 97, 153, 79, 96, 105, 155, 103, 92, 119, 152, 126, 96], [147, 109, 128, 151, 159, 117, 89, 152, 83, 112, 112, 161, 110, 88, 121, 152, 128, 99], [148, 126, 146, 153, 148, 121, 89, 139, 87, 119, 117, 157, 112, 90, 126, 152, 132, 102], [152, 143, 152, 142, 147, 123, 91, 145, 85, 126, 130, 156, 126, 89, 134, 150, 131, 109], [153, 152, 158, 153, 156, 128, 103, 154, 92, 141, 135, 156, 148, 112, 148, 146, 138, 110], [154, 152, 162, 160, 136, 156, 97, 135, 107, 134, 136, 154, 156, 87, 144, 150, 141, 96], [131, 126, 128, 123, 99, 157, 68, 85, 81, 87, 156, 74, 135, 56, 118, 103, 119, 83], [83, 89, 91, 82, 81, 111, 58, 73, 54, 71, 94, 56, 85, 42, 92, 91, 98, 61], [69, 76, 77, 66, 70, 65, 51, 60, 40, 60, 58, 68, 71, 32, 77, 74, 86, 50], [64, 69, 70, 56, 60, 58, 43, 55, 37, 56, 55, 65, 65, 18, 68, 67, 78, 49], [59, 62, 60, 56, 66, 56, 40, 52, 35, 52, 54, 62, 53, 17, 59, 60, 71, 51], [56, 54, 56, 58, 71, 56, 38, 50, 34, 49, 64, 61, 52, 18, 60, 60, 67, 53], [67, 61, 63, 64, 87, 61, 47, 52, 44, 51, 71, 60, 57, 19, 61, 64, 67, 85], [69, 58, 72, 83, 90, -1, 60, 58, 51, 55, 98, 67, 58, 27, 66, 80, 70, 57], [86, 64, 82, 86, 104, 74, 67, 74, 63, 58, 91, 118, 71, 33, 71, 86, 76, 56], [120, 132, 118, 99, 105, 110, 65, 86, 56, 60, 71, 142, 109, 47, 91, 123, 83, 62], [136, 145, 126, 92, 144, 100, 74, 124, 60, 104, 103, 109, 84, 95, 86, 145, 114, 63], [105, 103, 107, 85, 133, 119, 71, 115, 59, 74, 109, 92, 82, 62, 99, 147, 103, 66], [99, 79, 92, 79, 90, 114, 72, 87, 55, 85, 96, 80, 92, 29, 102, 123, 103, 65], [80, 79, 92, 73, 80, 97, 51, 69, 52, 69, 91, 83, 90, 43, 100, 76, 90, 61], [74, 71, 72, 66, 76, 94, 43, 55, 49, 54, 85, 57, 71, 51, 87, 69, 79, 55], [79, 63, 69, 64, 82, 88, 44, 58, 45, 54, 83, 59, 76, 28, 87, 72, 88, 55], [73, 63, 72, 62, 82, 87, 44, 56, 42, 55, 84, 62, 82, 29, 84, 86, 77, 55], [71, 67, 77, 64, 88, 82, 48, 61, 45, 61, 78, 56, 71, 35, 77, 97, 84, 54], [69, 64, 82, 62, 99, 78, 47, 59, 49, 58, 74, 60, 65, 34, 79, 94, 94, 54], [97, 65, 80, 68, 92, 75, 47, 71, 49, 60, 73, 60, 64, 45, 77, 88, 85, 56], [95, 72, 87, 67, 98, 76, 53, 80, 52, 122, 76, 85, 72, 62, 82, 93, 90, 60], [82, 93, 83, 71, 100, 81, 62, 89, 58, 72, 77, 85, 73, 49, 86, 88, 100, 69], [93, 90, 115, 90, 100, 84, 66, 91, 69, 83, 87, 66, 107, 44, 101, 96, 109, 69], [96, 78, 91, 104, 97, 84, 64, 79, 65, 75, 87, 64, 101, 49, 104, 102, 95, 68], [82, 75, 79, 89, 86, 92, 54, 71, 61, 61, 89, 68, 83, 51, 81, 88, 84, 63], [72, 71, 77, 80, 75, 87, 52, 67, 53, 63, 87, 62, 70, 33, 76, 82, 77, 66], [69, 76, 73, 73, 58, 74, 54, 60, 48, 59, 67, 63, 71, 21, 71, 77, 72, 54], [62, 75, 71, 66, 56, 56, 50, 56, 46, 54, 60, 69, 75, 18, 60, 76, 69, 53], [59, 69, 70, 59, 65, 55, 47, 58, 45, 51, 62, 76, 76, 14, 56, 55, 71, 52], [61, 68, 72, 70, 56, 57, 54, 69, 51, 59, 59, 85, 73, 12, 62, 61, 70, 51], [64, 80, 93, 74, 55, 65, 53, 77, 52, 60, 71, 82, 80, 11, 65, 70, 69, 52], [113, 126, 127, 102, 104, 82, 75, 104, 69, 107, 90, 135, 128, 60, 93, 98, 116, 67], [132, 104, 146, 127, 115, 129, 71, 97, 110, 82, 131, 118, 121, 61, 109, 119, 101, 109], [112, 111, 129, 96, 95, 97, 74, 86, 73, 94, 63, 140, 100, 39, 89, 36, 116, 59], [45, 42, 52, 38, 35, 41, 26, 32, 33, 52, 55, 55, 45, 7, 35, 13, 64, 33], [23, 29, 31, 29, 28, 25, 18, 30, 32, 20, 43, 35, 30, 4, 22, 41, 17, 28], [23, 32, 41, 31, 22, 30, 21, 30, 40, 22, 37, 48, 44, 1, 16, 36, 14, 27], [27, 39, 48, 25, 13, 27, 16, 19, 35, 19, 29, 59, 35, 1, 10, 19, 10, 20], [16, 25, 25, 18, 10, 19, 11, 13, 25, 12, 24, 42, 22, 0, 7, 5, 6, 16], [15, 22, 34, 19, 6, 16, 12, 21, 27, 12, 27, 44, 23, 0, 6, 4, 6, 17], [15, 21, 30, 24, 8, 18, 15, 21, 33, 16, -1, 39, 26, 0, 8, 7, 6, 20], [17, 27, 32, 23, 12, 22, 13, 22, 37, 16, -1, 41, 29, 0, 13, 8, 10, 21], [15, 22, 25, 21, 12, 16, 13, 19, 26, 15, -1, 31, 22, 2, 12, 8, 10, 17], [14, 17, 19, 13, 12, 11, 7, 10, 12, 9, -1, 27, 13, 4, 11, 11, 9, 11], [19, 19, 19, 19, 21, 14, 9, 15, 11, 14, -1, 28, 15, 9, 21, 33, 19, 16], [19, 21, 20, 19, 15, 16, 9, 15, 10, 15, -1, 23, 16, 6, 22, 19, 17, 13], [14, 16, 15, 12, 11, 9, 8, 9, 4, 17, -1, 17, 9, 3, 12, 17, 11, 9], [15, 16, 17, 14, 15, 10, 10, 11, 7, 18, -1, 22, 12, 9, 16, 17, 15, 11], [18, 17, 19, 17, 18, 16, 8, 10, 8, 17, -1, 23, 13, 8, 17, 22, 19, 14], [20, 18, 19, 17, 19, 18, 9, 13, 9, 15, -1, 32, 14, 9, 20, 28, 23, 15], [24, 20, 22, 20, 21, 19, 8, 15, 12, 14, -1, 31, 19, 11, 22, 21, 23, 18], [37, 24, 23, 22, 19, 47, 12, 20, 12, 18, -1, 37, 18, 11, 20, 20, 29, 16], [25, 30, 26, 27, 22, 57, 12, 21, 12, 19, -1, 26, 21, 11, 27, 22, 32, 15], [28, 30, 29, 27, 22, 13, 12, 19, 10, 19, -1, 33, 25, 9, 29, 35, 33, 14], [27, 26, 30, 33, 26, 13, 17, 23, 12, 19, -1, 36, 28, 3, 28, 34, 35, 15], [33, 31, 41, 50, 25, 21, 16, 21, 14, 20, -1, 51, 32, 6, 35, 50, 43, 12], [54, 50, 53, 49, 59, 35, 23, 49, 29, 26, -1, 54, 49, 9, 40, 50, 58, 13], [83, 63, 73, 64, 107, 60, 36, 73, 42, 45, -1, 64, 59, 21, 59, 66, 76, 26], [93, 84, 80, 82, 101, 63, 67, 84, 42, 97, -1, 65, 93, 29, 126, 90, 116, 33]];
const meteos = [[9, 240, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [8, 250, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [7, 250, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [6, 280, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [6, 184, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [5, 177, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [5, 155, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [4, 190, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [4, 169, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [4, 157, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [6, 330, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [8, 152, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [10, 80, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [11, 70, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [13, 90, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [14, 110, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [15, 130, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [15, 0, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [15, 220, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [14, 130, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [14, 210, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [13, 190, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [13, 220, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [12, 250, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [11, 198, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [11, 210, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [11, 250, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [11, 250, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [10, 250, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [10, 260, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [10, 280, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [9, 290, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [9, 224, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [9, 120, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [10, 0, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [10, 173, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [11, 80, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [13, 100, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [14, 130, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [15, 100, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [16, 200, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [17, 190, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [17, 200, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [17, 230, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [17, 180, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [16, 0, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [14, 80, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [12, 150, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [12, 210, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [13, 260, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [13, 250, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [13, 250, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [12, 260, 12, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [12, 260, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [11, 260, 14, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [11, 250, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [11, 260, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [10, 280, 13, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [9, 270, 13, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [9, 270, 12, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [9, 260, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [9, 280, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [9, 270, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [9, 280, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [10, 270, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [11, 290, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [12, 300, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [12, 300, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [13, 300, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [12, 290, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [12, 310, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [11, 2, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [10, 118, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]];
const markers = [["Свердловская", 55.981876, 92.877846, 93, "<a class=\"sensor-link-remote\" id=\"59f28734-a82f-41ba-af9f-6193c08f84f4\" data-remote=\"true\" href=\"/ru/krs/sensors/sverdlovskaya\">Свердловская</a>", "#59f28734-a82f-41ba-af9f-6193c08f84f4"], ["Юности", 56.0181054, 92.98422857, 84, "<a class=\"sensor-link-remote\" id=\"8d0fafbb-fe8a-4452-9009-21225c11dac6\" data-remote=\"true\" href=\"/ru/krs/sensors/yunosti\">Юности</a>", "#8d0fafbb-fe8a-4452-9009-21225c11dac6"], ["Павлова", 55.993896, 92.947685, 80, "<a class=\"sensor-link-remote\" id=\"b8f328c8-6574-46fe-a0f3-cc39d55628b8\" data-remote=\"true\" href=\"/ru/krs/sensors/pavlova\">Павлова</a>", "#b8f328c8-6574-46fe-a0f3-cc39d55628b8"], ["Копылова", 56.013161, 92.817154, 82, "<a class=\"sensor-link-remote\" id=\"1b227af2-d55a-4586-9af7-24817c082dad\" data-remote=\"true\" href=\"/ru/krs/sensors/kopylova\">Копылова</a>", "#1b227af2-d55a-4586-9af7-24817c082dad"], ["Норильская, 4", 56.056901, 92.721567, 101, "<a class=\"sensor-link-remote\" id=\"0d6e1f81-c23e-4202-b5a7-300d9859d947\" data-remote=\"true\" href=\"/ru/krs/sensors/norilskaya\">Норильская, 4</a>", "#0d6e1f81-c23e-4202-b5a7-300d9859d947"], ["Базаиха", 55.974949, 92.790833, 63, "<a class=\"sensor-link-remote\" id=\"f2bf810e-f1f2-4f69-8a08-13a87625ce01\" data-remote=\"true\" href=\"/ru/krs/sensors/bazaiha\">Базаиха</a>", "#f2bf810e-f1f2-4f69-8a08-13a87625ce01"], ["Мужества", 56.034344, 92.884483, 67, "<a class=\"sensor-link-remote\" id=\"f33e1d3f-d811-4424-b1cd-9df82cb3cd45\" data-remote=\"true\" href=\"/ru/krs/sensors/muzhestva\">Мужества</a>", "#f33e1d3f-d811-4424-b1cd-9df82cb3cd45"], ["мкрн Живём", 56.06414866, 92.82383657, 84, "<a class=\"sensor-link-remote\" id=\"8ac420e0-cbff-469a-a64c-ec7f8b1fa8e9\" data-remote=\"true\" href=\"/ru/krs/sensors/mkrn-zhivyom\">мкрн Живём</a>", "#8ac420e0-cbff-469a-a64c-ec7f8b1fa8e9"], ["Академгородок", 55.9947425, 92.755815, 42, "<a class=\"sensor-link-remote\" id=\"feaa41bf-2db2-4ee9-88a2-f75c345f8da7\" data-remote=\"true\" href=\"/ru/krs/sensors/akadem\">Академгородок</a>", "#feaa41bf-2db2-4ee9-88a2-f75c345f8da7"], ["Весны", 56.0364009, 92.9102094, 97, "<a class=\"sensor-link-remote\" id=\"4a57cd59-bf70-4570-b44e-0723c1d9f55c\" data-remote=\"true\" href=\"/ru/krs/sensors/vesny\">Весны</a>", "#4a57cd59-bf70-4570-b44e-0723c1d9f55c"], ["Удачный", 55.97852448, 92.69506708, -1, "<a class=\"sensor-link-remote\" id=\"18103276-aaf9-4018-b81f-f2c3ebe9e15e\" data-remote=\"true\" href=\"/ru/krs/sensors/udachniy\">Удачный</a>", "#18103276-aaf9-4018-b81f-f2c3ebe9e15e"], ["Шевченко", 55.9961625, 93.03049853, 65, "<a class=\"sensor-link-remote\" id=\"7738a9cc-7888-4a8e-8abd-e9a2d1dd0bb4\" data-remote=\"true\" href=\"/ru/krs/sensors/shevchenko\">Шевченко</a>", "#7738a9cc-7888-4a8e-8abd-e9a2d1dd0bb4"], ["Южный Берег", 55.9975852, 92.90061577, 93, "<a class=\"sensor-link-remote\" id=\"f10f210d-8ec4-4341-be9a-fb21a2deac6a\" data-remote=\"true\" href=\"/ru/krs/sensors/yuzhnyy-bereg\">Южный Берег</a>", "#f10f210d-8ec4-4341-be9a-fb21a2deac6a"], ["Ботанический бульвар", 56.040778, 92.751942, 29, "<a class=\"sensor-link-remote\" id=\"b26f219b-f3db-4f49-8a8e-958a48a435a4\" data-remote=\"true\" href=\"/ru/krs/sensors/botanicheskiy\">Ботанический бульвар</a>", "#b26f219b-f3db-4f49-8a8e-958a48a435a4"], ["Карла Маркса", 56.011147, 92.880922, 126, "<a class=\"sensor-link-remote\" id=\"9ee92758-a388-4e73-8185-e2d60b617ada\" data-remote=\"true\" href=\"/ru/krs/sensors/test14\">Карла Маркса</a>", "#9ee92758-a388-4e73-8185-e2d60b617ada"], ["Проспект Свободный, 10", 56.024177, 92.82518, 90, "<a class=\"sensor-link-remote\" id=\"ef4f8038-2785-4772-a56b-569f4423923f\" data-remote=\"true\" href=\"/ru/krs/sensors/test15\">Проспект Свободный, 10</a>", "#ef4f8038-2785-4772-a56b-569f4423923f"], ["Сергея Лазо, 6", 56.047306, 92.956286, 116, "<a class=\"sensor-link-remote\" id=\"f1e0388f-d8b6-43be-9376-a3bcf3173d80\" data-remote=\"true\" href=\"/ru/krs/sensors/Lazo_t8\">Сергея Лазо, 6</a>", "#f1e0388f-d8b6-43be-9376-a3bcf3173d80"], ["Осенняя", 55.992246, 92.688584, 33, "<a class=\"sensor-link-remote\" id=\"f038ed04-a852-47e2-afa3-4cc3a51e88df\" data-remote=\"true\" href=\"/ru/krs/sensors/osennyaya\">Осенняя</a>", "#f038ed04-a852-47e2-afa3-4cc3a51e88df"]];
const markers_cities = [["Усть-Каменогорск", 49.971819, 82.593797, -1, "<a class=\"city-link-remote\" id=\"6050b5cb-9f31-49c4-bda3-7cf1c86e2236\" href=\"/ru/uskemen\">Усть-Каменогорск</a>", "#6050b5cb-9f31-49c4-bda3-7cf1c86e2236"], ["Павлодар ", 52.283383, 76.964457, -1, "<a class=\"city-link-remote\" id=\"2cc4f53b-3d0c-4e97-8eb2-ce86b1fbbf5c\" href=\"/ru/pavlodar\">Павлодар </a>", "#2cc4f53b-3d0c-4e97-8eb2-ce86b1fbbf5c"], ["Темиртау", 50.049151, 72.950977, -1, "<a class=\"city-link-remote\" id=\"c6e7c4e1-3713-4d3d-9dcb-1994538da3ed\" href=\"/ru/temirtau\">Темиртау</a>", "#c6e7c4e1-3713-4d3d-9dcb-1994538da3ed"], ["Алматы", 43.25667, 76.92861, -1, "<a class=\"city-link-remote\" id=\"8e421580-e5ed-4a01-b2db-b2afe847bb8c\" href=\"/ru/almaty\">Алматы</a>", "#8e421580-e5ed-4a01-b2db-b2afe847bb8c"], ["Нур-Султан", 51.1801, 71.44598, -1, "<a class=\"city-link-remote\" id=\"3c0a92e4-2619-44d2-a837-aea9ee140c89\" href=\"/ru/nursultan\">Нур-Султан</a>", "#3c0a92e4-2619-44d2-a837-aea9ee140c89"], ["Караганда", 49.83333, 73.1658, -1, "<a class=\"city-link-remote\" id=\"cff8b305-e5cc-448a-a487-ed4a32203310\" href=\"/ru/karaganda\">Караганда</a>", "#cff8b305-e5cc-448a-a487-ed4a32203310"], ["Бишкек", 42.866473, 74.582927, -1, "<a class=\"city-link-remote\" id=\"e4e55b59-ae94-4994-8d23-b77bcee93162\" href=\"/ru/bishkek\">Бишкек</a>", "#e4e55b59-ae94-4994-8d23-b77bcee93162"], ["Москва", 55.7504, 37.6728, 22, "<a class=\"city-link-remote\" id=\"010b0cb9-e188-4a2a-8c63-d078dd555f4e\" href=\"/ru/moscow\">Москва</a>", "#010b0cb9-e188-4a2a-8c63-d078dd555f4e"], ["Сибай", 52.717516, 58.672178, 8, "<a class=\"city-link-remote\" id=\"15a89fc9-2275-4631-8569-624063a61c92\" href=\"/ru/sibay\">Сибай</a>", "#15a89fc9-2275-4631-8569-624063a61c92"], ["Новокузнецк", 53.780528, 87.139005, 54, "<a class=\"city-link-remote\" id=\"04fbd73a-6ef4-409d-95bc-889ddb01ff52\" href=\"/ru/novokuznetsk\">Новокузнецк</a>", "#04fbd73a-6ef4-409d-95bc-889ddb01ff52"], ["Нижний Новгород", 56.28275, 43.913277, 15, "<a class=\"city-link-remote\" id=\"7daedca9-d917-4e2d-88a2-c2566f8a36d4\" href=\"/ru/Nizhny%20Novgorod\">Нижний Новгород</a>", "#7daedca9-d917-4e2d-88a2-c2566f8a36d4"], ["Искитим", 54.634986, 83.299691, 29, "<a class=\"city-link-remote\" id=\"f50171f0-68cc-44d5-b5ca-b6864683a7ab\" href=\"/ru/iskitim\">Искитим</a>", "#f50171f0-68cc-44d5-b5ca-b6864683a7ab"], ["Томск", 56.485048, 84.960177, 56, "<a class=\"city-link-remote\" id=\"95787cb5-da9b-4539-8fca-87cf3f49d239\" href=\"/ru/tomsk\">Томск</a>", "#95787cb5-da9b-4539-8fca-87cf3f49d239"], ["Новосибирск", 54.99, 82.933952, 26, "<a class=\"city-link-remote\" id=\"f91c125b-fdfb-4db7-973d-6a75571e327a\" href=\"/ru/novosibirsk\">Новосибирск</a>", "#f91c125b-fdfb-4db7-973d-6a75571e327a"], ["Санкт-Петербург", 59.930754, 30.327849, -1, "<a class=\"city-link-remote\" id=\"cb0139c3-11a8-4ee8-b1c6-d05a09ee623b\" href=\"/ru/spb\">Санкт-Петербург</a>", "#cb0139c3-11a8-4ee8-b1c6-d05a09ee623b"]];


let mapInstance = L.map('mapInstance').setView([56.0091, 92.8725], 11)
    , heatmapLayer = new HeatmapOverlay(
        {
            gradient: {
                '0': '#3556A1',
                '0.2': '#FF9C00',
                '0.4': '#FF4B39',
                '0.6': '#FF4B39',
                '0.8': '#2d2d2d',
                '1': '#0f0f0f'
            },
            "minOpacity": .8,
            "blur": 1,
            "radius": 0.04,
            "scaleRadius": true,
            "latField": 'lat',
            "lngField": 'lng',
            "valueField": 'count'
        }
    )
    , cluster = setMarkers(L.markerClusterGroup(), markers, true)
    , cities = setMarkers(L.markerClusterGroup(), markers_cities, false)
    , showSensors = () => { mapInstance.addLayer(cluster); Cookies.set("show_sensors", 1, { expires: 730 }); }
    , hideSensors = () => mapInstance.removeLayer(cluster)
    , hideHeatMap = () => heatmapLayer.setData({ data: [] })
    , showHeatMap = () => heatmapLayer.setData(testData())
    , updateHeatMap = () => +Cookies.get("show_heatmap") ? heatmapLayer.setData(testData()) : hideHeatMap()
    , getPointsMarkers = () => new Array(markers.length).fill(undefined).map((el, idx) => ({ lat: markers[idx][1], lng: markers[idx][2], count: markers[idx][3] }))
    , testData = () => ({ max: 300, min: 12, data: getPointsMarkers() });

// add heatmap
heatmapLayer.addTo(mapInstance);
L.tileLayer(
    'https://nebo.live/tiles/styles/nebo/{z}/{x}/{y}.png'
    , { maxZoom: 18, attribution: false, id: 'mapbox.streets' }
).addTo(mapInstance);
mapInstance.addLayer(cluster).addLayer(cities);


// search select
(function () {
    document.querySelector('.select-subject .selected').addEventListener('click', function () {
        this.classList.toggle('is-open');
        this.closest('.select-subject').querySelector('.places .search input').focus()
    });
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.select-subject .places') && !e.target.closest('.select-subject .selected')) {
            document.querySelector('.select-subject .selected').classList.remove('is-open')
        }
    });
    document.querySelector('.select-subject .places .search input').addEventListener('keyup', function (e) {
        console.log('key-up');

        document.querySelectorAll('.select-subject .places .body .item').forEach(el => {
            let isFound = new RegExp(this.value).exec(el.querySelector('p').innerText);
            el.classList[isFound ? 'remove' : 'add']('is-hidden')
        })
        // document.querySelector('.select-subject .places .body .group-label').classList[this.value ? 'add' : 'remove']('is-hidden');
        if (!document.querySelectorAll('.select-subject .places .body .item:not(.is-hidden)').length) {
            document.querySelector('.select-subject .places .body .empty').classList.add('is-show')
        } else {
            document.querySelector('.select-subject .places .body .empty').classList.remove('is-show')
        }
    });

    document.querySelectorAll('.select-subject .places .body .item').forEach((el, idx, arr) => {
        el.addEventListener('click', (e) => {
            var curr_url = window.location.pathname.match('\/(en|ru)\/*')
            if (curr_url != null) {
                if (curr_url[0].charAt(curr_url[0].length - 1) != '/') {
                    curr_url[0] += '/'
                }
                curr_url[0] += el.dataset.value
                window.location.href = curr_url[0]
            } else {
                window.location.href = el.dataset.value
            }
            arr.forEach(el => el.classList.remove('is-selected'))
            el.classList.add('is-selected');
            document.querySelector('.select-subject .selected span').innerHTML = el.querySelector('p').innerText
            document.querySelector('.select-subject .selected').classList.toggle('is-open')
        })
    })
})();
// timeline
(function () {
    // slider init
    let slider = document.querySelector('.history-slider'),
        toltipsLocal = (() => {
            luxonSettings.defaultLocale = luxonDateTime.local().resolvedLocaleOpts().locale;
            let arr = [],
                timeStart = luxonDateTime.local().minus({ days: 3 }).startOf('hour');
            for (let i = 0; i < past.length; i++) {
                arr.push([timeStart.toFormat("ccc. dd"), timeStart.toFormat("HH:mm")]);
                timeStart = timeStart.plus({ minutes: 60 });
            }
            return arr
        })();
    noUiSlider.create(slider, {
        start: toltipsLocal.length - 1,
        step: 1,
        range: {
            'min': 0,
            'max': toltipsLocal.length - 1
        },
        tooltips: { to: (a) => toltipsLocal[a.toFixed(0)][1] },
        pips: {
            mode: 'positions',
            values: [0, 33, 66, 100],
            density: 24,
            format: { to: (a) => toltipsLocal[a.toFixed(0)][0] },
        },
        format: wNumb({ decimals: 0 })
    }).on('update', function (value) {
        // set markers new data
        for (var i = 0; i < markers.length; i++) {
            markers[i][3] = past[+value][i];
        }
        // redraw sensors
        if (+Cookies.get("show_sensors") || !Cookies.get("show_sensors")) {
            mapInstance.addLayer(cluster = setMarkers(cluster, markers, false));
        }
        // update heatmap
        updateHeatMap();
        // update temperature
        document.querySelector('.temperature').innerHTML = meteos[+value][0] + " &degC";
        // update wind direction arrow
        ['-webkit-transform', '-moz-transform', '-ms-transform', '-o-transform', 'transform'].forEach(el => {
            document.querySelector('.wind img').style[el] = `translate(-50%, -50%) rotate(${meteos[+value][1]}deg)`;
        })
    });
    // Animate timeline
    let intervalId;
    document.querySelector('.play-button').addEventListener('click', function () {
        this.classList.toggle('is-stop');
        if (!this.classList.contains('is-stop')) {
            intervalId = setInterval(() => {
                let curValue = slider.noUiSlider.get(),
                    maxValue = slider.noUiSlider.options.range.max,
                    next = curValue == maxValue ? 0 : +curValue + 1;
                slider.noUiSlider.set(next)
            }, 620);
        } else {
            clearInterval(intervalId);
        }
    })
})();

function getOpts(value) {
    var color = 'gray'
    var klass = 'marker-inactive'
    var zone = 1;

    if (value.toString().includes('%') || value.toString().includes('✓') || value.toString().includes('?')) {
        color = '#fff0f5';
        klass = 'map-label-claim';
    } else {
        value = parseInt(value);
        if (value >= 0) {
            color = '#5B8CFE';
            klass = 'marker-zone1';
            zone = 2;
        }
        if (value >= 50) {
            color = '#ffc400';
            klass = 'marker-zone2';
            zone = 3;
        }
        if (value >= 100) {
            color = '#ff9c00';
            klass = 'marker-zone3';
            zone = 4;
        }
        if (value >= 150) {
            color = '#ff4b39';
            klass = 'marker-zone4';
            zone = 5;
        }
        if (value >= 200) {
            color = '#2d2d2d';
            klass = 'marker-zone5';
            zone = 6;
        }
        if (value >= 300) {
            color = '#262626';
            klass = 'marker-zone6';
            zone = 7;
        }
    }
    return { color, klass, zone };
}

function setMarkers(cluster, markers, fitToBounds = false) {

    cluster.remove();

    let layer = L.markerClusterGroup({
        iconCreateFunction: function (cluster) {
            let _sum = 0
            let _count = 0
            cluster.getAllChildMarkers().forEach(function (element) {
                if (element.options.value >= 0) {
                    _count = _count + 1
                    _sum = _sum + element.options.value
                }
            });
            let _res = Math.round(_sum / _count)
            return L.divIcon({
                html:
                    '<div class="my-div-icon-cluster ' + getOpts(_res).klass + '"><span class="my-div-span">' + _res + '</span></div>',
                className: 'my-div-icon',
                iconSize: new L.Point(50, 50)
            });
        },
        maxClusterRadius: 40
    });

    let bounds = L.latLngBounds(L.latLng(markers[0][1], markers[0][2]), L.latLng(markers[0][1], markers[0][2]));

    for (let i = 0; i < markers.length; i++) {
        let sensor = markers[i];
        let color = getOpts(sensor[3]).color;
        let klass = getOpts(sensor[3]).klass;
        let marker = L.marker([sensor[1], sensor[2]], {
            value: sensor[3],
            title: sensor[0],
            url: sensor[5],
            icon: new L.DivIcon({
                className: 'my-div-icon ' + getOpts(sensor[3]).klass,
                html: `<span class="my-div-span">${sensor[3] + sensor[4]}</span>`,
                iconAnchor: [15, 15]
            })
        }).addTo(layer);

        marker.addEventListener('click', function (e) {
            document.querySelector('.loader').classList.add('loading');
            e.target._icon.querySelector('a').click();
            window.history.pushState({}, "", e.target._icon.querySelector('a').href);
        });

        bounds.extend(L.latLng(sensor[1], sensor[2]))
    }

    if (fitToBounds) mapInstance.fitBounds(bounds, { padding: [50, 90] });

    return layer;
}

// check current cookies state and do action
if (+Cookies.get("show_sensors") || !Cookies.get("show_sensors")) {
    showSensors();
    document.querySelector('#toggleLayer_sensors').classList.add('is-selected');
} else {
    hideSensors();
}
if (+Cookies.get("show_heatmap")) {
    showHeatMap();
    document.querySelector('#toggleLayer_heatmap').classList.add('is-selected');
} else {
    hideHeatMap();
}

// add events listeners for button toggler map layers
document.querySelector('#toggleLayer_heatmap').addEventListener('click', () => {
    if (+Cookies.get("show_heatmap")) {
        Cookies.set("show_heatmap", 0, { expires: 730 });
        hideHeatMap();
        document.querySelector('#toggleLayer_heatmap').classList.remove('is-selected');
    } else {
        Cookies.set("show_heatmap", 1, { expires: 730 })
        showHeatMap();
        document.querySelector('#toggleLayer_heatmap').classList.add('is-selected');
    }
});
document.querySelector('#toggleLayer_sensors').addEventListener('click', () => {
    if (+Cookies.get("show_sensors")) {
        Cookies.set("show_sensors", 0, { expires: 730 });
        hideSensors();
        document.querySelector('#toggleLayer_sensors').classList.remove('is-selected');
    } else {
        Cookies.set("show_sensors", 1, { expires: 730 })
        showSensors();
        document.querySelector('#toggleLayer_sensors').classList.add('is-selected');
    }
});

// modals
document.querySelectorAll('[data-open]').forEach(el => {
    el.addEventListener('click', () => {
        let isTypeTooltip = el.dataset.open == 'tooltip'
            , toggleClass = 'is-show';
        let window = isTypeTooltip ?
            el.closest('li').querySelector('.tooltip').classList :
            document.querySelector('#' + el.dataset.open).classList;
        let isOpen = window.contains(toggleClass);

        hideAllPopupsAndTooltips();
        if (!isOpen) {
            window.add(toggleClass);
        }
        console.log(isOpen);

        if ((isTypeTooltip && !isOpen) || (el.dataset.open == 'ratingPollutionPopup' && !isOpen)) {
            el.classList.add('is-focused')
        }
    })
});
// action close all windows/popups/tooltips
window.hideAllPopupsAndTooltips = function () {
    document.querySelectorAll('.tooltip, .mid .is-show, .app .popup, .mid .buttons > li > button').forEach(el => {
        ['is-show', 'is-focused'].forEach(el2 => {
            if (el.classList.contains(el2)) {
                el.classList.remove(el2)
            }
        })
    });
}
//  close if click was on the X button
document.querySelectorAll('.popup .close').forEach(el =>
    el.addEventListener('click', hideAllPopupsAndTooltips)
);
//  close if click was not on the window
document.addEventListener('click', (e) => {
    if (!e.target.closest('.tooltip') && !e.target.closest('.popup') && !e.target.closest('[data-open]')) {
        hideAllPopupsAndTooltips();
    }
});
